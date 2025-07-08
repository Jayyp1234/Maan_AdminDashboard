import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CustomPagination from "../base/CustomPagination";
import { IconWrapper, ThreeDotsIcon } from "@/resources/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function AccessControlTable({ data = [] }) {
	const [currentPage, setCurrentPage] = useState(1);
	const perPage = 10;

	const totalPages = Math.ceil(data.length / perPage);
	const paginatedData = data.slice((currentPage - 1) * perPage, currentPage * perPage);

	return (
		<div className="bg-white rounded-md min-h-[400px] flex flex-col justify-between gap-y-5">
			<Table>
				<TableHeader>
					<TableRow className="bg-white hover:bg-white">
						<TableHead>S/N</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{paginatedData.map((role, index) => (
						<TableRow key={role.id}>
							<TableCell>{(currentPage - 1) * perPage + index + 1}</TableCell>
							<TableCell>{role.name}</TableCell>
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger>
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
					))}
				</TableBody>
			</Table>

			{/* Your custom pagination component */}
			{<CustomPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
		</div>
	);
}
