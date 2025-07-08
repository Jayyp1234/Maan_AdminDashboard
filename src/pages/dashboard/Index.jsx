import { Card } from "@/component/base/Card";
import { formatDateTime, formatNumber } from "@/resources/helpers";
import { Link } from "react-router";
import { AUTHENTICATED_ROUTES } from "@/routes/router";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { tableHeaderCellStyle } from "@/extras/commonstyles";
import { PageTitle } from "@/component/base/PageTitle";
import { allTransactions, transactionChartTable } from "@/resources/data";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "../../components/ui/skeleton";
import { TotalUsersIcon, UserBlockedIcon, UserPendingIcon, UserVerifiedIcon } from "../../resources/icons";
import { getAllStaffsAdminDashboard, getAllVendorsAdminDashboard } from "../../store/slices/adminSlice";

export default function Index() {
	const dispatch = useDispatch();
	const { list, stats, loading } = useSelector((state) => state.admin.vendors);
	const { loading: staffAdminLoading, list: staffs } = useSelector((state) => state.admin.staff);

	useEffect(() => {
		dispatch(getAllVendorsAdminDashboard());
		dispatch(getAllStaffsAdminDashboard());
	}, []);

	const slicedVendors = list?.slice(0, 9) || [];

	return (
		<div>
			<PageTitle title={"Dashboard"} />
			<section>
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-5">
					<Card cardTitle="Total Vendors" icon={<TotalUsersIcon />} isLoading={loading} status="all" value={formatNumber(stats?.total_vendor)} />
					<Card
						cardTitle="Total Amount Vendors Paid"
						isLoading={loading}
						status="verified"
						icon={<UserVerifiedIcon />}
						value={formatNumber(stats?.total_vendor_amount)}
					/>
					<Card
						cardTitle="Total Confirmed Vendor Payment"
						isLoading={loading}
						status="verified"
						icon={<UserVerifiedIcon />}
						value={formatNumber(stats?.total_vendor_confirm_payment)}
					/>
					<Card
						cardTitle="Total Confirmed Vendor Payment Amount"
						isLoading={loading}
						status="verified"
						icon={<UserVerifiedIcon />}
						value={formatNumber(stats?.total_vendor_confirm_payment_amount)}
					/>
					<Card
						cardTitle="Total Vendor Incomplete Payment"
						isLoading={loading}
						status="verified"
						icon={<UserVerifiedIcon />}
						value={formatNumber(stats?.total_vendor_incomplete_payment)}
					/>
					<Card cardTitle="Unverified Vendors" icon={<UserPendingIcon />} status="pending" isLoading={loading} value={formatNumber(34534)} />
					<Card cardTitle="Blocked Vendors" icon={<UserBlockedIcon />} status="blocked" isLoading={loading} value={formatNumber(2)} />
				</div>
			</section>
			<section>
				<div className="grid grid-cols-9 gap-6 mt-5">
					<aside className="col-span-full lg:col-span-5 p-4 bg-white rounded-lg">
						<header className="flex items-center justify-between gap-8 pt-1 pb-4">
							<h5 className="font-semibold text-xl">Vendors</h5>
							<Link to={AUTHENTICATED_ROUTES.vendors} className="text-(--primary-clr) font-semibold text-sm">
								View all
							</Link>
						</header>
						<div>
							<Table>
								<TableHeader>
									<TableRow className={"hover:bg-white"}>
										<TableHead className={`${tableHeaderCellStyle} px-3`}>S/N</TableHead>
										<TableHead className={`${tableHeaderCellStyle} px-4`}>Vendor Name</TableHead>
										<TableHead className={`${tableHeaderCellStyle}`}>Amount</TableHead>
										<TableHead className={`${tableHeaderCellStyle}`}>Status</TableHead>
										<TableHead className={`${tableHeaderCellStyle}`}>Date</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody className="min-h-[300px]">
									{loading
										? new Array(7).fill("").map((_, index) => (
												<TableRow key={index}>
													<TableCell colSpan={5}>
														<Skeleton className="bg-stone-100 w-full h-10" />
													</TableCell>
												</TableRow>
										  ))
										: slicedVendors.map((vendor, index) => (
												<TableRow key={index}>
													<TableCell className={"px-3"}>{index}</TableCell>
													<TableCell className={"px-3"}>{vendor.applicant_name}</TableCell>
													<TableCell className={"py-3"}>{vendor.amount ?? "N/A"}</TableCell>
													<TableCell className={"py-3"}>{vendor.registration_status ?? "N/A"}</TableCell>
													<TableCell className={"py-3"}>{vendor.created_at ?? "N/A"}</TableCell>
												</TableRow>
										  ))}
								</TableBody>
							</Table>
						</div>
					</aside>
					<aside className="col-span-full bg-white rounded-lg overflow-hidden lg:col-span-4">
						<header className="flex items-center justify-between gap-8 px-4 pt-4 pb-4">
							<h5 className="font-semibold text-xl">Staff Admins</h5>
							<Link to={AUTHENTICATED_ROUTES.admin} className="text-(--primary-clr) font-semibold text-sm">
								See all staffs
							</Link>
						</header>
						<div>
							<Table>
								<TableHeader>
									<TableRow className={"hover:bg-white"}>
										<TableHead className={`${tableHeaderCellStyle} px-5`}>S/N</TableHead>
										<TableHead className={`${tableHeaderCellStyle} px-4`}>Admin</TableHead>
										<TableHead className={`${tableHeaderCellStyle} px-4`}>Role</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody className="min-h-[300px]">
									{staffAdminLoading
										? new Array(7).fill("").map((_, index) => (
												<TableRow key={index}>
													<TableCell colSpan={4}>
														<Skeleton className="bg-stone-100 w-full h-10" />
													</TableCell>
												</TableRow>
										  ))
										: staffs.map((staff, index) => (
												<TableRow key={index}>
													<TableCell className={"px-5"}>{index}</TableCell>
													<TableCell className={"px-4"}>
														{staff.firstName}
														{staff.lastName}
													</TableCell>
													<TableCell className={"px-4"}>{staff.phone ?? "N/A"}</TableCell>
												</TableRow>
										  ))}
								</TableBody>
							</Table>
						</div>
					</aside>
				</div>
			</section>
		</div>
	);
}

export const IndexTransactionTableChart = () => {
	return (
		<ResponsiveContainer className={"!h-[350px] flex-grow"}>
			<BarChart className="h-full w-full" style={{ marginLeft: "-1rem" }} data={transactionChartTable}>
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="pending" fill="#db7373" barSize={8} />
				<Bar dataKey="successful" fill="var(--primary-clr)" barSize={8} />
			</BarChart>
		</ResponsiveContainer>
	);
};
