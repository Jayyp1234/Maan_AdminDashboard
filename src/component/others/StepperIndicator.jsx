import { IconWrapper } from "../../resources/icons";

export default function StepperIndicator({ currentStep = 0, data = [] }) {
	return (
		<div className="flex items-center overflow-x-auto no-scroll justify-between gap-3 border-b mt-3 border-gray-300">
			{data.map((step, index) => {
				const isActive = index === currentStep;
				const gonePassedCurrentStepper = currentStep > index;
				return (
					<button
						key={step.title}
						disabled={!isActive}
						className={`w-full flex justify-center items-center disabled:opacity-60 disabled:cursor-not-allowed text-sm border-b ${
							isActive || gonePassedCurrentStepper
								? "text-(--primary-clr) border-(--primary-clr) font-bold"
								: "text-gray-500 border-b-transparent font-medium"
						}`}>
						<div className="flex items-center space-x-2 py-3">
							<IconWrapper className="text-xl">{isActive || gonePassedCurrentStepper ? <step.activeIcon /> : <step.inactiveIcon />}</IconWrapper>
							<span className="capitalize text-nowrap">{step.title}</span>
						</div>
					</button>
				);
			})}
		</div>
	);
}
