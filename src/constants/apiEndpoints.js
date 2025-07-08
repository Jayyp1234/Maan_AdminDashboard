export const API_ENDPOINTS = {
	BASE_URL: `${import.meta.env.VITE_API_BASE_URL}`,
	//Authentication
	LOGIN: "/api/admin/login",
	SEND_FORGOT_PASSWORD_OTP: "auth/api/admin/send-reset-otp",
	VERIFY_OTP: "auth/api/admin/verify-reset-otp",
	RESET_PASSWORD_WITH_OTP: "auth/api/admin/reset-password-with-otp",
	REGISTER: "auth/api/admin/register",
	LOGOUT: "auth/api/admin/logout",

	// Transactions
	GET_TRANSACTIONS: "transactions/api/admin/transactions",
	GET_SINGLE_TRANSACTION: (trx_id) => `transactions/api/admin/transactions/details/${trx_id}`,
	TRANSACTION_STATUS: (id) => `transactions/api/admin/transactions/${id}/status`,

	TRANSACTIONS_ANALYTICS: "transactions/api/admin/transactions/getanalytics",

	// Currencies
	CURRENCIES: "transactions/api/admin/currencies",
	CURRENCY: (id) => `transactions/api/admin/currencies/${id}`,
	CREATE_CURRENCY: "transactions/api/admin/currency",
	DELETE_CURRENCY: (code) => `transactions/api/admin/currency/${code}`,
	UPDATE_CURRENCY_STATUS: "transactions/api/admin/currency/update-status",
	SETUP_PRECISION: "transactions/api/admin/currency/setup-precision",

	// Limits
	LIMITS: "/admin/limits",
	//Banks
	BANKS: "payment/api/admin/banks",
	BANK: (id) => `payment/api/admin/banks/${id}`,
	BULK_UPLOAD_BANKS: "payment/api/admin/banks/bulk-upload",
	BANK_MAPPINGS: (bankId) => `payment/api/admin/banks/${bankId}/mappings`,
	CREATE_BANK_MAPPING: `api/admin/bank-mappings`,
	FETCH_MAPPING_BY_BANK: (bankId) => `payment/api/admin/bank-mappings/by-bank/${bankId}`,

	// Payment Gateways
	PAYMENT_GATEWAYS: (page) => `payment/api/admin/payment-channels?page=${page}`,
	PAYMENT_GATEWAY: (id) => `payment/api/admin/payment-channels/${id}`,
	PAYMENT_GATEWAY_TOGGLE: (id) => `payment/api/admin/payment-channels/${id}/toggle`,

	SMS_GATEWAY: "notifications/api/admin/sms-gateways",
	SMS_GATEWAY_UPDATE: (id) => `notifications/api/admin/sms-gateways/${id}`,
	SET_DEFAULT_SMS_GATEWAY: "notifications/api/admin/sms-gateways/set-default",

	// Admin Roles
	ADMIN_ROLES: "/admin/roles",
	ADMIN_ROLE: (id) => `/admin/roles/${id}`,
	PERMISSIONS: "/admin/permissions",
	ASSIGN_ROLE: (adminId) => `/admin/users/${adminId}/assign-role`,

	//Admin Users
	STAFF: "auth/api/admin/users",

	// Senders
	PROFILE_ANALYTICS_DETAILED: "auth/api/admin/profiles/detail-analytics",
	SENDERS_ANALYTICS: "auth/api/admin/profiles/analytics",
	SENDERS: "auth/api/admin/profiles",
	SENDER_DETAILS: (id) => `auth/api/admin/profiles/view/${id}`,
	UPDATE_SENDER_STATUS: (id) => `auth/api/admin/profiles/${id}/status`,
	EXPORT_SENDERS: "auth/api/admin/profiles/export",

	// App Users
	APP_USERS: "/admin/app-users",
	APP_USER: (id) => `/admin/app-users/${id}`,
	APP_USER_STATUS: (id) => `/admin/app-users/${id}/status`,
	APP_USER_LIMITS: (id) => `/admin/app-users/${id}/limits`,

	// Admin Settings
	ADMIN_SETTINGS: "/admin/settings",
	UPLOAD_LOGO: "/admin/settings/logo",

	// Country Limits
	COUNTRY_LIMITS: "auth/api/admin/country-limits",
	COUNTRY_LIMIT: (id) => `auth/api/admin/country-limits/${id}`,
	TOGGLE_COUNTRY_LIMIT_STATUS: (id) => `auth/api/admin/country-limits/${id}/toggle-status`,
	//Country Fetch
	COUNTRIES: "auth/api/countries",

	//ROles and Permission
	ADMIN_ROLES: "auth/api/admin/roles",
	ADMIN_ROLE: (id) => `auth/api/admin/roles/${id}`,
	PERMISSIONS: "auth/api/admin/permissions",
	ROLE_PERMISSIONS: (roleId) => `auth/api/admin/roles/${roleId}/permissions`,

	// KYC DOC
	KYC_DOCUMENTS: "auth/api/admin/kyc-documents",
	KYC_DOCUMENT: (id) => `auth/api/admin/kyc-documents/document/${id}`,
	KYC_DOCUMENT_APPROVE: (id) => `auth/api/admin/kyc-documents/${id}/approve`,
	KYC_DOCUMENT_REJECT: (id) => `auth/api/admin/kyc-documents/${id}/reject`,
	//Business

	BUSINESS_ACCOUNTS: "auth/api/admin/accounts",
	BUSINESS_ACCOUNT: (uuid) => `auth/api/admin/accounts/${uuid}`,
	BUSINESS_VERIFY: (uuid) => `/admin/accounts/${uuid}/verify`,
	//Business Document

	ALL_BUSINESS_DOCUMENTS: `auth/api/admin/accounts/documents/all`,
	BUSINESS_DOCUMENTS: (uuid) => `auth/api/admin/accounts/${uuid}/documents`,
	SINGLE_BUSINESS_DOCUMENT: (id) => `auth/api/admin/accounts/documents/${id}`,
	//FundSettings
	SENDING_PURPOSE: "transactions/api/admin/sending-purpose",
	DELETE_SENDING_PURPOSE: (target) => `transactions/api/admin/sending-purpose/delete/${target}`,
	SENDING_PURPOSE_STATUS: "transactions/api/admin/sending-purpose/status",

	SOURCE_OF_FUNDS: "transactions/api/admin/source-of-fund",
	SOURCE_OF_FUNDS_STATUS: "transactions/api/admin/source-of-fund/status",
	DELETE_SOURCE_OF_FUNDS: (target) => `transactions/api/admin/source-of-fund/delete/${target}`,

	//payinGateway
	paymentGateways: "transactions/api/admin/payment-gateways",
	gatewayDetails: (id) => `transactions/api/admin/payment-gateways/${id}`,
	gatewayStatus: (id) => `transactions/api/admin/payment-gateways/${id}/status`,
	gatewayCurrencies: (id) => `transactions/api/admin/payment-gateways/${id}/currencies`,
	gatewayCurrency: (gatewayId, currencyId) => `transactions/api/admin/payment-gateways/${gatewayId}/currencies/${currencyId}`,
};
