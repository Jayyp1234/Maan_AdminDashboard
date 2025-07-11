import {
	ChangePasswordActiveIcon,
	ChangePasswordInactiveIcon,
	DigitCodeActiveIcon,
	DigitCodeInctiveIcon,
	EmailAddActiveIcon,
	EmailAddInactiveIcon,
	RegisterActiveIcon,
	RegisterInactiveIcon,
	SMSActiveIcon,
	SMSInactiveIcon,
	VerifyEmailActiveIcon,
	VerifyEmailInactiveIcon,
} from "../icons";

export const registerStepperIndicator = [
	{ title: "Sign Up", inactiveIcon: RegisterInactiveIcon, activeIcon: RegisterActiveIcon },
	{ title: "Verify Email", inactiveIcon: VerifyEmailInactiveIcon, activeIcon: VerifyEmailActiveIcon },
	{ title: "SMS verification", inactiveIcon: SMSInactiveIcon, activeIcon: SMSActiveIcon },
];

export const registerStepperTitleTexts = [
	{ title: "CosmoRemit", subtitle: "Your trusted partner for fast and secure international money transfers" },
	{ title: "Code Sent", subtitle: "You have been sent a 6 digits code to the email you provided" },
	{ title: "SMS Verification", subtitle: "Protect your account with extra security" },
];

export const forgotPasswordStepperIndicator = [
	{ title: "Email address", inactiveIcon: EmailAddInactiveIcon, activeIcon: EmailAddActiveIcon },
	{ title: "Enter code", inactiveIcon: DigitCodeInctiveIcon, activeIcon: DigitCodeActiveIcon },
	{ title: "New password", inactiveIcon: ChangePasswordInactiveIcon, activeIcon: ChangePasswordActiveIcon },
];

export const forgotPasswordStepperTitleTexts = [
	{ title: "Reset Password", subtitle: "Provide your email address to setup new password" },
	{ title: "Code Sent", subtitle: "You have been sent a 6 digits code to the email you provided" },
	{ title: "SMS Verification", subtitle: "Setup a new password" },
	{ title: "New Password Created", subtitle: "Your new password have been successfully created, now let’s log you in" },
];

export const allTransactions = [
	{
		reference: "888176179378949041",
		sender: "Chimaobi Nice Anosike",
		rate: 123.45,
		payin_method: "Bank Transfer",
		payin_reference: "PayID-9381",
		sent_at: "April 03, 2025",
		status: "Verified",
	},
	{
		reference: "552871231929392844",
		sender: "Omolara Blessing",
		rate: 127.2,
		payin_method: "Card Payment",
		payin_reference: "CardRef-1123",
		sent_at: "April 04, 2025",
		status: "Pending",
	},
	{
		reference: "982736127312983712",
		sender: "Ugochukwu Daniel",
		rate: 120.0,
		payin_method: "USSD",
		payin_reference: "USSD-7788",
		sent_at: "April 05, 2025",
		status: "Failed",
	},
	{
		reference: "734819238192371029",
		sender: "Aisha Lawal",
		rate: 129.9,
		payin_method: "POS",
		payin_reference: "POS-0023",
		sent_at: "April 06, 2025",
		status: "Refunded",
	},
	{
		reference: "293812837128371023",
		sender: "Femi Okon",
		rate: 118.65,
		payin_method: "Wallet Topup",
		payin_reference: "TOP-4931",
		sent_at: "April 07, 2025",
		status: "Completed",
	},
	{
		reference: "812739128371293812",
		sender: "Adaeze Chuks",
		rate: 122.35,
		payin_method: "Bank Transfer",
		payin_reference: "Bank-9483",
		sent_at: "April 08, 2025",
		status: "Suspended",
	},
	{
		reference: "723819283719283741",
		sender: "Bashir Yusuf",
		rate: 125.0,
		payin_method: "Online Payment",
		payin_reference: "PayRef-2293",
		sent_at: "April 09, 2025",
		status: "Verified",
	},
	{
		reference: "983712837128371203",
		sender: "Ngozi Eze",
		rate: 130.0,
		payin_method: "Card Payment",
		payin_reference: "CardRef-7832",
		sent_at: "April 10, 2025",
		status: "Pending",
	},
	{
		reference: "237812837123871203",
		sender: "Kayode Johnson",
		rate: 128.75,
		payin_method: "POS",
		payin_reference: "POS-7890",
		sent_at: "April 11, 2025",
		status: "Inprogress",
	},
	{
		reference: "918273648192837120",
		sender: "Fatima Sule",
		rate: 126.45,
		payin_method: "Bank Transfer",
		payin_reference: "PayID-9981",
		sent_at: "April 12, 2025",
		status: "Completed",
	},
	// ...repeat/add more to test pagination
];

