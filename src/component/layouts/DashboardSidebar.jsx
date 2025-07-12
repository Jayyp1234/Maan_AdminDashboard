import { useDispatch, useSelector } from "react-redux";
import { ChevronDownIcon, ChevronRightIcon, CloseIcon, IconWrapper } from "@/resources/icons";
import { images } from "@/resources/images";
import { toggleLogoutModal, toggleSidebar } from "@/store/slices/appSlice";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AUTHENTICATED_ROUTES } from "@/routes/router";
import { actionNames } from "@/resources/helpers/utils";
import { sidebarLinks } from "../base/Multipurpose";

const iconSize = "text-[1.38rem]";

export default function DashboardSidebar() {
	const dispatch = useDispatch();
	const { sidebarOpen } = useSelector((state) => state.app);
	const navigate = useNavigate();

	const [openDropdown, setOpenDropdown] = useState(null);

	const toggleDropdown = (name) => {
		setOpenDropdown(openDropdown === name ? null : name);
	};

	const actionMap = {
		[actionNames.logout]: () => {
			if (sidebarOpen) {
				dispatch(toggleSidebar(false));
			}
			dispatch(toggleLogoutModal(true));
		},
		[actionNames.deactivate]: () => handleDeactivate(),
	};

	return (
		<aside className={`h-full flex flex-col gap-y-8 bg-white p-5`}>
			<header>
				<div className="hidden xl:flex items-center gap-3.5">
					<figure className="w-20">
						<img src={images.logos.dashboardLogo} alt="" className="majoc logo alt" />
					</figure>
					<div className="flex flex-col items-start">
						<h4 className="font-semibold uppercase">Admin</h4>
						<span className="text-stone-600 leading-tight text-sm">Dashboard</span>
					</div>
				</div>
				<div className="flex items-center xl:hidden justify-between">
					<figure className={"w-20 relative"} title="Majoc">
						<img src={images.logos.logo} alt="" className="w-full h-full" />
					</figure>
					<button
						type="button"
						onClick={() => dispatch(toggleSidebar(false))}
						className="text-2xl p-1.5 bg-transparent hover:bg-stone-200 rounded-full">
						<IconWrapper>
							<CloseIcon />
						</IconWrapper>
					</button>
				</div>
			</header>
			<div className="flex-grow">
				<ul className="h-full flex flex-col gap-y-1 overflow-y-auto tiny-scroll">
					{sidebarLinks.map((item) => {
						const { isButton, isLogout, sublinks = [], path, icon: Icon, name } = item;
						const hasSublinks = sublinks.length > 0;
						const isActive = location.pathname === path || sublinks.some((s) => location.pathname === s.path);

						// Shared base styles
						const baseLinkStyle = "flex items-center gap-3 px-4 py-3 rounded-md transition-colors";
						const activeStyle = "bg-[var(--primary-clr-light)]";
						const hoverStyle = "hover:bg-(--primary-clr-light)/80";
						const inactiveStyle = "text-gray-700";

						if (!isButton) {
							return (
								<li key={path}>
									<NavLink
										onClick={() => dispatch(toggleSidebar(false))}
										to={path}
										end={path === AUTHENTICATED_ROUTES.index}
										className={({ isActive }) => `${baseLinkStyle} ${isActive ? activeStyle : `${inactiveStyle} ${hoverStyle}`}`}>
										<IconWrapper className={iconSize}>
											<Icon />
										</IconWrapper>
										<span className="text-sm font-medium">{name}</span>
									</NavLink>
								</li>
							);
						}

						return (
							<li key={item.name} className="flex flex-col mt-auto">
								<div className={`${baseLinkStyle} justify-between ${isActive ? activeStyle : `${inactiveStyle} ${hoverStyle}`}`}>
									{isLogout ? (
										<button
											className="!text-[var(--primary-clr)] flex items-center gap-3 w-full"
											onClick={() => {
												const actionFn = actionMap[item.action];
												if (actionFn) actionFn();
											}}>
											<IconWrapper className={iconSize}>
												<Icon />
											</IconWrapper>
											<span className="text-sm font-medium">{name}</span>
										</button>
									) : (
										<NavLink
											// to={path}
											end={false}
											onClick={(e) => {
												dispatch(toggleSidebar(false));
												navigate(path);
												if (hasSublinks) {
													e.preventDefault();
													toggleDropdown(name);
												}
											}}
											className="flex items-center gap-3 w-full">
											<IconWrapper className={iconSize}>
												<Icon />
											</IconWrapper>
											<span className="text-sm font-medium">{name}</span>
										</NavLink>
									)}

									{/* Chevron */}
									{hasSublinks && !isLogout && (
										<button
											onClick={(e) => {
												e.stopPropagation();
												toggleDropdown(name);
											}}
											className="ml-auto p-1 -mr-1">
											<IconWrapper className={`transition-transform ${openDropdown === name ? "rotate-90" : ""}`}>
												<ChevronRightIcon />
											</IconWrapper>
										</button>
									)}
								</div>

								{/* Sublinks */}
								{hasSublinks && openDropdown === name && (
									<div className="ml-4 pl-2 border-l border-gray-200 mt-1 space-y-0.5">
										{sublinks.map((sublink) => (
											<NavLink
												key={sublink.path}
												to={sublink.path}
												end
												onClick={() => dispatch(toggleSidebar(false))}
												className={({ isActive }) =>
													`flex items-center gap-3 px-3 py-2.5 rounded-md ${
														isActive ? "bg-[var(--primary-clr-light)]" : "text-gray-600 hover:bg-gray-100"
													}`
												}>
												<IconWrapper className="text-[1.35rem]">
													<sublink.icon />
												</IconWrapper>
												<span className="text-[.89rem] font-medium">{sublink.name}</span>
											</NavLink>
										))}
									</div>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</aside>
	);
}
