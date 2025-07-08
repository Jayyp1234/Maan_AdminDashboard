import React, { useState } from "react";
import { AuthLayout } from "../../component/layouts/AuthLayout";
import { images } from "../../resources/images";
import StepperIndicator from "../../component/others/StepperIndicator";
import { registerStepperIndicator, registerStepperTitleTexts } from "../../resources/data";
import SignUp from "./components/SignUp";
import VerifyRegisterEmail from "./components/VerifyRegisterEmail";
import VerifyRegisterSMS from "./components/VerifyRegisterSMS";
import { Link } from "react-router-dom";
import { UNAUTHENTICATED_ROUTES } from "../../routes/router";

export default function RegisterPage() {
	const [stepperLevel, setStepperLevel] = useState(0);
	const currentStepperTitle = registerStepperTitleTexts[stepperLevel];

	return (
		<AuthLayout>
			<div className="max-w-lg mx-auto">
				<header className="flex flex-col items-center text-center gap-y-6">
					<figure className="w-36">
						<img src={images.logos.logo} alt="" />
					</figure>
					<div>
						<p>Welcome to Admin Panel</p>
					</div>
				</header>
				<main className="bg-white rounded-lg flex flex-col gap-y-8 overflow-hidden shadow-2xl p-5 sm:px-8 sm:pt-5 sm:pb-8 md:px-10 min-h-[450px] mt-8">
					<div className="text-center flex-grow flex flex-col">
						<div>
							<div className="flex flex-col items-center text-center gap-y-4 border-b pb-5 border-(--primary-clr)/60">
								<h4 className="capitalize font-bold text-3xl">{currentStepperTitle.title}</h4>
								<span className="text-stone-600">{currentStepperTitle.subtitle}</span>
							</div>
							<div className="my-5">
								<p className="text-sm">
									You already have an account?{" "}
									<Link to={UNAUTHENTICATED_ROUTES.LOGIN} className="font-semibold text-(--primary-clr)">
										Sign-in here
									</Link>
								</p>
							</div>
							<StepperIndicator data={registerStepperIndicator} currentStep={stepperLevel} />
						</div>
						<main className="mt-5">
							{stepperLevel === 0 && <SignUp setStepperLevel={setStepperLevel} stepperLevel={stepperLevel} />}
							{stepperLevel === 1 && <VerifyRegisterEmail setStepperLevel={setStepperLevel} stepperLevel={stepperLevel} />}
							{stepperLevel === 2 && <VerifyRegisterSMS />}
						</main>
					</div>
				</main>
			</div>
		</AuthLayout>
	);
}
