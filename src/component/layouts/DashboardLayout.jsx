import { Outlet, useLocation } from "react-router";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import { useDispatch, useSelector } from "react-redux";
import { LogoutModal } from "../base/Modals";
import { toggleLogoutModal } from "@/store/slices/appSlice";
// import { pagesForComponentVisibility } from "@/resources/helpers/utils";

export default function DashboardLayout() {
	const { sidebarOpen, logoutModalOpen, exportDownloadFileOpen } = useSelector((state) => state.app);
	const dispatch = useDispatch();

	const location = useLocation();
	const currentPath = location.pathname;

	// const shouldShowExportModal = pagesForComponentVisibility.exportAsModal?.some((eachPath) => currentPath.includes(eachPath));

	return (
		<>
			<div className="w-full lg:items-start mx-auto justify-center relative lg:flex">
				<div
					className={`xl:w-1/5 h-full fixed w-full duration-0 top-0 xl:!pointer-events-auto left-0 z-1 xl:z-auto xl:sticky xl:top-0 xl:h-screen transition-all ${
						sidebarOpen
							? "pointer-events-auto bg-black/50 backdrop:blur-[2px] select-auto"
							: "!pointer-events-none bg-transparent backdrop:blur-none select-none"
					}`}>
					<div
						className={`h-full bg-custom xl:scale-100 xl:!opacity-100 rounded-xl xl:rounded-none border border-zinc-600 xl:border-none overflow-hidden transition-all ease duration-300 ${
							sidebarOpen ? "opacity-100 scale-95" : "opacity-0 scale-100"
						}`}>
						<DashboardSidebar />
					</div>
				</div>
				<div className="xl:w-3/4 flex-grow flex flex-col overflow-auto relative">
					<DashboardHeader />
					<main className="flex-grow overflow-auto p-4 bg-(--dashboard-bg) min-h-[calc(100dvh-var(--dashboard-header-h))]">
						<Outlet />
					</main>
				</div>
			</div>

			<LogoutModal isOpen={logoutModalOpen} onClose={() => dispatch(toggleLogoutModal(false))} />
		</>
	);
}
