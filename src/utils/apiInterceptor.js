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

		// 1. Prepare base headers, allowing `options.headers` to override
		const headers = {
			// Always prefer JSON response if not specified otherwise
			Accept: "application/json",
			...(token && { Authorization: `Bearer ${token}` }),
			// Spread any custom headers provided in options, they can override 'Accept' or 'Authorization'
			...options.headers,
		};

		// 2. Determine the request body and adjust Content-Type header accordingly
		let requestBody = options.body; // This is the 'data' passed from post/put/patch methods
		let finalBody = undefined; // The actual body to send with fetch

		if (requestBody instanceof FormData) {
			finalBody = requestBody;
			// IMPORTANT: For FormData, the Content-Type header is automatically set by the Fetch API.
			// We MUST delete any manually set 'Content-Type' header to prevent conflicts.
			delete headers["Content-Type"];
		} else if (typeof requestBody === "object" && requestBody !== null) {
			// If it's a plain JavaScript object (not FormData), assume JSON payload
			finalBody = JSON.stringify(requestBody);
			// Set Content-Type for JSON payloads
			headers["Content-Type"] = "application/json";
		} else {
			// For other primitive types (string, number, boolean) or undefined/null
			// (e.g., for GET/DELETE requests without a body), use as is.
			finalBody = requestBody;
		}

		// 3. Construct the fetch configuration object
		const config = {
			...options, // Start by spreading all provided options (method, cache, credentials, etc.)
			headers: headers, // Explicitly set the prepared headers
			// Only include 'body' property if it's a method that allows a body
			// and if a 'finalBody' is actually present.
			// HEAD method typically doesn't have a body either.
			...(finalBody !== undefined &&
				finalBody !== null &&
				!["GET", "HEAD"].includes(options.method?.toUpperCase()) && {
					body: finalBody,
				}),
		};

		try {
			const response = await fetch(url, config);

			// Handle unauthorized responses and token refresh
			if (response.status === 401) {
				try {
					const refreshedData = await authAPI.refreshToken();
					const retryConfig = {
						...config, // Use the original config, including method, body type etc.
						headers: {
							...config.headers, // Keep all existing headers
							Authorization: `Bearer ${refreshedData.token}`, // Update token
						},
					};
					const retryResponse = await fetch(url, retryConfig);

					if (!retryResponse.ok) {
						throw new Error("Request failed after token refresh");
					}
					// Attempt to parse JSON, fallback to text if Content-Type not JSON
					const retryContentType = retryResponse.headers.get("content-type");
					if (retryContentType && retryContentType.includes("application/json")) {
						return retryResponse.json();
					}
					return retryResponse.text(); // Return text for non-JSON responses
				} catch (refreshError) {
					// If refresh fails, logout user
					store.dispatch(clearCredentials());
					window.location.href = "/";
					throw new Error("Session expired. Please login again.");
				}
			}

			// Handle non-OK responses (e.g., 400, 500)
			if (!response.ok) {
				const responseContentType = response.headers.get("content-type");
				// Try to parse error as JSON, fallback to text or generic error
				if (responseContentType && responseContentType.includes("application/json")) {
					const errorJson = await response.json();
					throw new Error(errorJson.message || errorJson.error || `HTTP error! status: ${response.status}`);
				} else {
					const errorText = await response.text();
					throw new Error(errorText || `HTTP error! status: ${response.status}`);
				}
			}

			// Handle successful responses
			const responseContentType = response.headers.get("content-type");
			// Only parse as JSON if Content-Type header indicates JSON
			if (responseContentType && responseContentType.includes("application/json")) {
				return response.json();
			}
			// For responses like 204 No Content, 200 OK with no body, etc.
			// Return text (might be empty string) or null if specific handling is needed for 204
			return response.text();
		} catch (error) {
			// Re-throw any errors caught
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
