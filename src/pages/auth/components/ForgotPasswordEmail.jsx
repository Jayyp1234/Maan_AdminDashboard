import { useDispatch } from "react-redux";
import { sendResetOtp } from "@/store/slices/authSlice";
import { toast } from "sonner";
import { useState } from "react";
import { CustomInput } from "@/component/base/CustomInput";
import { twMerge } from "tailwind-merge";
import { actionBtnStyle, checkboxStyles } from "@/extras/commonstyles";
import { RemeberPassword } from "../ForgotPassword";

export default function ForgotPasswordEmail({ setStepperLevel, stepperLevel }) {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");

	const handleSendOtp = async () => {
		const toastId = toast.loading("Sending OTP...");
		try {
			const resultAction = await dispatch(sendResetOtp(email)).unwrap();
			setStepperLevel(stepperLevel + 1);
			toast.success("If the email is correct, You will get OTP", { id: toastId });
		} catch (error) {
			toast.error(error.payload || "Failed to send OTP", { id: toastId });

		}
	};

	return (
		<>
			<div className="flex-grow flex flex-col justify-between">
				<CustomInput
					id={"email"}
					label={"Email address"}
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter your email address"
					inputClassName="h-12"
				/>
			</div>
			<div className="mt-14 flex flex-col gap-y-5 text-center">
				<button
					type="button"
					onClick={handleSendOtp}
					disabled={!email}
					className={`${twMerge(actionBtnStyle, "rounded-sm h-13")}`}
				>
					<span className="text-base font-medium">Send Code</span>
				</button>
				<RemeberPassword />
			</div>
		</>
	);
}