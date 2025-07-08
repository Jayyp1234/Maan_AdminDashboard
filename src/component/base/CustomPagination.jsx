import { ChevronRightIcon, DoubleChevronRightIcon, IconWrapper } from "@/resources/icons";

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
	const maxVisiblePages = 5;
	let startPage, endPage;

	if (totalPages <= maxVisiblePages) {
		startPage = 1;
		endPage = totalPages;
	} else {
		const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
		const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;

		if (currentPage <= maxPagesBeforeCurrent) {
			startPage = 1;
			endPage = maxVisiblePages;
		} else if (currentPage + maxPagesAfterCurrent >= totalPages) {
			startPage = totalPages - maxVisiblePages + 1;
			endPage = totalPages;
		} else {
			startPage = currentPage - maxPagesBeforeCurrent;
			endPage = currentPage + maxPagesAfterCurrent;
		}
	}

	const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
	return (
		<div className="mt-10 flex justify-end">
			<div className="flex items-center gap-1">
				<button onClick={() => onPageChange(1)} disabled={currentPage === 1} className="p-2 disabled bg-white rounded">
					<IconWrapper className="text-sm aspect-square [transform:rotateY(180deg)]">
						<DoubleChevronRightIcon />
					</IconWrapper>
				</button>
				<button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="p-2 disabled bg-white rounded">
					<IconWrapper className="text-sm aspect-square [transform:rotateY(180deg)]">
						<ChevronRightIcon />
					</IconWrapper>
				</button>

				{pages.map((page) => (
					<button
						key={page}
						onClick={() => onPageChange(page)}
						className={`px-3 py-1 rounded ${currentPage === page ? "text-[var(--primary-clr)] bg-white" : "hover:bg-gray-100"}`}>
						{page}
					</button>
				))}

				<button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 disabled bg-white rounded">
					<IconWrapper className="text-sm aspect-square">
						<ChevronRightIcon />
					</IconWrapper>
				</button>
				<button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} className="p-2 disabled bg-white rounded">
					<IconWrapper className="text-sm aspect-square">
						<DoubleChevronRightIcon />
					</IconWrapper>
				</button>
			</div>
		</div>
	);
};

export default CustomPagination;
