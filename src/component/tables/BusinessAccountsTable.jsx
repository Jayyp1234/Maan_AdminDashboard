import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CustomPagination from "../base/CustomPagination";
import { IconWrapper, ThreeDotsIcon } from "@/resources/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function BusinessAccountsTable({ data = [] }) {
	const [currentPage, setCurrentPage] = useState(1);
	const perPage = 10;
	const totalPages = Math.ceil(data.length / perPage);
	const paginatedData = data.slice((currentPage - 1) * perPage, currentPage * perPage);

	const navigate = useNavigate();
	const location = useLocation();

	// Navigate to current path + /uuid
	const goToBusinessDetail = (uuid) => {
		// Construct new path by appending uuid to current path
		const basePath = location.pathname.replace(/\/$/, ""); // remove trailing slash if any
		navigate(`${basePath}/${uuid}`);
	};

	return (
		<div className="bg-white rounded-md min-h-[400px] flex flex-col justify-between gap-y-5">
			<Table>
				<TableHeader>
					<TableRow className="bg-white hover:bg-white">
						<TableHead className="px-4">S/N</TableHead>
						<TableHead>Reference ID</TableHead>
						<TableHead>Business Name</TableHead>
						<TableHead>Registration No</TableHead>
						<TableHead>Incorporation Date</TableHead>
						<TableHead>Business Owner</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Action</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody className="min-h-[300px]">
					{paginatedData.length === 0 ? (
						<TableRow>
							<TableCell colSpan={8} className="text-center py-4">
								No business accounts found
							</TableCell>
						</TableRow>
					) : (
						paginatedData.map((item, index) => (
							<TableRow key={item.id} className={`${index % 2 === 0 ? "bg-white" : "bg-stone-100"}`}>
								<TableCell>{(currentPage - 1) * perPage + index + 1}</TableCell>
								<TableCell>
									<span
										className="text-blue-600 font-medium cursor-pointer hover:underline"
										onClick={() => goToBusinessDetail(item.uuid)}
										role="link"
										tabIndex={0}
										onKeyDown={(e) => {
											if (e.key === "Enter" || e.key === " ") {
												goToBusinessDetail(item.uuid);
											}
										}}
									>
										{item.business_reference_id}
									</span>
								</TableCell>
								<TableCell>{item.business_name}</TableCell>
								<TableCell>{item.registration_number}</TableCell>
								<TableCell>{item.incorporation_date}</TableCell>
								<TableCell>{item.owner}</TableCell>
								<TableCell>
									<span className={`font-medium ${item.status === "Verified" ? "text-green-600" : "text-yellow-600"}`}>
										{item.status}
									</span>
								</TableCell>
								<TableCell>
									<DropdownMenu>
										<DropdownMenuTrigger className="text-xl font-bold text-gray-500 hover:text-gray-700">
											<IconWrapper>
												<ThreeDotsIcon />
											</IconWrapper>
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											<DropdownMenuItem onClick={() => goToBusinessDetail(item.uuid)}>View</DropdownMenuItem>
											{/* <DropdownMenuItem >Edit</DropdownMenuItem> */}
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>


			<CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
		</div>
	);
}
