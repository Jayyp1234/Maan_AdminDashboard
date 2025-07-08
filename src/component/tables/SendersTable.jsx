// components/tables/SendersTable.js
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSenders } from "@/store/slices/sendersSlice";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import CustomPagination from "../base/CustomPagination";
import { Link } from "react-router";

const statusColors = {
	active: "bg-green-100 text-green-800",
	banned: "bg-red-100 text-emerald-800",
	deactivated: "bg-gray-100 text-gray-800",
	complaint: "bg-yellow-100 text-yellow-800",
};

export const SendersTable = () => {
	const dispatch = useDispatch();
	const { allSenders, loading, currentTab, searchQuery } = useSelector((state) => state.senders);

	const PER_PAGE = 10;
	const [currentPage, setCurrentPage] = useState(1);

	// Filter based on tab and search
	const filteredData = useMemo(() => {
		let result = [...allSenders];

		// Apply search
		if (searchQuery) {
			const lowerSearch = searchQuery.toLowerCase();
			result = result.filter(
				(sender) =>
					sender.firstname?.toLowerCase().includes(lowerSearch) ||
					sender.lastname?.toLowerCase().includes(lowerSearch) ||
					sender.user?.email?.toLowerCase().includes(lowerSearch) ||
					sender.mobile_phone?.includes(searchQuery)
			);
		}

		// Apply tab filter
		if (currentTab !== "all") {
			switch (currentTab) {
				case "complaints":
					result = result.filter((s) => s.user?.account_status === "complaint");
					break;
				case "non-complaints":
					result = result.filter((s) => s.user?.kyc_verified === "active");
					break;
				case "banned":
					result = result.filter((s) => s.user?.banned_at !== null);
					break;
				case "deactivated":
					result = result.filter((s) => s.user?.deactivated_at !== null);
					break;
				case "requested-deactivation":
					result = result.filter((s) => s.user?.deactivation_request !== null);
					break;
				default:
					break;
			}
		}

		return result;
	}, [allSenders, currentTab, searchQuery]);

	// Paginate
	const paginatedData = useMemo(() => {
		const start = (currentPage - 1) * PER_PAGE;
		return filteredData.slice(start, start + PER_PAGE);
	}, [filteredData, currentPage]);

	const totalPages = Math.ceil(filteredData.length / PER_PAGE);

	// Fetch all senders initially
	useEffect(() => {
		dispatch(fetchAllSenders());
	}, [dispatch]);

	return (
		<div className="space-y-4">
			<Table>
				<TableHeader>
					<TableRow className="hover:bg-red-50">
						<TableHead className="text-emerald-800">User</TableHead>
						<TableHead className="text-emerald-800">Contact</TableHead>
						<TableHead className="text-emerald-800">Country</TableHead>
						<TableHead className="text-emerald-800">Status</TableHead>
						<TableHead className="text-emerald-800">KYC</TableHead>
						<TableHead className="text-emerald-800">Joined Since</TableHead>
						<TableHead className="text-right text-emerald-800">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{loading && !allSenders.length ? (
						[...Array(PER_PAGE)].map((_, i) => (
							<TableRow key={i}>
								<TableCell colSpan={7}>
									<Skeleton className="h-6 w-full" />
								</TableCell>
							</TableRow>
						))
					) : paginatedData.length > 0 ? (
						paginatedData.map((sender) => (
							<TableRow key={sender.id} className="hover:bg-red-50">
								<TableCell>
									<div className="flex items-center gap-3">
										<Avatar>
											<AvatarImage src={sender.profile_photo} alt="Profile" />
											<AvatarFallback>
												{sender.firstname?.charAt(0)}
												{sender.lastname?.charAt(0)}
											</AvatarFallback>
										</Avatar>
										<div>
											<p className="font-medium">
												{sender.firstname} {sender.lastname}
											</p>
											<p className="text-sm text-gray-500">{sender.user?.email}</p>
										</div>
									</div>
								</TableCell>
								<TableCell>
									{sender.mobile_phone}
									<br />
									<span className="text-sm text-gray-500">{sender.user?.email}</span>
								</TableCell>
								<TableCell>{sender.country?.name || "N/A"}</TableCell>
								<TableCell>
									<Badge className={statusColors[sender.user?.kyc_verified] || "bg-blue-100 text-emerald-800"}>
										{sender.user?.kyc_verified || "Inactive"}
									</Badge>
								</TableCell>
								<TableCell>
									<Badge className={sender.user?.kyc_verified ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
										{sender.user?.kyc_verified ? "Verified" : "Pending"}
									</Badge>
								</TableCell>
								<TableCell>{sender?.created_at ? new Date(sender.created_at).toLocaleDateString() : ""}</TableCell>

								<TableCell className="text-right">
									<Link to={`/dashboard/user/${sender.id}`} className="inline-block">
										<Button variant="outline" size="sm" className="text-emerald-600 hover:bg-red-50">
											View
										</Button>
									</Link>
								</TableCell>
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={7} className="text-center py-4">
								No senders found
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>

			{totalPages > 1 && (
				<CustomPagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
					activeClassName="bg-emerald-600 text-white"
					pageClassName="border-red-200 hover:bg-red-50"
				/>
			)}
		</div>
	);
};
