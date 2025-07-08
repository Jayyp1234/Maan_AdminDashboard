import { twMerge } from "tailwind-merge";
import { actionBtnStyle } from "@/extras/commonstyles";
import CustomCodeInputs from "@/component/base/CustomCodeInputs";
import { useState } from "react";

export default function VerifyRegisterSMS() {
	const [codes, setCodes] = useState("");

	const handleRegister = () => {};

	return (
		<>
			<div className="flex-grow">
				<div className="mb-10 mt-8">
					<h4 className="text-2xl font-semibold">Enter verification code</h4>
					<span className="text-sm text-stone-600">Enter the 6 digits codes you received in your SMS</span>
				</div>
				<CustomCodeInputs onChange={(value) => setCodes(value)} />
			</div>
			<div className="mt-14">
				<button type="button" onClick={handleRegister} className={`${twMerge(actionBtnStyle, "rounded-sm h-13")}`}>
					<span className="text-base font-medium">Next</span>
				</button>
			</div>
		</>
	);
}
