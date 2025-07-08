import { CustomInput } from "@/component/base/CustomInput";
import { twMerge } from "tailwind-merge";
import { actionBtnStyle } from "@/extras/commonstyles";

export default function VerifyRegisterEmail({ setStepperLevel, stepperLevel }) {
	const handleRegister = () => {
		setStepperLevel(stepperLevel + 1);
	};

	return (
		<>
			<div className="flex-grow">
				<CustomInput id={"email"} label={"Email address"} type="text" name="email" placeholder="Enter your email address" inputClassName="h-12" />
				<div className="text-end mt-0.5">
					<span className="text-sm text-stone-600">
						Didn't receive any code?{" "}
						<button type="button" className="font-semibold text-(--primary-clr)">
							Resend it
						</button>
					</span>
				</div>
			</div>
			<div className="mt-14 flex flex-col gap-y-5 text-center">
				<button type="button" onClick={handleRegister} className={`${twMerge(actionBtnStyle, "rounded-sm h-13")}`}>
					<span className="text-base font-medium">Next</span>
				</button>
				<span className="text-sm text-stone-600">Your trusted partner for fast and secure international money transfers</span>
			</div>
		</>
	);
}