export const transactionChartTable = [
	{ name: "Jan", pending: 160, successful: 210 },
	{ name: "Feb", pending: 130, successful: 190 },
	{ name: "Mar", pending: 155, successful: 200 },
	{ name: "Apr", pending: 170, successful: 220 },
	{ name: "May", pending: 150, successful: 205 },
	{ name: "Jun", pending: 165, successful: 195 },
	{ name: "Jul", pending: 140, successful: 180 },
	{ name: "Aug", pending: 120, successful: 160 },
	{ name: "Sep", pending: 175, successful: 215 },
	{ name: "Oct", pending: 190, successful: 200 },
	{ name: "Nov", pending: 150, successful: 185 },
	{ name: "Dec", pending: 160, successful: 195 },
];

export const dummyPayments = [
	{
		id: 1,
		reference: "PAY-20250001",
		date: "2025-07-08",
		payerName: "John Doe",
		amount: 25000,
		tier: "Premium",
		feedingCapacity: 120,
	},
	{
		id: 2,
		reference: "PAY-20250002",
		date: "2025-07-07",
		payerName: "Jane Smith",
		amount: 15000,
		tier: "Standard",
		feedingCapacity: 80,
	},
	{
		id: 3,
		reference: "PAY-20250003",
		date: "2025-07-06",
		payerName: "Victor Okeleye",
		amount: 30000,
		tier: "Premium",
		feedingCapacity: 150,
	},
	{
		id: 4,
		reference: "PAY-20250004",
		date: "2025-07-05",
		payerName: "Promise Ayawei",
		amount: 12000,
		tier: "Basic",
		feedingCapacity: 50,
	},
	{
		id: 5,
		reference: "PAY-20250005",
		date: "2025-07-04",
		payerName: "Okki Vickkk",
		amount: 18000,
		tier: "Standard",
		feedingCapacity: 90,
	},
	{
		id: 6,
		reference: "PAY-20250006",
		date: "2025-07-03",
		payerName: "John Paul Okeke",
		amount: 27000,
		tier: "Premium",
		feedingCapacity: 130,
	},
	{
		id: 7,
		reference: "PAY-20250007",
		date: "2025-07-02",
		payerName: "Frillo Enterprises",
		amount: 32000,
		tier: "Premium",
		feedingCapacity: 200,
	},
	{
		id: 8,
		reference: "PAY-20250008",
		date: "2025-07-01",
		payerName: "Urban Estate",
		amount: 14000,
		tier: "Standard",
		feedingCapacity: 75,
	},
	{
		id: 9,
		reference: "PAY-20250009",
		date: "2025-06-30",
		payerName: "Ayasoft Inc.",
		amount: 22000,
		tier: "Premium",
		feedingCapacity: 110,
	},
	{
		id: 10,
		reference: "PAY-20250010",
		date: "2025-06-29",
		payerName: "Urbex Holdings",
		amount: 16000,
		tier: "Standard",
		feedingCapacity: 85,
	},
	{
		id: 11,
		reference: "PAY-20250011",
		date: "2025-06-28",
		payerName: "Victor Solutions",
		amount: 11000,
		tier: "Basic",
		feedingCapacity: 45,
	},
	{
		id: 12,
		reference: "PAY-20250012",
		date: "2025-06-27",
		payerName: "Ayawei Ltd.",
		amount: 19000,
		tier: "Standard",
		feedingCapacity: 95,
	},
	{
		id: 13,
		reference: "PAY-20250013",
		date: "2025-06-26",
		payerName: "Vickkk Systems",
		amount: 26000,
		tier: "Premium",
		feedingCapacity: 140,
	},
	{
		id: 14,
		reference: "PAY-20250014",
		date: "2025-06-25",
		payerName: "Promise Ventures",
		amount: 13000,
		tier: "Basic",
		feedingCapacity: 55,
	},
	{
		id: 15,
		reference: "PAY-20250015",
		date: "2025-06-24",
		payerName: "Okeke & Co.",
		amount: 17000,
		tier: "Standard",
		feedingCapacity: 88,
	},
	{
		id: 16,
		reference: "PAY-20250016",
		date: "2025-06-23",
		payerName: "Okeleye Group",
		amount: 28000,
		tier: "Premium",
		feedingCapacity: 145,
	},
	{
		id: 17,
		reference: "PAY-20250017",
		date: "2025-06-22",
		payerName: "Victor Tech",
		amount: 24000,
		tier: "Premium",
		feedingCapacity: 125,
	},
	{
		id: 18,
		reference: "PAY-20250018",
		date: "2025-06-21",
		payerName: "Smith Supplies",
		amount: 15500,
		tier: "Standard",
		feedingCapacity: 82,
	},
	{
		id: 19,
		reference: "PAY-20250019",
		date: "2025-06-20",
		payerName: "Doe Digital",
		amount: 12500,
		tier: "Basic",
		feedingCapacity: 60,
	},
	{
		id: 20,
		reference: "PAY-20250020",
		date: "2025-06-19",
		payerName: "Ayawei Systems",
		amount: 21000,
		tier: "Premium",
		feedingCapacity: 115,
	},
];
