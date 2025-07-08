import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { fetchPermissions } from "@/store/slices/accessControlSlice";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import CustomPagination from "@/component/base/CustomPagination";
import { IconWrapper, PlusIcon } from "@/resources/icons";
import PermissionFormModal from "../others/PermissionFormModal";

export default function PermissionsTable() {
	const dispatch = useDispatch();
	const { permissions } = useSelector((state) => state.accessControl);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(50);
	const [guardName, setGuardName] = useState("admin");
	const [showFormModal, setShowFormModal] = useState(false);

	useEffect(() => {
		dispatch(fetchPermissions({ page: currentPage, per_page: perPage, guard_name: guardName }));
	}, [dispatch, currentPage, perPage, guardName]);

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-center">
				<h2 className="text-xl font-semibold text-emerald-800">Permissions Management</h2>
				<Button onClick={() => setShowFormModal(true)} className="flex items-center gap-2 bg-emerald-600 hover:bg-red-700">
					<PlusIcon className="h-4 w-4" />
					<span>Add Permission</span>
				</Button>
			</div>

			<div className="rounded-md border border-red-100">
				<Table>
					<TableHeader className="bg-red-50">
						<TableRow className="hover:bg-red-50">
							<TableHead className="text-emerald-800">ID</TableHead>
							<TableHead className="text-emerald-800">Name</TableHead>
							<TableHead className="text-emerald-800">Guard</TableHead>
							<TableHead className="text-emerald-800">Created At</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{permissions.loading ? (
							<TableRow>
								<TableCell colSpan={4} className="h-24 text-center">
									Loading permissions...
								</TableCell>
							</TableRow>
						) : permissions.error ? (
							<TableRow>
								<TableCell colSpan={4} className="h-24 text-center text-emerald-600">
									Error: {permissions.error}
								</TableCell>
							</TableRow>
						) : permissions?.data?.length === 0 ? (
							<TableRow>
								<TableCell colSpan={4} className="h-24 text-center">
									No permissions found
								</TableCell>
							</TableRow>
						) : (
							permissions?.data?.map((permission) => (
								<TableRow key={permission.id} className="hover:bg-red-50">
									<TableCell>{permission.id}</TableCell>
									<TableCell className="font-medium">{permission.name}</TableCell>
									<TableCell>{permission.guard_name}</TableCell>
									<TableCell>{new Date(permission.created_at).toLocaleDateString()}</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</div>

			{permissions?.data?.length > 0 && (
				<div className="mt-4">
					<CustomPagination
						currentPage={currentPage}
						totalPages={Math.ceil(permissions.pagination.total / perPage)}
						onPageChange={setCurrentPage}
						activeClassName="bg-emerald-600 text-white"
						pageClassName="border-red-200 hover:bg-red-50"
					/>
				</div>
			)}

			<PermissionFormModal isOpen={showFormModal} onClose={() => setShowFormModal(false)} />
		</div>
	);
}
