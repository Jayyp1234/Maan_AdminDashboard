// component/tables/StaffsTable.js
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStaff, toggleStaffStatus, deleteStaff, setCurrentPage } from "@/store/slices/staffSlice";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pagination } from "../base/Pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical, Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ConfirmDialog } from "../base/ConfirmDialog";
const statusColors = {
	active: "bg-green-100 text-green-800",
	inactive: "bg-red-100 text-emerald-800",
	pending: "bg-yellow-100 text-yellow-800",
};

const roleColors = {
	"super-admin": "bg-purple-100 text-purple-800",
	admin: "bg-blue-100 text-blue-800",
	staff: "bg-gray-100 text-gray-800",
};

export const StaffsTable = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { staffList, loading, pagination } = useSelector((state) => state.staff);
	const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
	const [selectedStaff, setSelectedStaff] = useState(null);

	useEffect(() => {
		dispatch(
			fetchStaff({
				page: pagination.current_page,
				per_page: pagination.per_page,
			})
		);
	}, [dispatch, pagination.current_page]);

	const handleStatusToggle = async (id) => {
		try {
			await dispatch(toggleStaffStatus(id)).unwrap();
			toast.success("Status updated successfully");
		} catch (error) {
			toast.error(error.message || "Failed to update status");
		}
	};

	const handleDelete = async () => {
		try {
			await dispatch(deleteStaff(selectedStaff.id)).unwrap();
			toast.success("Staff deleted successfully");
			setOpenDeleteDialog(false);
		} catch (error) {
			toast.error(error.message || "Failed to delete staff");
		}
	};

	const handlePageChange = (page) => {
		dispatch(setCurrentPage(page));
	};

	if (loading && staffList.length === 0) {
		return (
			<div className="space-y-4">
				{[...Array(5)].map((_, i) => (
					<Skeleton key={i} className="h-16 w-full rounded-lg" />
				))}
			</div>
		);
	}

	return (
		<div className="space-y-4">
			<Table>
				<TableHeader>
					<TableRow className="bg-red-50 hover:bg-red-50">
						<TableHead className="text-emerald-800">Staff</TableHead>
						<TableHead className="text-emerald-800">Contact</TableHead>
						<TableHead className="text-emerald-800">Role</TableHead>
						<TableHead className="text-emerald-800">Status</TableHead>
						<TableHead className="text-emerald-800">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{staffList.map((staff) => (
						<TableRow key={staff.id} className="hover:bg-red-50">
							<TableCell>
								<div className="flex items-center gap-3">
									<Avatar className="h-10 w-10 border border-red-100">
										<AvatarImage src={staff.profile_photo} />
										<AvatarFallback>
											{staff.first_name?.charAt(0) || ""}
											{staff.last_name?.charAt(0) || ""}
										</AvatarFallback>
									</Avatar>
									<div>
										<p className="font-medium">
											{staff.first_name} {staff.last_name}
										</p>
										<p className="text-sm text-gray-500">{staff.email}</p>
									</div>
								</div>
							</TableCell>
							<TableCell>
								<p>{staff.phone}</p>
								<p className="text-sm text-gray-500">{staff.email}</p>
							</TableCell>
							<TableCell className="flex flex-wrap gap-1">
								{staff.roles && staff.roles.length > 0 ? (
									staff.roles.map((role) => {
										const roleName = role.name.replace(/-/g, " ");
										const badgeClass = roleColors[role.name] || "bg-gray-100 text-gray-800";
										return (
											<Badge key={role.id} className={badgeClass}>
												{roleName.charAt(0).toUpperCase() + roleName.slice(1)}
											</Badge>
										);
									})
								) : (
									<Badge className="bg-gray-100 text-gray-800">No Role</Badge>
								)}
							</TableCell>

							<TableCell>
								<div className="flex items-center gap-3">
									<Badge className={statusColors[staff.status]}>{staff?.status}</Badge>
									<Switch
										checked={staff.status === "active"}
										onCheckedChange={() => handleStatusToggle(staff.id)}
										className="data-[state=checked]:bg-emerald-600 data-[state=unchecked]:bg-gray-200"
									/>
								</div>
							</TableCell>
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="ghost" className="h-8 w-8 p-0">
											<MoreVertical className="h-4 w-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end" className="bg-white">
										<DropdownMenuItem onClick={() => navigate(`/dashboard/staff/edit/${staff.id}`)} className="cursor-pointer hover:bg-red-50">
											<Edit className="mr-2 h-4 w-4 text-emerald-600" />
											<span className="text-emerald-800">Edit</span>
										</DropdownMenuItem>
										<DropdownMenuItem
											onClick={() => {
												setSelectedStaff(staff);
												setOpenDeleteDialog(true);
											}}
											className="cursor-pointer hover:bg-red-50">
											<Trash2 className="mr-2 h-4 w-4 text-emerald-600" />
											<span className="text-emerald-800">Delete</span>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			{staffList.length === 0 && !loading && (
				<div className="text-center py-10">
					<p className="text-gray-500">No staff members found</p>
				</div>
			)}

			<Pagination
				currentPage={pagination.current_page}
				totalPages={pagination.last_page}
				onPageChange={handlePageChange}
				className="border-t border-red-100 pt-4"
			/>

			<ConfirmDialog
				open={openDeleteDialog}
				onOpenChange={setOpenDeleteDialog}
				onConfirm={handleDelete}
				title="Delete Staff Member"
				description={`Are you sure you want to delete ${selectedStaff?.first_name} ${selectedStaff?.last_name}?`}
				confirmText="Delete"
				confirmVariant="destructive"
			/>
		</div>
	);
};
