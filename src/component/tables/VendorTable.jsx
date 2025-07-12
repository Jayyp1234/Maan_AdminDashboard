// components/tables/VendorsTable.js
import { useDispatch, useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Pagination } from "../base/Pagination";
import { toast } from "sonner";
import { IconWrapper, ReceiptIcon, ThreeDotsIcon } from "../../resources/icons";
import { setVendorCurrentPage } from "../../store/slices/adminSlice";
import { useState } from "react";
import ViewVendorModal, { ViewReceiptsModal } from "../base/VendorModals";

export const VendorsTable = ({ loading, error }) => {
	const dispatch = useDispatch();
	const [selectedVendor, setSelectedVendor] = useState(null);
	const [viewModalOpen, setViewModalOpen] = useState(false);
	const [viewReceiptsOpen, setViewReceiptsOpen] = useState(false);
	const [currentReceipts, setCurrentReceipts] = useState([]);

	const { filtered, pagination } = useSelector((state) => state.admin.vendors);

	const paginatedData = filtered.slice((pagination.current_page - 1) * pagination.per_page, pagination.current_page * pagination.per_page);

	const handlePageChange = (page) => {
		dispatch(setVendorCurrentPage(page));
	};

	const handleViewVendor = (vendor) => {
		setSelectedVendor(vendor);
		setViewModalOpen(true);
	};

	const handleViewReceipts = (receipts) => {
		setCurrentReceipts(receipts);
		setViewReceiptsOpen(true);
	};

	const handleVerifyVendor = (vendor) => {
		toast.success(`Vendor Verified: ${vendor.applicant_name}`);
	};

	const handleDisableVendor = (vendor) => {
		toast.warning(`Vendor Disabled: ${vendor.applicant_name}`);
	};

	if (loading && filtered.length === 0) {
		return (
			<div className="space-y-4">
				{[...Array(5)].map((_, i) => (
					<Skeleton key={i} className="h-12 w-full rounded-lg" />
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
							<TableHead className="text-stone-800">S/N</TableHead>
							<TableHead className="text-stone-800">Applicant Name</TableHead>
							<TableHead className="text-stone-800">Phone / Email</TableHead>
							<TableHead className="text-stone-800">Business Details</TableHead>
							<TableHead className="text-stone-800">Amount / Tier</TableHead>
							<TableHead className="text-stone-800">Capacity</TableHead>
							<TableHead className="text-stone-800">Reg. Status</TableHead>
							<TableHead className="text-stone-800">Receipts</TableHead>
							<TableHead className="text-stone-800">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{paginatedData.map((vendor, index) => (
							<TableRow key={vendor.id} className="hover:bg-emerald-50/50">
								<TableCell> {index + 1 + (pagination.current_page - 1) * pagination.per_page}</TableCell>
								<TableCell>
									<span className="max-w-[200px] truncate">{vendor.applicant_name}</span>
								</TableCell>
								<TableCell>
									<div className="flex flex-col items-start text-start gap-0.5">
										<span className="text-[.85rem] font-medium">{vendor.phone_number}</span>
										<span className="text-[.85rem] text-stone-500  max-w-[150px] truncate">{vendor.email_address}</span>
									</div>
								</TableCell>
								<TableCell>
									<div className="flex-col flex gap-0.5">
										<div className="flex items-center gap-1.5">
											<span className="text-[.85rem] font-medium">Name:</span>
											<span className="text-[.8rem] text-stone-500 max-w-[200px] truncate">{vendor.business_name}</span>
										</div>
										<div className="flex items-center gap-1.5">
											<span className="text-[.85rem] font-medium">Location:</span>
											<span className="text-[.85rem] text-stone-500 max-w-[200px] truncate">{vendor.business_address}</span>
										</div>
									</div>
								</TableCell>
								<TableCell>
									<div className="flex flex-col items-start text-start gap-0.5">
										<span className="text-[.85rem] font-medium">
											{vendor.amount ? <strong>&#8358;</strong> : ""} {vendor.amount ?? "N/A"}
										</span>
										<span className="text-[.85rem] text-stone-500">{vendor.capacity_tier ?? "N/A"}</span>
									</div>
								</TableCell>
								<TableCell>{vendor.feeding_capacity ?? "N/A"}</TableCell>
								<TableCell>
									<Badge
										className={
											vendor.payment_status === "completed"
												? "bg-green-100 text-green-800"
												: vendor.payment_status === "processing"
												? "bg-yellow-100 text-yellow-800"
												: "bg-red-100 text-red-800"
										}>
										{vendor.payment_status || "N/A"}
									</Badge>
								</TableCell>
								<TableCell>
									<button onClick={() => handleViewReceipts(vendor.receipts)} type="button" className="flex items-center gap-1">
										<IconWrapper className="text-lg text-emerald-700">
											<ReceiptIcon />
										</IconWrapper>
										<span>View</span>
									</button>
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
											<DropdownMenuItem onClick={() => handleViewVendor(vendor)}>View Vendor</DropdownMenuItem>
											<DropdownMenuItem onClick={() => handleVerifyVendor(vendor)}>Verify Vendor</DropdownMenuItem>
											<DropdownMenuItem onClick={() => handleDisableVendor(vendor)}>Disable Vendor</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			{filtered.length === 0 && !loading && (
				<div className="text-center py-10">
					<p className="text-gray-500">No vendors found</p>
				</div>
			)}
			<Pagination
				currentPage={pagination.current_page}
				totalPages={Math.ceil(filtered.length / pagination.per_page)}
				onPageChange={handlePageChange}
				className="border-t border-red-100 pt-4"
			/>
			<ViewVendorModal open={viewModalOpen} setOpen={setViewModalOpen} vendor={selectedVendor} />
			<ViewReceiptsModal open={viewReceiptsOpen} setOpen={setViewReceiptsOpen} receipts={currentReceipts} />
		</div>
	);
};
