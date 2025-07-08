import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { fetchRoles, deleteRole, setSelectedRole, resetSelection } from "@/store/slices/accessControlSlice";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import CustomPagination from "@/component/base/CustomPagination";
import { IconWrapper, ThreeDotsIcon, PlusIcon } from "@/resources/icons";
import RoleFormModal from "../others/RoleFormModal";
import ConfirmDeleteModal from "../others/ConfirmDeleteModal";

export default function RolesTable() {
	const dispatch = useDispatch();
	const { roles, selectedRole } = useSelector((state) => state.accessControl);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(10);
	const [guardName, setGuardName] = useState("admin");
	const [showFormModal, setShowFormModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		dispatch(fetchRoles({ page: currentPage, per_page: perPage, guard_name: guardName }));
	}, [dispatch, currentPage, perPage, guardName]);

	const handleDelete = async () => {
		setIsDeleting(true);
		try {
			await dispatch(deleteRole(selectedRole.id)).unwrap();
			toast.success("Role deleted successfully");
			setShowDeleteModal(false);
			dispatch(resetSelection());
		} catch (error) {
			toast.error(error || "Failed to delete role");
		} finally {
			setIsDeleting(false);
		}
	};

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-xl font-semibold text-emerald-800">Roles Management</h2>
				<Button
					onClick={() => {
						dispatch(resetSelection());
						setShowFormModal(true);
					}}
					className="flex items-center gap-2 bg-emerald-600 hover:bg-red-700">
					<PlusIcon className="h-4 w-4" />
					<span>Add Role</span>
				</Button>
			</div>

			<div className="rounded-md border border-red-100">
				<Table>
					<TableHeader className="bg-red-50">
						<TableRow className="hover:bg-red-50">
							<TableHead className="text-emerald-800">ID</TableHead>
							<TableHead className="text-emerald-800">Name</TableHead>
							<TableHead className="text-emerald-800">Guard</TableHead>
							<TableHead className="text-emerald-800">Permissions</TableHead>
							<TableHead className="text-emerald-800">Created At</TableHead>
							<TableHead className="text-right text-emerald-800">Actions</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{roles.loading ? (
							<TableRow>
								<TableCell colSpan={6} className="h-24 text-center">
									Loading roles...
								</TableCell>
							</TableRow>
						) : roles.error ? (
							<TableRow>
								<TableCell colSpan={6} className="h-24 text-center text-emerald-600">
									Error: {roles.error}
								</TableCell>
							</TableRow>
						) : roles?.data?.length === 0 ? (
							<TableRow>
								<TableCell colSpan={6} className="h-24 text-center">
									No roles found
								</TableCell>
							</TableRow>
						) : (
							roles?.data?.map((role) => (
								<TableRow key={role.id} className="hover:bg-red-50">
									<TableCell>{role.id}</TableCell>
									<TableCell className="font-medium">{role.name}</TableCell>
									<TableCell>{role.guard_name}</TableCell>
									<TableCell>
										{role?.permissions?.length > 0 ? (
											<span className="text-sm text-gray-600">{role?.permissions?.length} permissions</span>
										) : (
											<span className="text-sm text-gray-400">No permissions</span>
										)}
									</TableCell>
									<TableCell>{new Date(role.created_at).toLocaleDateString()}</TableCell>
									<TableCell className="text-right">
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button variant="ghost" size="sm" className="text-emerald-600 hover:text-red-700">
													<ThreeDotsIcon className="h-4 w-4" />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent className="border-red-200">
												<DropdownMenuItem
													onClick={() => {
														dispatch(setSelectedRole(role));
														setShowFormModal(true);
													}}
													className="text-emerald-600 hover:bg-red-50">
													Edit
												</DropdownMenuItem>
												<DropdownMenuItem
													onClick={() => {
														dispatch(setSelectedRole(role));
														setShowDeleteModal(true);
													}}
													className="text-emerald-600 hover:bg-red-50">
													Delete
												</DropdownMenuItem>
												<DropdownMenuSeparator />
												<DropdownMenuItem
													onClick={() => {
														dispatch(setSelectedRole(role));
														// Open permission assignment modal
													}}
													className="text-purple-600 hover:bg-purple-50">
													Manage Permissions
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</div>

			{roles?.data?.length > 0 && (
				<div className="mt-4">
					<CustomPagination
						currentPage={currentPage}
						totalPages={Math.ceil(roles.pagination.total / perPage)}
						onPageChange={setCurrentPage}
						activeClassName="bg-emerald-600 text-white"
						pageClassName="border-red-200 hover:bg-red-50"
					/>
				</div>
			)}

			<RoleFormModal
				isOpen={showFormModal}
				onClose={() => {
					setShowFormModal(false);
					dispatch(resetSelection());
				}}
				role={selectedRole}
			/>

			<ConfirmDeleteModal
				isOpen={showDeleteModal}
				onClose={() => {
					setShowDeleteModal(false);
					dispatch(resetSelection());
				}}
				onConfirm={handleDelete}
				isLoading={isDeleting}
				title="Delete Role"
				message={`Are you sure you want to delete ${selectedRole?.name}? This action cannot be undone.`}
			/>
		</div>
	);
}
