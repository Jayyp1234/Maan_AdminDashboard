import { useDispatch, useSelector } from "react-redux";
import { UNAUTHENTICATED_ROUTES } from "@/routes/router";
import { Navigate, Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import PageLoader from "../../component/base/PageLoader";
import { getUserAdminProfile } from "../../store/slices/authSlice";

export const ProtectedRoute = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	const { isAuthenticated, loading } = useSelector((state) => state.auth);
	const token = localStorage.getItem("token");

	useEffect(() => {
		if (token) {
			dispatch(getUserAdminProfile());
		}
	}, [dispatch]);

	if (loading) {
		return <PageLoader />;
	}

	if (!token || !isAuthenticated) {
		return <Navigate to={UNAUTHENTICATED_ROUTES.LOGIN} state={{ from: location }} replace />;
	}

	return <Outlet />;
};
