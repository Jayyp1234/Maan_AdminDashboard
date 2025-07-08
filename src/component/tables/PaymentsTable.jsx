// components/tables/PaymentsTable.js
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { IconWrapper, ThreeDotsIcon } from "@/resources/icons";
import { Pagination } from "../base/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "../../components/ui/skeleton";

export const PaymentsTable = ({ loading, error }) => {
	const dispatch = useDispatch();
	const { filtered, pagination } = useSelector((state) => state.payments);

	const paginatedData = filtered.slice((pagination.current_page - 1) * pagination.per_page, pagination.current_page * pagination.per_page);

	const handlePageChange = (page) => {
		dispatch(setCurrentPage(page));
	};

	if (loading && filtered.length === 0) {
		return (
			<div className="space-y-4">
				{[...Array(5)].map((_, i) => (
					<Skeleton key={i} className="h-10 w-full rounded-lg" />
				))}
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="border rounded-lg overflow-hidden">
				<Table>
					<TableHeader>
						<TableRow className="bg-stone-50 hover:bg-stone-100">
							<TableHead className="text-slate-800 px-4">S/N</TableHead>
							<TableHead className="text-slate-800">Sender / Account No.</TableHead>
							<TableHead className="text-slate-800">Receiver / Account No.</TableHead>
							<TableHead className="text-slate-800">Amount</TableHead>
							<TableHead className="text-slate-800">Date</TableHead>
							<TableHead className="text-slate-800">Status</TableHead>
							<TableHead className="text-slate-800">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{paginatedData.map((payment, index) => {
							const senderName = payment.webhook_data?.data?.sender?.originatorName || "N/A";
							const senderBank = payment.webhook_data?.data?.sender?.originatorBank || "N/A";
							const receiverName = payment.webhook_data?.data?.meta?.notification?.craccountname || "N/A";
							const receiverAcc = payment.webhook_data?.data?.recipient || "N/A";
							const amount = payment.amount || "0.00";
							const currency = payment.currency || "NGN";
							const status = payment.status || "Unknown";
							const date = payment.time || "N/A";

							return (
								<TableRow key={payment.id} className="hover:bg-emerald-50/50">
									<TableCell className="px-4">{index + 1}</TableCell>
									<TableCell>
										<div className="flex flex-col">
											<span className="font-medium">{senderName}</span>
											<span className="text-xs text-gray-500">{senderBank}</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex flex-col">
											<span className="font-medium">{receiverName}</span>
											<span className="text-xs text-gray-500">{receiverAcc}</span>
										</div>
									</TableCell>
									<TableCell>
										<div className="flex flex-col">
											<span className="font-semibold">
												{amount} {currency}
											</span>
										</div>
									</TableCell>
									<TableCell>{date}</TableCell>
									<TableCell>
										<span className={`text-xs font-medium ${status === "Successful" ? "text-green-600" : "text-blue-600"}`}>{status}</span>
									</TableCell>
									<TableCell>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button variant="outline" size="sm">
													<IconWrapper>
														<ThreeDotsIcon />
													</IconWrapper>
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end" className="bg-white">
												<DropdownMenuItem onClick={() => alert(`Viewing ${payment.reference}`)}>View Details</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>

			{filtered.length === 0 && !loading && (
				<div className="text-center py-10">
					<p className="text-gray-500">No transactions found</p>
				</div>
			)}

			<Pagination
				currentPage={pagination.current_page}
				totalPages={Math.ceil(filtered.length / pagination.per_page)}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};
