import { twMerge } from "tailwind-merge";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createStaff } from "../../store/slices/adminSlice";
import { toast } from "sonner";
import { CustomInput } from "./CustomInput";
import { inputStyle } from "../../extras/commonstyles";
import { IconWrapper, InvisibleEyeIcon, VisibleEyeIcon } from "../../resources/icons";

export default function AddAdminModal({ open, setOpen }) {
	const dispatch = useDispatch();

	const { creating, createSuccess, createError } = useSelector((state) => state.admin.staff);
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		password: "",
	});

	useEffect(() => {
		if (createSuccess) {
			toast.success("Staff created successfully");
			setOpen(false);
			dispatch(resetCreateStaffState());
			setForm({
				firstName: "",
				lastName: "",
				phone: "",
				email: "",
				password: "",
			});
		}
	}, [createSuccess, dispatch, setOpen]);

	const handleSubmit = () => {
		for (const [key, value] of Object.entries(form)) {
			if (!value.trim()) {
				const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
				toast.error(`${label} is required.`);
				return;
			}
		}

		// If all pass, dispatch with trimmed data
		dispatch(
			createStaff({
				firstName: form.firstName.trim(),
				lastName: form.lastName.trim(),
				phone: form.phone.trim(),
				email: form.email.trim(),
				password: form.password.trim(),
			})
		);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="max-w-lg">
				<DialogHeader>
					<DialogTitle className="text-lg font-semibold">Create New Staff</DialogTitle>
				</DialogHeader>
				{createError && <p className="text-sm text-red-600">{createError}</p>}
				<form onSubmit={handleSubmit} className="space-y-3">
					<div className="space-y-2">
						<label className="text-sm font-medium">First Name</label>
						<CustomInput
							inputClassName={twMerge(inputStyle, "h-11")}
							value={form.firstName}
							onChange={(e) => setForm({ ...form, firstName: e.target.value })}
							required
						/>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium">Last Name</label>
						<CustomInput
							inputClassName={twMerge(inputStyle, "h-11")}
							value={form.lastName}
							onChange={(e) => setForm({ ...form, lastName: e.target.value })}
							required
						/>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium">Phone</label>
						<CustomInput
							inputClassName={twMerge(inputStyle, "h-11")}
							value={form.phone}
							onChange={(e) => setForm({ ...form, phone: e.target.value })}
							required
						/>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium">Email</label>
						<CustomInput
							inputClassName={twMerge(inputStyle, "h-11")}
							type="email"
							value={form.email}
							onChange={(e) => setForm({ ...form, email: e.target.value })}
							required
						/>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium">Password</label>
						<CustomInput
							inputClassName={twMerge(inputStyle, "h-11")}
							type={showPassword ? "text" : "password"}
							value={form.password}
							onChange={(e) => setForm({ ...form, password: e.target.value })}
							required
							showButton
							onButtonClick={togglePasswordVisibility}
							buttonChildren={<IconWrapper>{showPassword ? <VisibleEyeIcon /> : <InvisibleEyeIcon />}</IconWrapper>}
						/>
					</div>

					{/* {createError && <p className="text-sm text-red-600">{createError}</p>} */}

					<DialogFooter className="mt-10">
						<Button type="submit" className="bg-(--primary-clr)/80 hover:bg-(--primary-clr)" disabled={creating}>
							{creating ? "Creating..." : "Create Staff"}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
