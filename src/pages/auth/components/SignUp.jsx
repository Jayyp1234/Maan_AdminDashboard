import React, { useState } from "react";
import { CustomInput } from "@/component/base/CustomInput";
import { IconWrapper, InvisibleEyeIcon, VisibleEyeIcon } from "@/resources/icons";
import { twMerge } from "tailwind-merge";
import { actionBtnStyle, labelStyle } from "@/extras/commonstyles";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";

export default function SignUp({ setStepperLevel, stepperLevel }) {
	const [passwordVisibility, setPasswordVisibility] = useState({
		password: false,
		confirm_password: false,
	});

	const handlePasswordToggle = (field) => {
		setPasswordVisibility((prev) => ({
			...prev,
			[field]: !prev[field],
		}));
	};

	const handleRegister = () => {
		setStepperLevel(stepperLevel + 1);
	};

	return (
		<>
			<div className="text-start flex flex-col flex-grow gap-y-3.5">
				<CustomInput id={"fullname"} label={"Fullname"} type="text" name="fullname" placeholder="Enter your fullname" inputClassName="h-12" />
				<div className="flex flex-col items-start">
					<label htmlFor="country" className={`${labelStyle}`}>
						Country of residence
					</label>
					<Select id="country">
						<SelectTrigger className="w-full border-stone-400/50 ring-1 ring-offset-1 ring-transparent !shadow-none data-[state=open]:border-stone-400/60 data-[state=open]:ring-(--primary-clr) !h-12">
							<SelectValue placeholder="Select your country" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="light">Light</SelectItem>
							<SelectItem value="dark">Dark</SelectItem>
							<SelectItem value="system">System</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<CustomInput id={"email"} label={"Email address"} type="text" name="email" placeholder="Enter your email address" inputClassName="h-12" />
				<CustomInput
					id={"phone"}
					label={"Phone number"}
					type="text"
					name="phone"
					pattern="[0-9]*"
					placeholder="Enter your fullname"
					inputMode="numeric"
					inputClassName="h-12"
				/>
				<CustomInput
					id={"password"}
					label={"Password"}
					type={passwordVisibility.password ? "text" : "password"}
					name="password"
					placeholder="Enter your password"
					inputClassName="h-12"
					showButton
					onButtonClick={() => handlePasswordToggle("password")}
					buttonChildren={<IconWrapper>{passwordVisibility.password ? <InvisibleEyeIcon /> : <VisibleEyeIcon />}</IconWrapper>}
				/>
				<CustomInput
					id={"confirm_password"}
					label={"Confirm password"}
					type={passwordVisibility.confirm_password ? "text" : "password"}
					name="confirm_password"
					placeholder="Re-enter your password"
					inputClassName="h-12"
					showButton
					buttonChildren={
						<IconWrapper>
							<IconWrapper>{passwordVisibility.confirm_password ? <InvisibleEyeIcon /> : <VisibleEyeIcon />}</IconWrapper>
						</IconWrapper>
					}
					onButtonClick={() => handlePasswordToggle("confirm_password")}
				/>
			</div>
			<div className="mt-8">
				<button type="button" onClick={handleRegister} className={`${twMerge(actionBtnStyle, "rounded-sm h-13")}`}>
					<span className="text-base font-medium">Next</span>
				</button>
			</div>
		</>
	);
}
