import React from "react";
import { labelStyle } from "../../extras/commonstyles";
import { twMerge } from "tailwind-merge";

export const CustomInput = ({
	label,
	id,
	value,
	onChange,
	placeholder = "",
	type = "text",
	required = false,
	className = "",
	inputClassName = "",
	showButton = false,
	buttonChildren = "",
	onButtonClick,
	buttonClassName = "",
	...props
}) => {
	return (
		<div className={`flex flex-col items-start ${twMerge("", className)}`}>
			{label && (
				<label htmlFor={id} className={`${twMerge(labelStyle)}`}>
					{label}
					{required && <sup className="text-emerald-600"> *</sup>}
				</label>
			)}
			<div className="relative flex items-center w-full">
				<input
					id={id}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					required={required}
					{...props}
					className={`${twMerge(
						"border border-stone-400/50 rounded-md px-3 py-2 h-12 w-full focus:outline-none ring-1 ring-transparent ring-offset-1 placeholder:text-sm focus:border-stone-400/50 focus:ring-(--primary-clr)",
						inputClassName
					)} ${showButton && "pr-14"}`}
				/>

				{showButton && (
					<button
						type="button"
						onClick={onButtonClick}
						className={`absolute top-1/2 -translate-y-1/2 right-2 text-slate-700 p-2 text-2xl rounded-full hover:bg-slate-100 bg-transparent ${twMerge(
							"flex items-center justify-center",
							buttonClassName
						)}`}>
						{buttonChildren}
					</button>
				)}
			</div>
		</div>
	);
};
