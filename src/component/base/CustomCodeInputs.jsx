import React, { useRef, useState, useEffect } from "react";
import { CustomInput } from "./CustomInput";

export default function CustomCodeInputs({ onChange, autoFocus = true, className = "", defaultLength = 6 }) {
	const [code, setCode] = useState(() => Array(defaultLength).fill(""));
	const inputRefs = useRef([]);

	useEffect(() => {
		if (autoFocus && inputRefs.current[0]) {
			inputRefs.current[0].focus();
		}
	}, [autoFocus]);

	const handleChange = (e, index) => {
		const value = e.target.value;
		if (/^\d?$/.test(value)) {
			const newCode = [...code];
			newCode[index] = value;
			setCode(newCode);
			onChange?.(newCode.join(""));

			if (value && index < defaultLength - 1) {
				inputRefs.current[index + 1]?.focus();
			}
		}
	};

	const handleKeyDown = (e, index) => {
		if (e.key === "Backspace" && code[index] === "" && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	const handlePaste = (e) => {
		e.preventDefault();
		const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, defaultLength);
		const newCode = pasted.split("");
		while (newCode.length < defaultLength) newCode.push("");
		setCode(newCode);
		onChange?.(newCode.join(""));

		newCode.forEach((digit, idx) => {
			if (inputRefs.current[idx]) {
				inputRefs.current[idx].value = digit;
			}
		});
	};

	return (
		<div className={`flex gap-2 justify-center ${className}`} onPaste={handlePaste}>
			{code.map((value, index) => (
				<CustomInput
					key={index}
					type="text"
					pattern="[0-9]*"
					inputMode="numeric"
					maxLength={1}
					value={value}
					ref={(el) => (inputRefs.current[index] = el)}
					onChange={(e) => handleChange(e, index)}
					onKeyDown={(e) => handleKeyDown(e, index)}
					inputClassName="h-12 max-w-12 aspect-square border font-bold border-gray-300 rounded-md text-center text-2xl focus:outline-none focus:border-stone-400"
				/>
			))}
		</div>
	);
}
