import React from "react";
import { images } from "@/resources/images";
import { BellIcon, ChevronDownIcon, DefaultProfileImageIcon, IconWrapper, MenuIconDouble } from "@/resources/icons";
import { Link } from "react-router";
import { AUTHENTICATED_ROUTES } from "@/routes/router";
import { actionNames } from "@/resources/helpers/utils";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogoutModal, toggleSidebar } from "@/store/slices/appSlice";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../../components/ui/dropdown-menu";
import { Skeleton } from "../../components/ui/skeleton";

export default function DashboardHeader() {
	const dispatch = useDispatch();
	const { adminProfile, loading } = useSelector((state) => state.auth);
	const admin = adminProfile.data;

	return (
		<>
			<header className="flex justify-between gap-8 items-center py-4 px-4 sm:px-6 bg-white h-(--dashboard-header-h)">
				<aside>
					<div className="xl:hidden flex items-center justify-center">
						<figure className={"relative w-20"} title="CosmoRemit">
							<img src={images.logos.logo} alt="CosmoRemit" />
						</figure>
					</div>
				</aside>
				<aside className="flex items-center gap-2">
					{/* <button type="button" className="text-xl mr-1 p-2.5 rounded-full bg-stone-200/40 text-(--primary-clr)">
						<IconWrapper>
							<BellIcon />
						</IconWrapper>
					</button> */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<button className="outline-0">
								<div className="flex items-center gap-x-2">
									{loading ? (
										<Skeleton className="bg-slate-300 rounded-full w-10 aspect-square border border-white" />
									) : (
										<>
											<IconWrapper className="text-[2.5rem] text-(--primary-clr)">
												<DefaultProfileImageIcon />
											</IconWrapper>
										</>
									)}
									<div className="text-start hidden md:block">
										<h5 className="font-medium capitalize text-sm">{admin?.firstName}</h5>
										<span className="block text-[.8rem] text-nowrap overflow-hidden overflow-ellipsis max-w-[120px] font-normal leading-none text-stone-600 tracking-normal">
											{admin?.email}
										</span>
									</div>
									<IconWrapper className={"hidden sm:flex"}>
										<ChevronDownIcon />
									</IconWrapper>
								</div>
							</button>
						</DropdownMenuTrigger>

						<DropdownMenuContent align="end" className="min-h-auto w-56 border border-slate-100 bg-white shadow-lg rounded-lg overflow-hidden">
							<div className="flex items-center gap-3 py-2.5 px-4">
								<IconWrapper className="text-[2.5rem] text-(--primary-clr)">
									<DefaultProfileImageIcon />
								</IconWrapper>
								<div className="text-start">
									<h5 className="font-medium text-[.9rem]">{admin?.firstName}</h5>
									<span className="block text-[.8rem] text-nowrap overflow-hidden overflow-ellipsis max-w-[120px] font-normal leading-none text-stone-600">
										{admin?.email}
									</span>
								</div>
							</div>

							<DropdownMenuSeparator className="my-0 h-px bg-black/10" />

							<div className="flex flex-col px-2 py-2">
								{dropdownLinks.map((eachLink, index) => {
									const style =
										"px-2.5 py-2 text-start rounded-sm text-sm bg-transparent last:text-(--primary-clr) hover:last:bg-(--primary-clr)/10 hover:bg-slate-100";

									return (
										<DropdownMenuItem key={index} asChild>
											{eachLink.isButton ? (
												<button type="button" className={style} onClick={() => dispatch(toggleLogoutModal(true))}>
													{eachLink.title}
												</button>
											) : (
												<Link to={eachLink.path} className={style}>
													{eachLink.title}
												</Link>
											)}
										</DropdownMenuItem>
									);
								})}
							</div>
						</DropdownMenuContent>
					</DropdownMenu>
					<button
						type="button"
						onClick={() => dispatch(toggleSidebar(true))}
						className="text-2xl p-2 xl:hidden rounded-full bg-transparent hover:bg-stone-200">
						<IconWrapper>
							<MenuIconDouble />
						</IconWrapper>
					</button>
				</aside>
			</header>
		</>
	);
}

const dropdownLinks = [
	// {
	// 	title: "Settings",
	// 	path: AUTHENTICATED_ROUTES.settings,
	// 	isButton: false,
	// },
	{
		title: "Logout",
		isButton: true,
		action: actionNames.logout,
	},
];
