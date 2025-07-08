import { createBrowserRouter } from "react-router";
import { AUTHENTICATED_ROUTES, UNAUTHENTICATED_ROUTES } from "./router";
import { LoginPage } from "@/pages/auth/LoginPage";
import { ProtectedRoute } from "@/pages/auth/ProtectedRoute";
import DashboardLayout from "@/component/layouts/DashboardLayout";
import Index from "@/pages/dashboard/Index";
import PageNotFound from "@/pages/error/PageNotFound";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Vendors from "../pages/dashboard/Vendors";
import AdminStaffs from "../pages/dashboard/AdminStaffs";

export const router = createBrowserRouter([
	{
		index: true,
		element: <LoginPage />,
		path: UNAUTHENTICATED_ROUTES.LOGIN,
	},
	{
		element: <ForgotPassword />,
		path: UNAUTHENTICATED_ROUTES.FORGOT_PASSWORD,
	},
	{
		element: <ProtectedRoute />,
		children: [
			{
				path: AUTHENTICATED_ROUTES.index,
				element: <DashboardLayout />,
				children: [{ index: true, element: <Index />, end: true }],
			},
			{
				path: AUTHENTICATED_ROUTES.vendors,
				element: <DashboardLayout />,
				children: [{ index: true, element: <Vendors /> }],
			},
			{
				path: AUTHENTICATED_ROUTES.admin,
				element: <DashboardLayout />,
				children: [{ index: true, element: <AdminStaffs /> }],
			},
		],
	},
	{
		path: UNAUTHENTICATED_ROUTES._404,
		element: <PageNotFound />,
	},
]);
