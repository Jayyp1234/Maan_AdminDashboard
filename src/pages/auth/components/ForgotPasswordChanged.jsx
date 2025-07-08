import { useDispatch } from "react-redux";
import { clearResetPasswordState } from "@/store/slices/authSlice";
import { IconWrapper } from "@/resources/icons";
import { CheckShieldIcon } from "@/resources/icons";
import { UNAUTHENTICATED_ROUTES } from "@/routes/router";
import { twMerge } from "tailwind-merge";
import { actionBtnStyle } from "@/extras/commonstyles";
import { Link } from "react-router";

export default function ForgotPasswordChanged() {
	const dispatch = useDispatch();

	const handleLoginRedirect = () => {
		dispatch(clearResetPasswordState());
	};

	return (
		<>
			<div>
				<IconWrapper className="text-[200px] text-[#00801A]/60">
					<CheckShieldIcon />
				</IconWrapper>
			</div>
			<div className="text-center mt-4">
				<h4 className="text-2xl font-semibold">Password Changed!</h4>
				<p className="text-stone-600 mt-2">Your password has been changed successfully</p>
			</div>
			<div className="mt-10">
				<Link
					to={UNAUTHENTICATED_ROUTES.LOGIN}
					onClick={handleLoginRedirect}
					className={`${twMerge(actionBtnStyle, "rounded-sm h-13")}`}
				>
					<span className="text-base font-medium">Login</span>
				</Link>
			</div>
		</>
	);
}