import { useDispatch, useSelector } from "react-redux";
import { resetPasswordWithOtp } from "@/store/slices/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CustomInput } from "@/component/base/CustomInput";
import { twMerge } from "tailwind-merge";
import { actionBtnStyle, checkboxStyles } from "@/extras/commonstyles";
import CustomCodeInputs from "@/component/base/CustomCodeInputs";
import { IconWrapper } from "@/resources/icons";
import { VisibleEyeIcon, InvisibleEyeIcon } from "@/resources/icons";
import { RemeberPassword } from "../ForgotPassword";


export default function ForgotPasswordNew({ setStepperLevel, stepperLevel }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { resetPassword } = useSelector(state => state.auth);
	const [passwords, setPasswords] = useState({
		password: "",
		confirm_password: ""
	});
	const [passwordVisibility, setPasswordVisibility] = useState({
		password: false,
		confirm_password: false,
	});

	const handlePasswordToggle = (field) => {
		setPasswordVisibility(prev => ({
			...prev,
			[field]: !prev[field]
		}));
	};

	const handlePasswordChange = (e) => {
		const { name, value } = e.target;
		setPasswords(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleResetPassword = async () => {
		if (passwords.password !== passwords.confirm_password) {
			toast.error("Passwords don't match");
			return;
		}
		console.log(resetPassword.otp, resetPassword.email)
		try {
			await dispatch(resetPasswordWithOtp({
				email: resetPassword.email,
				otp: resetPassword.otp,
				password: passwords.password,
				password_confirmation: passwords.confirm_password
			})).unwrap();

			setStepperLevel(stepperLevel + 1);
		} catch (error) {
			toast.error(error || "Password reset failed");
		}
	};

	return (
		<>
			<div className="flex-grow flex flex-col gap-y-4 mb-16">
				<CustomInput
					id={"password"}
					label={"Password"}
					type={passwordVisibility.password ? "text" : "password"}
					name="password"
					value={passwords.password}
					onChange={handlePasswordChange}
					placeholder="Enter your password"
					inputClassName="h-12"
					showButton
					onButtonClick={() => handlePasswordToggle("password")}
					buttonChildren={
						<IconWrapper className="text-(--primary-clr)">
							{passwordVisibility.password ? <InvisibleEyeIcon /> : <VisibleEyeIcon />}
						</IconWrapper>
					}
				/>
				<CustomInput
					id={"confirm_password"}
					label={"Confirm password"}
					type={passwordVisibility.confirm_password ? "text" : "password"}
					name="confirm_password"
					value={passwords.confirm_password}
					onChange={handlePasswordChange}
					placeholder="Re-enter your password"
					inputClassName="h-12"
					showButton
					buttonChildren={
						<IconWrapper className="text-(--primary-clr)">
							{passwordVisibility.confirm_password ? <InvisibleEyeIcon /> : <VisibleEyeIcon />}
						</IconWrapper>
					}
					onButtonClick={() => handlePasswordToggle("confirm_password")}
				/>
			</div>
			<div className="mt-8">
				<button
					type="button"
					onClick={handleResetPassword}
					disabled={!passwords.password || !passwords.confirm_password}
					className={`${twMerge(actionBtnStyle, "rounded-sm h-13")}`}
				>
					<span className="text-base font-medium">Reset Password</span>
				</button>
				<RemeberPassword />
			</div>
		</>
	);
}