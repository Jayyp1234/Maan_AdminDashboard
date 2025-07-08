import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CustomPagination from "../base/CustomPagination";
import { IconWrapper, ThreeDotsIcon } from "@/resources/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { deleteCountryLimit, toggleCountryLimitStatus, setCurrentPage, fetchCountryLimits } from "@/store/slices/countryLimitsSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"; // Assuming you have these from shadcn/ui or similar
import { Button } from "@/components/ui/button"; // Assuming you have this
import { Skeleton } from "@/components/ui/skeleton"; // Assuming you have this
import { Spinner } from "../base/Spinner";

export default function ManageLimitsTable() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { limits, loading, error, pagination } = useSelector((state) => state.countryLimits);

	console.log(limits);
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
	const [limitToDelete, setLimitToDelete] = useState(null);

	useEffect(() => {
		dispatch(
			fetchCountryLimits({
				page: pagination.current_page,
				per_page: pagination.per_page,
			})
		);
	}, [dispatch, pagination.current_page, pagination.per_page]);

	const handlePageChange = (page) => {
		dispatch(setCurrentPage(page));
	};

	const handleToggleStatus = async (id, currentStatus) => {
		try {
			await dispatch(toggleCountryLimitStatus(id)).unwrap();
			toast.success(`Limit ${currentStatus ? "deactivated" : "activated"} successfully`);
		} catch (err) {
			const errorMessage = err.message || "Failed to update status.";
			toast.error(errorMessage);
		}
	};

	const confirmDelete = (id) => {
		setLimitToDelete(id);
		setIsDeleteDialogOpen(true);
	};

	const handleDelete = async () => {
		if (!limitToDelete) return;
		try {
			await dispatch(deleteCountryLimit(limitToDelete)).unwrap();
			toast.success("Limit deleted successfully.");
			setIsDeleteDialogOpen(false); // Close dialog on success
			setLimitToDelete(null); // Clear item to delete
		} catch (err) {
			const errorMessage = err.message || "Failed to delete limit.";
			toast.error(errorMessage);
		}
	};

	// --- Loading State (Skeleton) ---
	if (loading && limits?.length === 0) {
		return (
			<div className="bg-white rounded-md p-6 min-h-[400px]">
				<div className="space-y-4">
					<Skeleton className="h-10 w-full bg-gray-200" /> {/* Header row */}
					{Array.from({ length: 5 })?.map((_, i) => (
						<Skeleton key={i} className="h-12 w-full bg-gray-100" /> // Table rows
					))}
				</div>
				<div className="mt-6 flex justify-end">
					<Skeleton className="h-10 w-64 bg-gray-200" /> {/* Pagination */}
				</div>
			</div>
		);
	}

	// --- Error State ---
	if (error && limits?.length === 0) {
		return (
			<div className="bg-white rounded-md min-h-[400px] flex flex-col items-center justify-center p-6 text-emerald-600">
				<p className="text-lg font-medium mb-2">Error loading limits!</p>
				<p className="text-sm text-gray-500">{error}</p>
				<Button onClick={() => dispatch(fetchCountryLimits({ page: 1, per_page: pagination.per_page }))} className="mt-4">
					Try Again
				</Button>
			</div>
		);
	}

	return (
		<div className="bg-white rounded-md min-h-[400px] flex flex-col justify-between shadow-sm border border-gray-100">
			<Table>
				<TableHeader className="bg-gray-50">
					<TableRow>
						<TableHead className="px-4 text-gray-600 font-semibold">S/N</TableHead>
						<TableHead className="text-gray-600 font-semibold">Country</TableHead>
						<TableHead className="text-gray-600 font-semibold">Limit Amount</TableHead>
						<TableHead className="text-gray-600 font-semibold">Limit Days</TableHead>
						<TableHead className="text-gray-600 font-semibold">Yearly Limit</TableHead>
						<TableHead className="text-gray-600 font-semibold">Times</TableHead>
						<TableHead className="text-gray-600 font-semibold">Status</TableHead>
						<TableHead className="text-gray-600 font-semibold text-right">Action</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{limits?.length === 0 ? (
						<TableRow>
							<TableCell colSpan={8} className="text-center py-8 text-gray-500">
								<p className="mb-2">No country limits configured yet.</p>
								<p>Start by adding a new limit!</p>
							</TableCell>
						</TableRow>
					) : (
						limits?.map((item, index) => (
							<TableRow key={item.id} className={`transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}`}>
								<TableCell className="px-4 text-gray-700">{(pagination.current_page - 1) * pagination.per_page + index + 1}</TableCell>
								<TableCell className="font-medium text-gray-800">{item.country?.name || "Global"}</TableCell>
								<TableCell className="text-gray-700">{item.amount}</TableCell>
								<TableCell className="text-gray-700">{item.days}</TableCell>
								<TableCell className="text-gray-700">{item.yearly_amount}</TableCell>
								<TableCell className="text-gray-700">{item.times}</TableCell>
								<TableCell>
									<Switch
										checked={item.status}
										onCheckedChange={() => handleToggleStatus(item.id, item.status)}
										className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
										aria-label={`Toggle status for ${item.country?.name || "Global"} limit`}
									/>
								</TableCell>
								<TableCell className="text-right">
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="ghost" className="h-8 w-8 p-0" aria-label="Actions">
												<span className="sr-only">Open menu</span>
												<IconWrapper className="w-5 h-5 text-gray-500 hover:text-gray-800">
													<ThreeDotsIcon />
												</IconWrapper>
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end" className="w-40">
											<DropdownMenuItem onClick={() => navigate(`/dashboard/transactions/limits/edit/${item.id}`)}>Edit</DropdownMenuItem>
											<DropdownMenuItem className="text-emerald-600 focus:text-red-700 focus:bg-red-50" onClick={() => confirmDelete(item.id)}>
												Delete
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>

			{limits?.length > 0 && (
				<div className="p-4 border-t border-gray-100 bg-gray-50">
					<CustomPagination currentPage={pagination?.current_page} totalPages={pagination?.last_page} onPageChange={handlePageChange} />
				</div>
			)}

			{/* Delete Confirmation Dialog */}
			<Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Confirm Deletion</DialogTitle>
						<DialogDescription>Are you sure you want to delete this limit? This action cannot be undone.</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => {
								setIsDeleteDialogOpen(false);
								setLimitToDelete(null);
							}}>
							Cancel
						</Button>
						<Button variant="destructive" onClick={handleDelete} disabled={loading}>
							{loading ? <Spinner size="sm" /> : "Delete"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
