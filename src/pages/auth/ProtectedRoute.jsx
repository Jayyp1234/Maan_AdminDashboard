import { useDispatch, useSelector } from "react-redux";
import { UNAUTHENTICATED_ROUTES } from "@/routes/router";
import { Navigate, Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { getUserDetails } from "../../store/slices/authSlice";
import PageLoader from "../../component/base/PageLoader";

export const ProtectedRoute = () => {
	const dispatch = useDispatch();
	const ignore = true;
	const { isAuthenticated, loading } = useSelector((state) => state.auth);
	const location = useLocation();

	useEffect(() => {
		dispatch(getUserDetails());
	}, []);

	if (loading) {
		return <PageLoader />;
	}

	// if (!isAuthenticated) {
	if (!ignore) {
		return <Navigate to={UNAUTHENTICATED_ROUTES.LOGIN} state={{ from: location }} replace />;
	}

	return <Outlet />;
};
