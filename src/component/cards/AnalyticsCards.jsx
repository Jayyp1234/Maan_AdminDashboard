import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
// FiUsers.js
export const FiUsers = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={props.size || 24}
		height={props.size || 24}
		fill="none"
		stroke={props.color || "currentColor"}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}>
		<path d="M17 21v-2a4 4 0 0 0-3-3.87" />
		<path d="M7 21v-2a4 4 0 0 1 3-3.87" />
		<circle cx="9" cy="7" r="4" />
		<circle cx="17" cy="7" r="4" />
	</svg>
);

// FiUserCheck.js
export const FiUserCheck = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={props.size || 24}
		height={props.size || 24}
		fill="none"
		stroke={props.color || "currentColor"}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}>
		<path d="M16 21v-2a4 4 0 0 0-3-3.87" />
		<circle cx="8" cy="7" r="4" />
		<polyline points="17 11 19 13 23 9" />
	</svg>
);

// FiClock.js
export const FiClock = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={props.size || 24}
		height={props.size || 24}
		fill="none"
		stroke={props.color || "currentColor"}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}>
		<circle cx="12" cy="12" r="10" />
		<polyline points="12 6 12 12 16 14" />
	</svg>
);

// FiSlash.js
export const FiSlash = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={props.size || 24}
		height={props.size || 24}
		fill="none"
		stroke={props.color || "currentColor"}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}>
		<line x1="18" y1="6" x2="6" y2="18" />
	</svg>
);

const ICONS = {
	total_users: FiUsers,
	active_users: FiUserCheck,
	pending_kyc: FiClock,
	blacklisted_users: FiSlash,
};

const ICON_COLORS = {
	total_users: "bg-blue-100 text-blue-600",
	active_users: "bg-green-100 text-green-600",
	pending_kyc: "bg-yellow-100 text-yellow-600",
	blacklisted_users: "bg-red-100 text-emerald-600",
};

export const AnalyticsCards = ({ analytics, loading }) => {
	const cards = [
		{
			key: "total_users",
			title: "Total Users",
			value: analytics?.total_users || 0,
			description: "All registered senders",
		},
		{
			key: "active_users",
			title: "Active Users",
			value: analytics?.active_users || 0,
			description: "Currently active senders",
		},
		{
			key: "pending_kyc",
			title: "Pending KYC",
			value: analytics?.pending_kyc || 0,
			description: "KYC verification pending",
		},
		{
			key: "blacklisted_users",
			title: "Blacklisted",
			value: analytics?.blacklisted_users || 0,
			description: "Blacklisted senders",
		},
	];

	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			{cards.map(({ key, title, value, description }) => {
				const IconComponent = ICONS[key];
				const iconColorClass = ICON_COLORS[key];

				return (
					<Card key={key} className="shadow-sm hover:shadow-md transition-shadow rounded-lg">
						<CardHeader className="flex items-center justify-between pb-1">
							<CardTitle className="text-sm font-semibold text-gray-700">{title}</CardTitle>
							<div className={`p-2 rounded-md ${iconColorClass} flex items-center justify-center`} aria-hidden="true">
								<IconComponent />
							</div>
						</CardHeader>
						<CardContent className="pt-2">
							{loading ? (
								<Skeleton className="h-6 w-16" />
							) : (
								<>
									<div className="text-xl font-bold text-gray-900">{value}</div>
									<p className="text-xs text-gray-500 mt-1">{description}</p>
								</>
							)}
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};
