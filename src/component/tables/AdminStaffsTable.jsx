// components/tables/StaffsTable.js
import { useDispatch, useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Pagination } from "../base/Pagination";
import { toast } from "sonner";
import { deleteStaff, setStaffCurrentPage } from "@/store/slices/adminSlice";
import { IconWrapper, ThreeDotsIcon } from "@/resources/icons";
import { useState } from "react";
import { ConfirmDialog, EditAdminModal } from "../base/AdminModals";

export const AdminStaffsTable = ({ loading, error }) => {
	const dispatch = useDispatch();
	const { filtered, pagination } = useSelector((state) => state.admin.staff);
	const [editModal, setEditModal] = useState(false);
	const [selectedStaff, setSelectedStaff] = useState(null);
	const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

	const paginatedData = filtered.slice((pagination.current_page - 1) * pagination.per_page, pagination.current_page * pagination.per_page);

	const handlePageChange = (page) => {
		dispatch(setStaffCurrentPage(page));
	};

	const handleEditStaff = (staff) => {
		setSelectedStaff(staff);
		setEditModal(true);
	};

	// const handleDisableStaff = (staff) => {
	// 	toast.warning(`Staff Disabled: ${staff.firstName}`);
	// };

	const handleDeleteStaff = (staff) => {
		setSelectedStaff(staff);
		setOpenDeleteDialog(true);
	};

	const confirmDelete = async () => {
		try {
			await dispatch(deleteStaff(selectedStaff.id)).unwrap();
			toast.success("Staff deleted successfully");
			setOpenDeleteDialog(false);
		} catch (error) {
			toast.error(error || "Failed to delete staff");
		}
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
							<TableHead className="text-stone-800">S/N</TableHead>
							<TableHead className="text-stone-800">Firstname</TableHead>
							<TableHead className="text-stone-800">Lastname</TableHead>
							<TableHead className="text-stone-800">Email</TableHead>
							<TableHead className="text-stone-800">Phone</TableHead>
							<TableHead className="text-stone-800">Status</TableHead>
							<TableHead className="text-stone-800">Created At</TableHead>
							<TableHead className="text-stone-800">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{paginatedData.map((staff, index) => (
							<TableRow key={staff.id} className="hover:bg-emerald-50/50">
								<TableCell>{index + 1 + (pagination.current_page - 1) * pagination.per_page}</TableCell>
								<TableCell>{staff.firstName}</TableCell>
								<TableCell>{staff.lastName ?? "N/A"}</TableCell>
								<TableCell>{staff.email}</TableCell>
								<TableCell>{staff.phone ?? "N/A"}</TableCell>
								<TableCell>
									<Badge className={staff.admin_status == 1 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
										{staff.admin_status == 1 ? "Active" : "Inactive"}
									</Badge>
								</TableCell>
								<TableCell>{new Date(staff.created_at).toLocaleDateString()}</TableCell>
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
											<DropdownMenuItem onClick={() => handleEditStaff(staff)}>Edit Staff</DropdownMenuItem>
											{/* <DropdownMenuItem onClick={() => handleDisableStaff(staff)}>Disable Staff</DropdownMenuItem> */}
											<DropdownMenuItem onClick={() => handleDeleteStaff(staff)}>Delete Staff</DropdownMenuItem>
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
					<p className="text-gray-500">No staff members found</p>
				</div>
			)}

			<Pagination
				currentPage={pagination.current_page}
				totalPages={Math.ceil(filtered.length / pagination.per_page)}
				onPageChange={handlePageChange}
				className="border-t border-red-100 pt-4"
			/>

			<EditAdminModal open={editModal} setOpen={setEditModal} staff={selectedStaff} />
			<ConfirmDialog
				open={openDeleteDialog}
				onOpenChange={setOpenDeleteDialog}
				onConfirm={confirmDelete}
				title="Delete Staff"
				description={`Are you sure you want to delete ${selectedStaff?.firstName} ${selectedStaff?.lastName}?`}
				confirmText="Delete"
				confirmVariant="destructive"
			/>
		</div>
	);
};
