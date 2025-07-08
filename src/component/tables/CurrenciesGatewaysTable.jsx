import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchCurrencies,
	deleteCurrency, updateCurrencyStatus
} from '@/store/slices/currenciesSlice';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table';
import CustomPagination from '../base/CustomPagination';
import { IconWrapper, ThreeDotsIcon } from '@/resources/icons';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import CurrencyFormModal from '../others/CurrencyFormModal';
import CurrencyPrecisionModal from '../others/CurrencyPrecisionModal';




export default function CurrenciesGatewaysTable() {
	const dispatch = useDispatch();
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [currencyToDelete, setCurrencyToDelete] = useState(null);

	const handleDeleteClick = (currency) => {
		setCurrencyToDelete(currency);
		setDeleteModalOpen(true);
	};

	const confirmDelete = async () => {
		try {
			await dispatch(deleteCurrency(currencyToDelete.code)).unwrap();
			toast.success("Currency deleted successfully");
			setDeleteModalOpen(false);
			setCurrencyToDelete(null);
		} catch (error) {
			toast.error(error.message || "Failed to delete currency");
		}
	};
	const { currencies, loading } = useSelector(state => state.currencies);
	const [currentPage, setCurrentPage] = useState(1);
	const [editCurrency, setEditCurrency] = useState(null);
	const [deleteCurrencyCode, setDeleteCurrencyCode] = useState(null);
	const [showFormModal, setShowFormModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const perPage = 10;
	const totalPages = Math.ceil(currencies.length / perPage);
	const paginatedData = currencies.slice((currentPage - 1) * perPage, currentPage * perPage);

	useEffect(() => {
		dispatch(fetchCurrencies());
	}, [dispatch]);

	const handleDelete = () => {
		dispatch(deleteCurrency(deleteCurrencyCode));
		setShowDeleteModal(false);
	};

	const handleStatusToggle = (item) => {
		dispatch(updateCurrencyStatus({ code: item.code, status: item.status }));
	};

	return (
		<div className="bg-white rounded-md min-h-[400px] flex flex-col justify-between gap-y-5">
			<div className="flex justify-end px-4 pt-4">
				<button
					onClick={() => {
						setEditCurrency(null);
						setShowFormModal(true);
					}}
					className="bg-primary text-white px-4 py-2 rounded"
				>
					Add Currency
				</button>
			</div>

			<Table>
				<TableHeader>
					<TableRow className="bg-white hover:bg-white">
						<TableHead className="px-4">S/N</TableHead>
						<TableHead>Country Code</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Symbol</TableHead>
						<TableHead>Rate</TableHead>
						<TableHead>Role</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Action</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody className="min-h-[300px]">
					{loading ? (
						<TableRow>
							<TableCell colSpan={8} className="text-center py-4">Loading...</TableCell>
						</TableRow>
					) : paginatedData.length === 0 ? (
						<TableRow>
							<TableCell colSpan={8} className="text-center py-4">
								No currencies found
							</TableCell>
						</TableRow>
					) : (
						paginatedData.map((item, index) => (
							<TableRow key={item.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-stone-100'}`}>
								<TableCell className="px-4">{(currentPage - 1) * perPage + index + 1}</TableCell>
								<TableCell>
									<div className="flex items-center gap-2 overflow-hidden">
										<img src={item.flag} alt={item.code} className="w-4 h-3 rounded-[2px]" />
										<span>{item.country}</span>
									</div>
								</TableCell>
								<TableCell>{item.name}</TableCell>
								<TableCell>{item.symbol}</TableCell>
								<TableCell>{item.rate}</TableCell>
								<TableCell>
									{(item.sender && item.receiver && 'Both') ||
										(item.sender && 'Sender') ||
										(item.receiver && 'Receiver')}
								</TableCell>
								<TableCell>
									<button
										className={`px-2 py-1 rounded text-white ${item.status ? 'bg-green-600' : 'bg-gray-400'}`}
										onClick={() => handleStatusToggle(item)}
									>
										{item.status ? 'Active' : 'Inactive'}
									</button>
								</TableCell>
								<TableCell>
									<DropdownMenu>
										<DropdownMenuTrigger className="text-xl font-bold text-gray-500 hover:text-gray-700">
											<IconWrapper>
												<ThreeDotsIcon />
											</IconWrapper>
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											<DropdownMenuItem onClick={() => {
												setEditCurrency(item);
												setShowFormModal(true);
											}}>
												Edit
											</DropdownMenuItem>
											<DropdownMenuItem onClick={() => {
												setDeleteCurrencyCode(item.code);
												setShowDeleteModal(true);
											}}>
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

			<CustomPagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={setCurrentPage}
			/>

			{showDeleteModal && (
				<CurrencyFormModal
					isOpen={showFormModal}
					onClose={() => setShowFormModal(false)}
					currency={editCurrency}
				/>
			)}

			{showDeleteModal && (
				<ConfirmDeleteModal
					isOpen={showDeleteModal}
					onClose={() => setShowDeleteModal(false)}
					onConfirm={handleDelete}
				/>
			)}
		</div>
	);
}
