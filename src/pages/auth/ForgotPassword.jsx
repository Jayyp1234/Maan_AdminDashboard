import React, { useState } from "react";
import { AuthLayout } from "@/component/layouts/AuthLayout";
import StepperIndicator from "@/component/others/StepperIndicator";
import { UNAUTHENTICATED_ROUTES } from "@/routes/router";
import { forgotPasswordStepperIndicator, forgotPasswordStepperTitleTexts } from "@/resources/data";
import ForgotPasswordEmail from "./components/ForgotPasswordEmail";
import ForgotPasswordEnterCode from "./components/ForgotPasswordEnterCode";
import ForgotPasswordChanged from "./components/ForgotPasswordChanged";
import ForgotPasswordNew from "./components/ForgotPasswordNew";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

export default function ForgotPassword() {
	const [stepperLevel, setStepperLevel] = useState(0);
	const { loading } = useSelector(state => state.auth.resetPassword);
	const currentStepperTitle = forgotPasswordStepperTitleTexts[stepperLevel];

	return (
		<AuthLayout>
			<div className="max-w-lg mx-auto">
				<main className="bg-white rounded-lg flex flex-col gap-y-8 overflow-hidden shadow-2xl p-5 sm:px-8 sm:pt-5 sm:pb-8 md:px-10 min-h-[450px] mt-8">
					<div className="text-center flex-grow flex flex-col justify-between">
						<div>
							<div className={`flex flex-col items-center text-center gap-y-4 pb-5 ${stepperLevel < 3 && "border-b border-(--primary-clr)/60"}`}>
								<h4 className="capitalize font-bold text-3xl">{currentStepperTitle.title}</h4>
								<span className="text-stone-600 text-pretty text-sm">{currentStepperTitle.subtitle}</span>
							</div>
							{stepperLevel < 3 && <StepperIndicator data={forgotPasswordStepperIndicator} currentStep={stepperLevel} />}
						</div>
						<main className="mt-5">
							{stepperLevel === 0 && <ForgotPasswordEmail setStepperLevel={setStepperLevel} stepperLevel={stepperLevel} />}
							{stepperLevel === 1 && <ForgotPasswordEnterCode setStepperLevel={setStepperLevel} stepperLevel={stepperLevel} />}
							{stepperLevel === 2 && <ForgotPasswordNew setStepperLevel={setStepperLevel} stepperLevel={stepperLevel} />}
							{stepperLevel === 3 && <ForgotPasswordChanged setStepperLevel={setStepperLevel} stepperLevel={stepperLevel} />}
						</main>
					</div>
				</main>
			</div>
		</AuthLayout>
	);
}

export const RemeberPassword = () => (
	<div className="text-center mt-5">
		<span className="text-sm text-stone-600">
			Remember Password?{" "}
			<Link to={UNAUTHENTICATED_ROUTES.LOGIN} className="font-semibold text-(--primary-clr)">
				Login
			</Link>
		</span>
	</div>
);
