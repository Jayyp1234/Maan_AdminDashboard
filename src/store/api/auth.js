import { API_ENDPOINTS } from "@/constants/apiEndpoints";
import { apiClient } from "@/utils/apiInterceptor";

class AuthAPI {
	async login(email, password) {
		return await apiClient.post(API_ENDPOINTS.LOGIN, { email, password });
	}

	async register(userData) {
		return await apiClient.post(API_ENDPOINTS.REGISTER, userData);
	}

	async logout() {
		return await apiClient.post(API_ENDPOINTS.LOGOUT);
	}

	async sendResetOtp(email) {
		return await apiClient.post(API_ENDPOINTS.SEND_FORGOT_PASSWORD_OTP, { email });
	}

	async verifyResetOtp(email, otp) {
		return await apiClient.post(API_ENDPOINTS.VERIFY_OTP, { email, otp });
	}

	async resetPasswordWithOtp(email, otp, password, password_confirmation) {
		return await apiClient.post(API_ENDPOINTS.RESET_PASSWORD_WITH_OTP, {
			email,
			otp,
			password,
			password_confirmation,
		});
	}

	async verifyToken(token) {
		return await apiClient.get("/auth/verify", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
}

export const authAPI = new AuthAPI();
