import { useEffect, useMemo, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CustomPagination from "../base/CustomPagination";
import { IconWrapper, ThreeDotsIcon } from "@/resources/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import { fetchSmsGateways, selectFilteredGateways, setDefaultSmsGateway } from "../../store/slices/SMSGatewaySlice";
import { Badge } from "../../components/ui/badge";
import { DeleteSmsGatewayModal, EditSmsGatewayModal } from "../others/SMSGatewayModals";
import { Skeleton } from "../../components/ui/skeleton";

export default function SMSTable() {
	const dispatch = useDispatch();
	const gateways = useSelector(selectFilteredGateways);
	const loading = useSelector((state) => state.smsGateway.loading);
	const defaultGatewayId = useSelector((state) => state.smsGateway.defaultGatewayId);
	const [selectedGateway, setSelectedGateway] = useState(null);
	const [editOpen, setEditOpen] = useState(false);
	const [deleteOpen, setDeleteOpen] = useState(false);

	const PER_PAGE = 10;
	const [currentPage, setCurrentPage] = useState(1);

	// Compute pagination
	const paginatedData = useMemo(() => {
		const start = (currentPage - 1) * PER_PAGE;
		return gateways.slice(start, start + PER_PAGE);
	}, [gateways, currentPage]);

	const totalPages = Math.ceil(gateways.length / PER_PAGE);

	useEffect(() => {
		dispatch(fetchSmsGateways());
	}, []);

	const formatSettingKey = (key) =>
		key
			.split("_")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");

	const handleEditClick = (gateway) => {
		setSelectedGateway(gateway);
		setEditOpen(true);
	};

	const handleDeleteClick = (gateway) => {
		setSelectedGateway(gateway);
		setDeleteOpen(true);
	};

	const handleSetDefaultClick = (gateway) => {
		dispatch(setDefaultSmsGateway(gateway.id));
	};
	return (
		<div className="space-y-4">
			<Table>
				<TableHeader>
					<TableRow className="hover:bg-stone-50">
						<TableHead className="text-gray-800">S/N</TableHead>
						<TableHead className="text-gray-800">Gateway Name</TableHead>
						<TableHead className="text-gray-800">Provider Class</TableHead>
						<TableHead className="text-gray-800">Active</TableHead>
						<TableHead className="text-gray-800">Default</TableHead>
						<TableHead className="text-gray-800">Created At</TableHead>
						<TableHead className="text-gray-800">Settings</TableHead>
						<TableHead className="text-right text-gray-800">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{loading && !gateways.length ? (
						[...Array(PER_PAGE)].map((_, i) => (
							<TableRow key={i}>
								<TableCell colSpan={7}>
									<Skeleton className="h-8 w-full bg-stone-100" />
								</TableCell>
							</TableRow>
						))
					) : paginatedData.length > 0 ? (
						paginatedData.map((gateway, index) => (
							<TableRow key={gateway.id} className="hover:bg-stone-50">
								<TableCell>{(currentPage - 1) * PER_PAGE + index + 1}</TableCell>
								<TableCell>{gateway.name}</TableCell>
								<TableCell className="max-w-[250px] truncate">{gateway.provider_class}</TableCell>
								<TableCell>
									<Badge className={gateway.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-emerald-800"}>
										{gateway.is_active ? "Active" : "Inactive"}
									</Badge>
								</TableCell>
								<TableCell>
									{gateway.id === defaultGatewayId ? (
										<Badge className="bg-green-100 text-green-800">Yes</Badge>
									) : (
										<Badge className="bg-red-100 text-emerald-800">No</Badge>
									)}
								</TableCell>
								<TableCell>{gateway.created_at ? new Date(gateway.created_at).toLocaleDateString() : "N/A"}</TableCell>
								<TableCell>
									{gateway.settings?.length ? (
										<ul className="space-y-1 text-sm text-gray-700">
											{gateway.settings.map((setting) => (
												<li key={setting.id} className="flex items-center gap-x-1">
													<span className="font-medium">{formatSettingKey(setting.setting_key)}:</span>
													<span className="sm:truncate inline-block max-w-80">{setting.setting_value || "—"}</span>
												</li>
											))}
										</ul>
									) : (
										<span className="text-gray-400 text-sm">No settings</span>
									)}
								</TableCell>
								<TableCell className="text-right">
									<DropdownMenu>
										<DropdownMenuTrigger className="text-xl font-bold text-gray-500 hover:text-gray-700">
											<IconWrapper>
												<ThreeDotsIcon />
											</IconWrapper>
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											<DropdownMenuItem onClick={() => handleEditClick(gateway)}>Edit</DropdownMenuItem>
											<DropdownMenuItem onClick={() => handleDeleteClick(gateway)}>Delete</DropdownMenuItem>
											{gateway.id !== defaultGatewayId && (
												<DropdownMenuItem onClick={() => handleSetDefaultClick(gateway)}>Set as Default</DropdownMenuItem>
											)}
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={7} className="text-center py-4">
								No gateways found
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>

			<EditSmsGatewayModal open={editOpen} setOpen={setEditOpen} gateway={selectedGateway} />
			<DeleteSmsGatewayModal open={deleteOpen} setOpen={setDeleteOpen} gateway={selectedGateway} />

			{totalPages > 1 && (
				<CustomPagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
					activeClassName="bg-stone-600 text-white"
					pageClassName="border-stone-200 hover:bg-stone-50"
				/>
			)}
		</div>
	);
}
