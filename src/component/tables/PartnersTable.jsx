import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CustomPagination from "../base/CustomPagination";
import { IconWrapper, ThreeDotsIcon } from "@/resources/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function PartnersTable({ data = [] }) {
	const [currentPage, setCurrentPage] = useState(1);
	const perPage = 10;

	const totalPages = Math.ceil(data.length / perPage);
	const paginatedData = data.slice((currentPage - 1) * perPage, currentPage * perPage);
	return (
		<div className="bg-white rounded-md min-h-[400px] flex flex-col justify-between gap-y-5">
			<Table>
				<TableHeader>
					<TableRow className="bg-white hover:bg-white">
						<TableHead className="px-4">S/N</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Phone</TableHead>
						<TableHead>Date Created</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Action</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody className="min-h-[300px]">
					{paginatedData.length === 0 ? (
						<TableRow>
							<TableCell colSpan={7} className="text-center py-4">
								No businesses found
							</TableCell>
						</TableRow>
					) : (
						paginatedData.map((item, index) => (
							<TableRow key={item.id} className={`${index % 2 === 0 ? "bg-white" : "bg-stone-100"}`}>
								<TableCell className="px-4">{(currentPage - 1) * perPage + index + 1}</TableCell>
								<TableCell>{item.name}</TableCell>
								<TableCell>{item.email}</TableCell>
								<TableCell>{item.phone}</TableCell>
								<TableCell>{item.dateCreated}</TableCell>
								<TableCell className={`${item.status === "Successful" ? "text-green-600" : "text-yellow-500"}`}>{item.status}</TableCell>
								<TableCell>
									<DropdownMenu>
										<DropdownMenuTrigger className="text-xl font-bold text-gray-500 hover:text-gray-700">
											<IconWrapper>
												<ThreeDotsIcon />
											</IconWrapper>
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											<DropdownMenuItem>Edit</DropdownMenuItem>
											<DropdownMenuItem>Delete</DropdownMenuItem>
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
