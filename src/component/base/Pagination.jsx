import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({ currentPage, totalPages, onPageChange }) {
	const getPageNumbers = () => {
		const pages = [];
		const maxVisiblePages = 5;

		if (totalPages <= maxVisiblePages) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			const half = Math.floor(maxVisiblePages / 2);
			let start = currentPage - half;
			let end = currentPage + half;

			if (start < 1) {
				start = 1;
				end = maxVisiblePages;
			}

			if (end > totalPages) {
				end = totalPages;
				start = totalPages - maxVisiblePages + 1;
			}

			for (let i = start; i <= end; i++) {
				pages.push(i);
			}
		}

		return pages;
	};

	return (
		<div className="flex items-center justify-end gap-1">
			<Button variant="outline" size="sm" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
				<ChevronLeft className="h-4 w-4" />
			</Button>

			{getPageNumbers().map((page) => (
				<Button
					key={page}
					variant={currentPage === page ? "" : "outline"}
					className={`${currentPage === page ? "bg-(--primary-clr)/80 hover:bg-(--primary-clr)/100" : ""}`}
					size="sm"
					onClick={() => onPageChange(page)}>
					{page}
				</Button>
			))}

			<Button variant="outline" size="sm" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
				<ChevronRight className="h-4 w-4" />
			</Button>
		</div>
	);
}
