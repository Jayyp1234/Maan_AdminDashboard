import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CustomPagination from "../base/CustomPagination";
import { IconWrapper, ThreeDotsIcon } from "@/resources/icons";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { Badge } from "lucide-react";

const statusVariant = {
	1: "inprogress", // Review Payment
	2: "pending", // Pending
	3: "inprogress", // Confirm Payment
	4: "inprogress", // On Hold
	5: "completed", // Settled
	6: "completed", // Completed
	7: "canceled", // Canceled (optional - not in your mapping, but exists)
	8: "failed", // Failed
	9: "refunded", // Refunded
	10: "suspended", // Delayed
};

const statusText = {
	1: "Review Payment",
	2: "Pending",
	3: "In Progress",
	4: "On Hold",
	5: "Settled",
	6: "Completed",
	7: "Failed",
	8: "Failed",
	9: "Refunded",
	10: "Delayed",
};

const statusColors = {
	1: "bg-blue-100 text-blue-800", // inprogress
	2: "bg-yellow-100 text-yellow-800", // pending
	3: "bg-blue-100 text-blue-800", // inprogress
	4: "bg-blue-100 text-blue-800", // inprogress
	5: "bg-green-100 text-green-800", // completed
	6: "bg-green-100 text-green-800", // completed
	7: "bg-red-100 text-emerald-800", // canceled (optional)
	8: "bg-red-100 text-emerald-800", // failed
	9: "bg-purple-100 text-purple-800", // refunded
	10: "bg-orange-100 text-orange-800", // suspended
};

export default function TransactionTable({
	data = [],
	loading = false,
	currentPage: propCurrentPage = 1,
	totalPages: propTotalPages = 1,
	onPageChange,
}) {
	const [internalCurrentPage, setInternalCurrentPage] = useState(1);

	const isControlled = onPageChange !== undefined;
	const currentPage = isControlled ? propCurrentPage : internalCurrentPage;
	const totalPages = isControlled ? propTotalPages : Math.ceil(data.length / 10);

	const handlePageChange = (page) => {
		if (isControlled) {
			onPageChange(page);
		} else {
			setInternalCurrentPage(page);
		}
	};

	const paginatedData = isControlled ? data : data.slice((currentPage - 1) * 10, currentPage * 10);

	return (
		<div className="bg-white rounded-md min-h-[400px] flex flex-col justify-between gap-y-5">
			<Table>
				<TableHeader>
					<TableRow className="bg-white hover:bg-white">
						<TableHead className="px-4">S/N</TableHead>
						<TableHead>Reference</TableHead>
						<TableHead>Sender / Receiver</TableHead>
						<TableHead>Amount / Rate</TableHead>
						<TableHead>Date</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Action</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody className="min-h-[300px]">
					{loading ? (
						<TableRow>
							<TableCell colSpan={7} className="text-center py-8">
								Loading transactions...
							</TableCell>
						</TableRow>
					) : paginatedData.length === 0 ? (
						<TableRow>
							<TableCell colSpan={7} className="text-center py-8">
								No transactions found
							</TableCell>
						</TableRow>
					) : (
						paginatedData.map((transaction, index) => (
							<TableRow key={transaction.trx_id} className={`${index % 2 === 0 ? "bg-white" : "bg-stone-100"}`}>
								<TableCell className="px-4">{isControlled ? (currentPage - 1) * 10 + index + 1 : index + 1}</TableCell>
								<TableCell className="font-medium">{transaction.trx_id}</TableCell>
								<TableCell>
									<div className="flex items-start w-full">
										<div className="flex flex-col pr-6 border-r border-gray-300">
											<span className="font-medium">
												{transaction.remittance_data.sender_first_name} {transaction.remittance_data.sender_last_name}
											</span>
											<span className="text-xs text-muted-foreground">{transaction.remittance_data.sender_email}</span>
										</div>
										<div className="flex flex-col pl-6">
											<span className="font-medium">
												{transaction.remittance_data.first_name} {transaction.remittance_data.last_name}
											</span>
											<span className="text-xs text-muted-foreground">{transaction.remittance_data.email}</span>
										</div>
									</div>
								</TableCell>
								<TableCell>
									<div className="flex flex-col">
										<span className="font-medium">
											{transaction.remittance_data.send_money} {transaction.remittance_data.sender_currency}
										</span>
										<span className="text-xs text-muted-foreground">Rate: {transaction.exchange_rate}</span>
									</div>
								</TableCell>
								<TableCell>{format(new Date(transaction.created_at), "MMM dd, yyyy HH:mm")}</TableCell>
								<TableCell>
									<span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColors[transaction.status]}`}>
										{statusText[transaction.status]}
									</span>
								</TableCell>
								<TableCell>
									<DropdownMenu>
										<DropdownMenuTrigger className="text-xl font-bold text-gray-500 hover:text-gray-700">
											<IconWrapper>
												<ThreeDotsIcon />
											</IconWrapper>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuLabel>Actions</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuItem>View Details</DropdownMenuItem>
											<DropdownMenuItem>Download Receipt</DropdownMenuItem>
											{transaction.status === 1 && (
												<>
													<DropdownMenuSeparator />
													<DropdownMenuItem className="text-green-600">Approve</DropdownMenuItem>
													<DropdownMenuItem className="text-emerald-600">Reject</DropdownMenuItem>
												</>
											)}
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>

			{!loading && totalPages > 1 && <CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />}
		</div>
	);
}
