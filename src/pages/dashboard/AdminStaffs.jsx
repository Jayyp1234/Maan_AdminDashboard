import { useEffect, useState } from "react";
import { PageTitle } from "../../component/base/PageTitle";
import { Button } from "../../components/ui/button";
import { IconWrapper, PlusIcon, SearchIcon } from "../../resources/icons";
import { preTableActionStyle } from "../../extras/commonstyles";
import AddAdminModal from "../../component/base/AdminModals";
import { useDispatch, useSelector } from "react-redux";
import { getAllStaffsAdminDashboard, setStaffSearch } from "../../store/slices/adminSlice";
import { AdminStaffsTable } from "../../component/tables/AdminStaffsTable";

export default function AdminStaffs() {
	const [addAdminModal, setAddAdminModal] = useState(false);

	const dispatch = useDispatch();
	const { search, loading, error } = useSelector((state) => state.admin.staff);

	useEffect(() => {
		dispatch(getAllStaffsAdminDashboard());
	}, [dispatch]);

	const handleSearchChange = (e) => {
		dispatch(setStaffSearch(e.target.value));
	};
	return (
		<div>
			<PageTitle title="Admin Staff Members" />

			<section className="bg-white rounded-xl p-5 mt-5">
				<div className="flex flex-wrap gap-y-3 gap-x-4">
					<div className="relative w-full border rounded-full focus-within:border-(--primary-clr) border-stone-200 lg:w-80 transition ease-in-out duration-300">
						<input
							placeholder="Search by name, email or phone..."
							className="pl-12 w-full rounded-full border-(--primary-clr) h-10 placeholder:text-[.9rem] bg-transparent focus:outline-none"
							name="Search"
							type="search"
							value={search}
							onChange={handleSearchChange}
						/>
						<IconWrapper className="absolute pointer-events-none p-3 text-stone-600 bg-transparent top-1/2 text-xl -translate-y-1/2 left-1">
							<SearchIcon />
						</IconWrapper>
					</div>

					<Button onClick={() => setAddAdminModal(true)} className={`${preTableActionStyle} bg-(--primary-clr) hover:bg-(--primary-clr) ml-auto`}>
						<IconWrapper className="text-xl">
							<PlusIcon />
						</IconWrapper>
						<span>Add New Staff</span>
					</Button>
				</div>

				<div className="mt-8">
					<AdminStaffsTable loading={loading} error={error} />
				</div>

				<AddAdminModal open={addAdminModal} setOpen={setAddAdminModal} />
			</section>
		</div>
	);
}
