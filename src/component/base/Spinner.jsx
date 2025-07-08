import React from "react";
import clsx from "clsx";

const sizeMap = {
	sm: "w-4 h-4",
	md: "w-6 h-6",
	lg: "w-8 h-8",
	xl: "w-12 h-12",
};

export const Spinner = ({ size = "md", className = "" }) => {
	return (
		<svg viewBox="25 25 50 50" className={clsx("text-gray-600 v-spinner", sizeMap[size], className)}>
			<circle r="20" cy="50" cx="50" className="stroke-current stroke-[4] fill-none" />
		</svg>
	);
};
