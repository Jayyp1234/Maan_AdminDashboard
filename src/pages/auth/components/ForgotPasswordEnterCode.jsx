import { useDispatch, useSelector } from "react-redux";
import { verifyResetOtp } from "@/store/slices/authSlice";
import { toast } from "sonner";
import { useState } from "react";
import { CustomInput } from "@/component/base/CustomInput";
import { twMerge } from "tailwind-merge";
import { actionBtnStyle, checkboxStyles } from "@/extras/commonstyles";
import CustomCodeInputs from "@/component/base/CustomCodeInputs";



export default function ForgotPasswordEnterCode({ setStepperLevel, stepperLevel }) {
	const dispatch = useDispatch();
	const { resetPassword } = useSelector(state => state.auth);
	const [otp, setOtp] = useState("");

	const handleVerifyOtp = async () => {
		try {
			await dispatch(verifyResetOtp({
				email: resetPassword.email,
				otp
			})).unwrap();
			setStepperLevel(stepperLevel + 1);
		} catch (error) {
			toast.error(error || "Invalid OTP code");
		}
	};

	return (
		<>
			<div className="flex-grow">
				<div className="mb-10 mt-8">
					<h4 className="text-2xl font-semibold">Enter verification code</h4>
					<span className="text-sm text-stone-600">Enter the 6 digits codes you received in your SMS</span>
				</div>
				<CustomCodeInputs
					onChange={(value) => setOtp(value)}
					length={6} // Ensure this matches your OTP length
				/>
			</div>
			<div className="mt-14">
				<button
					type="button"
					onClick={handleVerifyOtp}
					disabled={otp.length < 6}
					className={`${twMerge(actionBtnStyle, "rounded-sm h-13")}`}
				>
					<span className="text-base font-medium">Next</span>
				</button>
			</div>
		</>
	);
}