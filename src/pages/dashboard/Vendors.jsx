import { PageTitle } from "../../component/base/PageTitle";
// import { StaffsTable } from "../../component/tables/StaffsTable";
import { IconWrapper, SearchIcon } from "../../resources/icons";

export default function Vendors() {
	return (
		<div>
			<PageTitle title="Vendors" />

			<section className="bg-white rounded-xl p-5 mt-5">
				<div className="flex flex-wrap gap-y-3 gap-x-4">
					{/* Search Input */}
					<div className="relative w-full border rounded-full focus-within:border-(--primary-clr) border-stone-200 lg:w-80 transition ease-in-out duration-300">
						<input
							placeholder="Search by name, email or phone..."
							className="pl-12 w-full rounded-full border-(--primary-clr) h-10 placeholder:text-[.9rem] bg-transparent focus:outline-none"
							name="Search"
							// value={filters.search}
							type="search"
							// onChange={handleSearch}
						/>
						<IconWrapper className="absolute pointer-events-none p-3 text-stone-600 bg-transparent top-1/2 text-xl -translate-y-1/2 left-1">
							<SearchIcon />
						</IconWrapper>
					</div>
				</div>

				<div className="mt-8">{/* <StaffsTable /> */}</div>
			</section>
		</div>
	);
}
