import { actionNames } from "@/resources/helpers/utils";
import {
	CSVIcon,
	ExcelIcon,
	JPGIcon,
	PDFIcon,
	AdminTransferIcon,
	BankIcon,
	BusinessIcon,
	CurrenciesIcon,
	DashboardIcon,
	GaugeIcon,
	NotePadIcon,
	OutMoneyIcon,
	PartnerIcon,
	PaymentIcon,
	PayOutIcon,
	ServerControlIcon,
	SettingsIcon,
	SMSMessageGateWayIcon,
	StaffsIcon,
	UserUploadIcon,
	LogoutIcon,
	UtilitiesIcon,
	GatewayIcon,
	UserIcon,
	UsersIcon,
	MoneyIcon,
} from "@/resources/icons";
import { AUTHENTICATED_ROUTES } from "@/routes/router";

export const sidebarLinks = [
	{
		icon: DashboardIcon,
		name: "Dashboard",
		path: AUTHENTICATED_ROUTES.index,
		isButton: false,
	},
	{
		icon: UserIcon,
		name: "Vendors",
		path: AUTHENTICATED_ROUTES.vendors,
		isButton: false,
	},
	{
		icon: UsersIcon,
		name: "Admin Staffs",
		path: AUTHENTICATED_ROUTES.admin,
		isButton: false,
	},
	{
		icon: MoneyIcon,
		name: "Payments",
		path: AUTHENTICATED_ROUTES.payments,
		isButton: false,
	},
	// {
	// 	icon: OutMoneyIcon,
	// 	name: "Senders",
	// 	path: AUTHENTICATED_ROUTES.users.index,
	// 	isButton: true,
	// 	sublinks: [
	// 		{
	// 			icon: UserUploadIcon,
	// 			name: "User Upload",
	// 			path: AUTHENTICATED_ROUTES.users.userUploads,
	// 		},
	// 	],
	// },
	// {
	// 	icon: BusinessIcon,
	// 	name: "Business",
	// 	path: AUTHENTICATED_ROUTES.business.index,
	// 	isButton: true,
	// 	sublinks: [
	// 		{
	// 			icon: StaffsIcon,
	// 			name: "Documents",
	// 			path: AUTHENTICATED_ROUTES.business.documents,
	// 		},
	// 	],
	// },
	// {
	// 	icon: NotePadIcon,
	// 	name: "Transactions",
	// 	path: AUTHENTICATED_ROUTES.transactions.index,
	// 	isButton: true,
	// 	sublinks: [
	// 		// {
	// 		// 	icon: PayInIcon,
	// 		// 	name: "Pay In",
	// 		// 	path: AUTHENTICATED_ROUTES.transactions.payin,
	// 		// },
	// 		{
	// 			icon: PayOutIcon,
	// 			name: "Pay Out",
	// 			path: AUTHENTICATED_ROUTES.transactions.payout,
	// 		},
	// 		{
	// 			icon: AdminTransferIcon,
	// 			name: "Admin Transfer",
	// 			path: AUTHENTICATED_ROUTES.transactions.adminTransfer,
	// 		},
	// 		{
	// 			icon: PartnerIcon,
	// 			name: "Partners",
	// 			path: AUTHENTICATED_ROUTES.transactions.partners,
	// 		},
	// 		{
	// 			icon: GaugeIcon,
	// 			name: "Manage Limits",
	// 			path: AUTHENTICATED_ROUTES.transactions.manageLimits.index,
	// 		},
	// 		{
	// 			icon: UtilitiesIcon,
	// 			name: "FundSettings",
	// 			path: AUTHENTICATED_ROUTES.transactions.FundSettings,
	// 		},
	// 	],
	// },
	// {
	// 	icon: PaymentIcon,
	// 	name: "Payment Gateways",
	// 	path: AUTHENTICATED_ROUTES.gateways.index,
	// 	isButton: true,
	// 	sublinks: [
	// 		{
	// 			icon: GatewayIcon,
	// 			name: "Pay-In Gateway",
	// 			path: AUTHENTICATED_ROUTES.gateways.gatewayMapping,
	// 		},
	// 		{
	// 			icon: CurrenciesIcon,
	// 			name: "Currencies",
	// 			path: AUTHENTICATED_ROUTES.gateways.currencies,
	// 		},
	// 		{
	// 			icon: BankIcon,
	// 			name: "Banks",
	// 			path: AUTHENTICATED_ROUTES.gateways.banks,
	// 		},
	// 		{
	// 			icon: SMSMessageGateWayIcon,
	// 			name: "SMS",
	// 			path: AUTHENTICATED_ROUTES.gateways.sms,
	// 		},
	// 	],
	// },
	// {
	// 	icon: StaffsIcon,
	// 	name: "Staffs",
	// 	path: AUTHENTICATED_ROUTES.staffs.index,
	// 	isButton: true,
	// 	sublinks: [
	// 		{
	// 			icon: ServerControlIcon,
	// 			name: "Access Control",
	// 			path: AUTHENTICATED_ROUTES.staffs.accessControl,
	// 			isButton: false,
	// 		},
	// 	],
	// },
	// {
	// 	icon: SettingsIcon,
	// 	name: "Settings",
	// 	path: AUTHENTICATED_ROUTES.settings,
	// 	isButton: false,
	// },
	{
		icon: LogoutIcon,
		name: "Logout",
		isButton: true,
		isLogout: true,
		action: actionNames.logout,
	},
];

export const exportDownloadFormats = [
	{ id: "csv", label: "CSV file", icon: CSVIcon },
	{ id: "excel", label: "Excel file", icon: ExcelIcon },
	{ id: "pdf", label: "PDF file", icon: PDFIcon },
	{ id: "jpeg", label: "JPEG file", icon: JPGIcon },
];
