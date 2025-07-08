import { IconWrapper, LogoutIcon } from "@/resources/icons";
import { actionBtnStyle, labelStyle } from "@/extras/commonstyles";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/slices/authSlice";
import { toggleLogoutModal } from "@/store/slices/appSlice";
import { useState } from "react";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router";
import { UNAUTHENTICATED_ROUTES } from "../../routes/router";
import CustomModal from "./CustomModal";

export const LogoutModal = ({ isOpen }) => {
	const dispatch = useDispatch();
	const [isLoggingOut, setIsLoggingOut] = useState(false);
	const navigate = useNavigate();

	function closeModal() {
		dispatch(toggleLogoutModal(false));
	}

	const handleLogout = async () => {
		setIsLoggingOut(true);
		try {
			await dispatch(logoutUser()).unwrap();
			closeModal();

			navigate(UNAUTHENTICATED_ROUTES.LOGIN);
		} catch (error) {
			console.error("Logout failed:", error);
		} finally {
			setIsLoggingOut(false);
		}
	};

	return (
		<CustomModal isOpen={isOpen} onClose={closeModal} showCloseButton={false} header={false}>
			<div className="pt-10">
				<div className="text-(--primary-clr)">
					<IconWrapper className="text-[80px]">
						<LogoutIcon />
					</IconWrapper>
				</div>
				<div className="text-center flex flex-col mt-8 gap-y-6">
					<h4 className="text-xl font-semibold">Logout your Account?</h4>
					<p className="text-[.95rem] text-stone-600">
						Are you sure you want to logout your account? This action is irreversible and cannot be undone.
					</p>
				</div>
				<div className="grid grid-cols-2 gap-4 mt-14">
					<button
						type="button"
						onClick={closeModal}
						disabled={isLoggingOut}
						className={`h-12 rounded-full w-full p-4 bg-stone-200 flex items-center justify-center text-black ${
							isLoggingOut ? "opacity-50 cursor-not-allowed" : ""
						}`}>
						Cancel
					</button>
					<button
						type="button"
						onClick={handleLogout}
						disabled={isLoggingOut}
						className={`${actionBtnStyle} ${isLoggingOut ? "opacity-50 cursor-not-allowed" : ""}`}>
						{isLoggingOut ? <Spinner /> : "Yes, Logout"}
					</button>
				</div>
			</div>
		</CustomModal>
	);
};
