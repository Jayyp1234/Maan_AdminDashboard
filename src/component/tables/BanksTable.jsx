import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CustomPagination from "../base/CustomPagination";
import { IconWrapper, ThreeDotsIcon, EditIcon, TrashIcon } from "@/resources/icons";
import { SearchIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { EyeIcon } from "lucide-react";
import { deleteBank, fetchBankMappings, setFilters } from "@/store/slices/bankSlice";
import BankStatusToggle from "../base/BankStatusToggle";
import BankMappingModal from "../others/BankMappingModal";
import BankFormModal from "../others/BankFormModal";
import { toast } from "sonner";

export default function BanksTable() {
	const dispatch = useDispatch();

	const { banks, status, currentPage, totalPages, filters } = useSelector((state) => state.banks);

	const [selectedBank, setSelectedBank] = useState(null);
	const [mappingModalOpen, setMappingModalOpen] = useState(false);
	const [editModalOpen, setEditModalOpen] = useState(false);

	const handleViewMappings = (bank) => {
		setSelectedBank(bank);
		dispatch(fetchBankMappings(bank.id));
		setMappingModalOpen(true);
	};

	const handleEdit = (bank) => {
		setSelectedBank(bank);
		setEditModalOpen(true);
	};

	const handleDelete = (bankId) => {
		if (window.confirm("Are you sure you want to delete this bank?")) {
			dispatch(deleteBank(bankId))
				.unwrap()
				.then(() => toast.success("Bank deleted successfully"))
				.catch((err) => toast.error(err.message || "Failed to delete bank"));
		}
	};

	const handleSearch = (e) => {
		dispatch(setFilters({ search: e.target.value }));
	};

	return (
		<div className="bg-white rounded-md min-h-[400px] flex flex-col justify-between gap-y-5">
			{/* Search and Filter */}
			<div className="px-6 pt-4">
				<div className="relative w-full border rounded-full focus-within:border-emerald-500 border-stone-300 transition ease-in-out duration-300">
					<input
						placeholder="Search banks..."
						className="pl-12 w-full rounded-full border-stone-300 h-10 placeholder:text-[.9rem]"
						value={filters.search}
						onChange={handleSearch}
					/>
					<IconWrapper className="absolute pointer-events-none p-3 text-stone-600 bg-transparent top-1/2 text-xl -translate-y-1/2 left-1">
						<SearchIcon />
					</IconWrapper>
				</div>
			</div>

			{/* Table */}
			<Table>
				<TableHeader>
					<TableRow className="bg-red-50 hover:bg-red-50">
						<TableHead className="px-4 text-(--primary-clr)">S/N</TableHead>
						<TableHead className="text-(--primary-clr)">Bank Name</TableHead>
						<TableHead className="text-(--primary-clr)">Country</TableHead>
						<TableHead className="text-(--primary-clr)">Status</TableHead>
						<TableHead className="text-(--primary-clr)">Actions</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody className="min-h-[300px]">
					{status === "loading" ? (
						<TableRow>
							<TableCell colSpan={5} className="text-center py-10">
								<div className="flex justify-center">
									<div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500"></div>
								</div>
							</TableCell>
						</TableRow>
					) : banks.length === 0 ? (
						<TableRow>
							<TableCell colSpan={5} className="text-center py-4 text-(--primary-clr)">
								{status === "failed" ? "Error loading banks" : "No banks found"}
							</TableCell>
						</TableRow>
					) : (
						banks?.data.data.map((bank, index) => (
							<TableRow key={bank.id} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
								<TableCell className="px-4 text-black">{(currentPage - 1) * 10 + index + 1}</TableCell>
								<TableCell className="text-black">{bank.name}</TableCell>
								<TableCell className="text-black">
									{bank.country_code} ({bank.currency_code})
								</TableCell>
								<TableCell>
									<BankStatusToggle bank={bank} />
								</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										<button
											onClick={() => handleViewMappings(bank)}
											className="p-1.5 rounded-md hover:bg-red-100 text-emerald-600"
											title="View Mappings">
											<IconWrapper>
												<EyeIcon />
											</IconWrapper>
										</button>

										<DropdownMenu>
											<DropdownMenuTrigger className="p-1.5 rounded-md hover:bg-red-100 text-emerald-600">
												<IconWrapper>
													<ThreeDotsIcon />
												</IconWrapper>
											</DropdownMenuTrigger>
											<DropdownMenuContent className="border-red-100 shadow-lg">
												<DropdownMenuItem onClick={() => handleEdit(bank)} className="text-(--primary-clr) hover:bg-red-50 cursor-pointer">
													<IconWrapper className="mr-2">
														<EditIcon />
													</IconWrapper>
													Edit Bank
												</DropdownMenuItem>
												<DropdownMenuItem onClick={() => handleDelete(bank.id)} className="text-(--primary-clr) hover:bg-red-50 cursor-pointer">
													<IconWrapper className="mr-2">
														<TrashIcon />
													</IconWrapper>
													Delete Bank
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</div>
								</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>

			{/* Pagination */}
			<div className="px-6 pb-4">
				<CustomPagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={(page) => dispatch(setPage(page))}
					activeColor="bg-emerald-600"
					hoverColor="bg-red-700"
				/>
			</div>

			{/* Modals */}
			{selectedBank && (
				<>
					<BankMappingModal bank={selectedBank} open={mappingModalOpen} onClose={() => setMappingModalOpen(false)} />

					<BankFormModal
						bank={selectedBank}
						open={editModalOpen}
						onClose={() => {
							setEditModalOpen(false);
							setSelectedBank(null);
						}}
					/>
				</>
			)}
		</div>
	);
}
