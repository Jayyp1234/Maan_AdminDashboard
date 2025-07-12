import { store } from "../store";
import { clearCredentials } from "../store/slices/authSlice";
import { authAPI } from "../store/api/auth";
import { API_ENDPOINTS } from "../constants/apiEndpoints";

class APIClient {
	constructor() {
		this.baseURL = API_ENDPOINTS.BASE_URL;
	}

	async request(endpoint, options = {}) {
		const url = `${this.baseURL}${endpoint}`;
		const token = localStorage.getItem("token");

		// 1. Prepare base headers
		const headers = {
			Accept: "application/json",
			...(token && { Authorization: `Bearer ${token}` }),
			...options.headers,
		};

		// 2. Determine request body
		let requestBody = options.body;
		let finalBody;

		if (requestBody instanceof FormData) {
			finalBody = requestBody;
			delete headers["Content-Type"];
		} else if (typeof requestBody === "object" && requestBody !== null) {
			finalBody = JSON.stringify(requestBody);
			headers["Content-Type"] = "application/json";
		} else {
			finalBody = requestBody;
		}

		// 3. Construct fetch config
		const config = {
			...options,
			headers,
			...(finalBody !== undefined &&
				finalBody !== null &&
				!["GET", "HEAD"].includes(options.method?.toUpperCase()) && {
					body: finalBody,
				}),
		};

		// 4. Perform request and handle response
		try {
			const response = await fetch(url, config);

			// Handle 401 Unauthorized - no refresh, just logout
			// if (response.status === 401) {

			// store.dispatch(clearCredentials());
			// window.location.href = "/"; // Or your login route
			// throw new Error("Session expired. Please login again.");
			// }

			// Handle other non-OK
			if (!response.ok) {
				const responseContentType = response.headers.get("content-type");

				if (responseContentType && responseContentType.includes("application/json")) {
					const errorJson = await response.json();
					throw new Error(errorJson.message || errorJson.error || `HTTP error! status: ${response.status}`);
				} else {
					const errorText = await response.text();
					throw new Error(errorText || `HTTP error! status: ${response.status}`);
				}
			}

			// Handle OK
			const responseContentType = response.headers.get("content-type");
			if (responseContentType && responseContentType.includes("application/json")) {
				return response.json();
			}

			return response.text();
		} catch (error) {
			throw error;
		}
	}

	// --- Helper methods for HTTP verbs ---

	get(endpoint, options = {}) {
		return this.request(endpoint, { method: "GET", ...options });
	}

	post(endpoint, data, options = {}) {
		// Pass 'data' directly. The 'request' method will now correctly handle JSON.stringify
		// for plain objects or pass FormData objects directly.
		return this.request(endpoint, {
			method: "POST",
			body: data, // Pass the raw data/FormData object here
			...options,
		});
	}

	put(endpoint, data, options = {}) {
		// Pass 'data' directly.
		return this.request(endpoint, {
			method: "PUT",
			body: data,
			...options,
		});
	}

	delete(endpoint, options = {}) {
		// DELETE methods typically don't have a body, but if they do,
		// it would be passed as options.body from the caller.
		return this.request(endpoint, { method: "DELETE", ...options });
	}

	patch(endpoint, data, options = {}) {
		// Pass 'data' directly.
		return this.request(endpoint, {
			method: "PATCH",
			body: data,
			...options,
		});
	}
}

export const apiClient = new APIClient();
