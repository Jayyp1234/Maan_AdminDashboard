export const API_ENDPOINTS = {
	BASE_URL: `${import.meta.env.VITE_API_BASE_URL}`,

	//Authentication
	LOGIN: "/api/admin/login",
	SEND_FORGOT_PASSWORD_OTP: "/api/admin/send-reset-otp",
	VERIFY_OTP: "/api/admin/verify-reset-otp",
	RESET_PASSWORD_WITH_OTP: "/api/admin/reset-password-with-otp",
	REGISTER: "/api/admin/register",
	LOGOUT: "/api/admin/logout",
	USER_ADMIN_PROFILE: (id) => `/api/admin/admin/${id}`,

	// VENDORS
	GET_ALL_VENDORS: "/api/admin/vendors",

	// PAYMENTS
	FETCH_ALL_TRANSACTIONS: "https://enetworkspay.com/api/fetch_all_transactions.php",

	// ADMIN
	CREATE_ADMIN: "/api/admin/register",
	GET_ALL_STAFFS: "/api/admin/admin",
	MODIFY_STAFF: (id) => `/api/admin/admin/${id}`,
};
