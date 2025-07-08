// components/tables/VendorsTable.js
import { useDispatch, useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Pagination } from "../base/Pagination";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { IconWrapper, ThreeDotsIcon } from "../../resources/icons";
import { setVendorCurrentPage } from "../../store/slices/adminSlice";

export const VendorsTable = ({ loading, error }) => {
	const dispatch = useDispatch();
	const { filtered, pagination } = useSelector((state) => state.admin.vendors);

	const paginatedData = filtered.slice((pagination.current_page - 1) * pagination.per_page, pagination.current_page * pagination.per_page);

	const handlePageChange = (page) => {
		dispatch(setVendorCurrentPage(page));
	};

	const handleEditVendor = (vendor) => {
		toast.info(`Edit Vendor: ${vendor.applicant_name}`);
	};

	const handleVerifyVendor = (vendor) => {
		toast.success(`Vendor Verified: ${vendor.applicant_name}`);
	};

	const handleDisableVendor = (vendor) => {
		toast.warning(`Vendor Disabled: ${vendor.applicant_name}`);
	};

	const handleDeleteVendor = (vendor) => {
		toast.error(`Vendor Deleted: ${vendor.applicant_name}`);
	};

	if (loading && filtered.length === 0) {
		return (
			<div className="space-y-4">
				{[...Array(5)].map((_, i) => (
					<Skeleton key={i} className="h-16 w-full rounded-lg" />
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
							<TableHead className="text-stone-800">Business Name</TableHead>
							<TableHead className="text-stone-800">Capacity Tier</TableHead>
							<TableHead className="text-stone-800">Feeding Capacity</TableHead>
							<TableHead className="text-stone-800">Registration Status</TableHead>
							<TableHead className="text-stone-800">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{paginatedData.map((vendor, index) => (
							<TableRow key={vendor.id} className="hover:bg-emerald-50/50">
								<TableCell> {index + 1 + (pagination.current_page - 1) * pagination.per_page}</TableCell>
								<TableCell>{vendor.applicant_name}</TableCell>
								<TableCell>{vendor.business_name}</TableCell>
								<TableCell>{vendor.capacity_tier}</TableCell>
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
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="outline" size="sm">
												<IconWrapper>
													<ThreeDotsIcon />
												</IconWrapper>
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end" className="bg-white">
											<DropdownMenuItem onClick={() => handleEditVendor(vendor)}>Edit Vendor</DropdownMenuItem>
											<DropdownMenuItem onClick={() => handleVerifyVendor(vendor)}>Verify Vendor</DropdownMenuItem>
											<DropdownMenuItem onClick={() => handleDisableVendor(vendor)}>Disable Vendor</DropdownMenuItem>
											<DropdownMenuItem onClick={() => handleDeleteVendor(vendor)}>Delete Vendor</DropdownMenuItem>
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
		</div>
	);
};
