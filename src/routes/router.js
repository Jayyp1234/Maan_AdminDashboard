export const AUTHENTICATED_ROUTES = {
	index: "/dashboard",
	vendors: "/dashboard/vendors",
	admin: "/dashboard/admin-staffs",

	// Top-level pages
	swappings: "/dashboard/swappings",
	walletFundingRequest: "/dashboard/wallet-funding-request",
	settings: "/dashboard/settings",
	userUpload: "/dashboard/user-upload",

	// Business Section
	users: {
		index: "/dashboard/users",
		userUploads: "/dashboard/user/upload",
		userUploadsDetails: "/dashboard/user/upload/:id",
		userDetails: "/dashboard/user/:id",
	},

	// Business Section
	business: {
		index: "/dashboard/business",
		details: "/dashboard/business/:uuid",
		documents: "/dashboard/business/documents",
		documentslists: "/dashboard/business/documents/:uuid",
	},

	staffs: {
		index: "/dashboard/staffs/index",
		add: "/dashboard/staff/add",
		edit: "/dashboard/staff/edit/:id",
		accessControl: "/dashboard/staffs/access-control",
	},

	// Transactions Section
	transactions: {
		index: "/dashboard/transactions",
		details: "/dashboard/transaction/details/:trx_id",
		payin: "/dashboard/transactions/payin",
		payout: "/dashboard/transactions/payout",
		partners: "/dashboard/transactions/partners",
		manageLimits: {
			index: "/dashboard/transactions/manage-limits",
			create: "/dashboard/transactions/limits/create",
			edit: "/dashboard/transactions/limits/edit/:id",
		},
		FundSettings: "/dashboard/transactions/FundSettings",
		adminTransfer: "/dashboard/transactions/admin-transfer",
	},

	// Payment Gateways Section
	gateways: {
		index: "/dashboard/gateways",
		gatewayMapping: "/dashboard/gateways/payin",
		payinGatewayCreate: "/dashboard/gateways/payin/create",
		payinGatewayEdit: "/dashboard/gateways/payin/edit/:id",
		payinGatewayCurrencies: "/dashboard/gateways/payin/currencies/:id",
		currencies: "/dashboard/gateways/currencies",
		banks: "/dashboard/gateways/banks",
		sms: "/dashboard/gateways/sms",
	},
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
