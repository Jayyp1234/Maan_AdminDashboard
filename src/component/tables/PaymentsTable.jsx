// components/tables/PaymentsTable.js
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { IconWrapper, ThreeDotsIcon } from "@/resources/icons";
import { Pagination } from "../base/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "../../components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { useState } from "react";
import { formatNumber } from "../../resources/helpers";

export const PaymentsTable = ({ loading, error }) => {
	const dispatch = useDispatch();
	const { filtered, pagination } = useSelector((state) => state.payments);
	const [showModal, setShowModal] = useState(false);
	const [selectedPayment, setSelectedPayment] = useState(null);

	const paginatedData = filtered.slice((pagination.current_page - 1) * pagination.per_page, pagination.current_page * pagination.per_page);

	const handlePageChange = (page) => {
		dispatch(setCurrentPage(page));
	};

	const handleViewPayment = (transaction) => {
		setSelectedPayment(transaction);
		setShowModal(true);
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
							const amount = formatNumber(payment.amount, { currency: true }) || "0.00";
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
											<span className="font-semibold">{amount}</span>
										</div>
									</TableCell>
									<TableCell>{new Date(date).toLocaleString()}</TableCell>
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
												<DropdownMenuItem onClick={() => handleViewPayment(payment)}>View Details</DropdownMenuItem>
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

			<Dialog open={showModal} onOpenChange={setShowModal}>
				<DialogContent className="lg:min-w-3xl h-[90vh] overflow-y-auto overflow-x-hidden rounded-2xl">
					<DialogHeader>
						<DialogTitle>Payment Details</DialogTitle>
					</DialogHeader>
					{selectedPayment && (
						<div className="grid gap-4 mt-4 text-sm text-slate-700 pb-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
							<PaymentDetailItem label="Reference" value={selectedPayment.reference ?? "N/A"} />
							<PaymentDetailItem label="Amount" value={selectedPayment.amount ?? "N/A"} />
							<PaymentDetailItem label="Amount Debited" value={formatNumber(selectedPayment.amount_debited, { currency: true }) ?? "N/A"} />
							<PaymentDetailItem label="Amount Settled" value={formatNumber(selectedPayment.amount_settled, { currency: true })} />
							<PaymentDetailItem label="Charge" value={formatNumber(selectedPayment.charge, { currency: true })} />
							<PaymentDetailItem label="Currency" value={selectedPayment.currency} />
							<PaymentDetailItem label="Status" value={selectedPayment.status} />
							<PaymentDetailItem label="Date" value={new Date(selectedPayment.time).toLocaleString()} />
							<PaymentDetailItem label="Narration" value={selectedPayment.narration} />
							<PaymentDetailItem label="Transaction Reference" value={selectedPayment.transaction_reference} />
							<PaymentDetailItem label="Type" value={selectedPayment.type} />
							<PaymentDetailItem label="Sender Name" value={selectedPayment.webhook_data?.data?.sender?.originatorName || "N/A"} />
							<PaymentDetailItem label="Sender Bank" value={selectedPayment.webhook_data?.data?.sender?.originatorBank || "N/A"} />
							<PaymentDetailItem label="Sender Account" value={selectedPayment.webhook_data?.data?.sender?.originatorAccountNumber || "N/A"} />
							<PaymentDetailItem label="Receiver Account" value={selectedPayment.webhook_data?.data?.recipient || "N/A"} />
							<PaymentDetailItem label="Processor Reference" value={selectedPayment.webhook_data?.data?.processorReference || "N/A"} />
							<PaymentDetailItem
								label="Expected Amount"
								value={formatNumber(selectedPayment.webhook_data?.data?.expectedAmount, { currency: true }) || "N/A"}
							/>
							<PaymentDetailItem
								label="Net Amount"
								value={formatNumber(selectedPayment.webhook_data?.data?.netAmount, { currency: true }) || "N/A"}
							/>
							<PaymentDetailItem label="Channel" value={selectedPayment.webhook_data?.data?.channel || "N/A"} />
							<PaymentDetailItem label="Created At" value={new Date(selectedPayment.webhook_data?.data?.createdAt).toLocaleString() || "N/A"} />
							<PaymentDetailItem label="Updated At" value={new Date(selectedPayment.webhook_data?.data?.updatedAt).toLocaleString() || "N/A"} />
						</div>
					)}
				</DialogContent>
			</Dialog>
		</div>
	);
};

export const PaymentDetailItem = ({ label, value }) => {
	return (
		<div>
			<div className="font-semibold text-slate-900">{label}</div>
			<div className="break-words whitespace-pre-wrap">{value}</div>
		</div>
	);
};
