import { useDispatch, useSelector } from "react-redux";
import { PageTitle } from "../../component/base/PageTitle";
import { VendorsTable } from "../../component/tables/VendorTable";
import { IconWrapper, SearchIcon } from "../../resources/icons";
import { getAllVendorsAdminDashboard, setVendorSearch } from "../../store/slices/adminSlice";
import { useEffect } from "react";

export default function Vendors() {
	const dispatch = useDispatch();
	const { search, loading, error } = useSelector((state) => state.admin.vendors);

	useEffect(() => {
		dispatch(getAllVendorsAdminDashboard());
	}, [dispatch]);

	const handleSearchChange = (e) => {
		dispatch(setVendorSearch(e.target.value));
	};
	return (
		<div>
			<PageTitle title="Vendors" />

			<section className="bg-white rounded-xl p-5 mt-5">
				<div className="flex flex-wrap gap-y-3 gap-x-4">
					{/* Search Input */}
					<div className="relative w-full border rounded-full focus-within:border-(--primary-clr) border-stone-200 lg:w-80 transition ease-in-out duration-300">
						<input
							className="pl-12 pr-5 w-full rounded-full border-(--primary-clr) h-10 placeholder:text-[.9rem] bg-transparent focus:outline-none"
							name="Search"
							value={search}
							onChange={handleSearchChange}
							placeholder="Search by applicant name, email"
							type="search"
						/>
						<IconWrapper className="absolute pointer-events-none p-3 text-stone-600 bg-transparent top-1/2 text-xl -translate-y-1/2 left-1">
							<SearchIcon />
						</IconWrapper>
					</div>
				</div>

				<div className="mt-8">
					<VendorsTable loading={loading} error={error} />
				</div>
			</section>
		</div>
	);
}
