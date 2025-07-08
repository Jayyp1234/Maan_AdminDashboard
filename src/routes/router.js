export const AUTHENTICATED_ROUTES = {
	index: "/dashboard",
	vendors: "/dashboard/vendors",
	admin: "/dashboard/admin-staffs",
	payments: "/dashboard/payments",
};

export const UNAUTHENTICATED_ROUTES = {
	LOGIN: "/",
	// LOGIN: "/login",
	// REGISTER: '/register',
	FORGOT_PASSWORD: "/forgot-password",
	RESET_PASSWORD: "/reset-password",
	VERIFY_CODE: "/verify-code",
	_404: "*",
};
