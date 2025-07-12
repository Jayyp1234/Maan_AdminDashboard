import { twMerge } from "tailwind-merge";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createStaff, resetCreateStaffState, resetUpdateStaffState, updateStaff } from "../../store/slices/adminSlice";
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
		admin_status: 0,
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
				admin_status: 0,
			});
		}
	}, [createSuccess, dispatch, setOpen]);

	const handleSubmit = async () => {
		for (const [key, value] of Object.entries(form)) {
			if (key !== "admin_status" && (!value || (typeof value === "string" && !value.trim()))) {
				const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
				toast.error(`${label} is required.`);
				return;
			}
		}
		try {
			const res = await dispatch(
				createStaff({
					firstName: form.firstName.trim(),
					lastName: form.lastName.trim(),
					phone: form.phone.trim(),
					email: form.email.trim(),
					password: form.password.trim(),
					admin_status: form.admin_status,
				})
			).unwrap();
			toast.success("Staff created successfully!");
			setInterval(() => window.location.reload(), 1500);
		} catch (error) {
			toast.error(error.mesage || "Failed to create staff.");
		}
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="max-w-lg">
				<DialogHeader>
					<DialogTitle className="text-lg font-semibold">Create New Staff</DialogTitle>
				</DialogHeader>
				{createError && <p className="text-sm text-red-600">{createError}</p>}
				<form className="space-y-3">
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

					<div className="flex items-center space-x-2 mt-4">
						<input
							id="is-active"
							type="checkbox"
							checked={form.admin_status === 1}
							onChange={(e) => setForm({ ...form, admin_status: e.target.checked ? 1 : 0 })}
							className="accent-emerald-600 w-5 h-5"
						/>
						<label htmlFor="is-active" className="text-sm font-medium">
							Active
						</label>
					</div>

					<DialogFooter className="mt-10">
						<button
							type="button"
							onClick={handleSubmit}
							className="py-2.5 px-4 text-sm text-white rounded-md bg-(--primary-clr)/80 hover:bg-(--primary-clr)"
							disabled={creating}>
							{creating ? "Creating..." : "Create Staff"}
						</button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}

export function EditAdminModal({ open, setOpen, staff }) {
	const dispatch = useDispatch();
	const { updating, updateSuccess, updateError } = useSelector((state) => state.admin.staff);
	const [showPassword, setShowPassword] = useState(false);

	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		password: "",
		admin_status: 1,
	});

	useEffect(() => {
		if (staff) {
			setForm({
				firstName: staff.firstName || "",
				lastName: staff.lastName || "",
				phone: staff.phone || "",
				email: staff.email || "",
				password: "",
				admin_status: `${staff.admin_status}` ?? "1",
			});
		}
	}, [staff]);

	useEffect(() => {
		if (updateSuccess) {
			toast.success("Staff updated successfully");
			setOpen(false);
			dispatch(resetUpdateStaffState());
		}
	}, [updateSuccess, dispatch, setOpen]);

	const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

	const handleSubmit = async () => {
		for (const [key, value] of Object.entries(form)) {
			if (key !== "password" && !String(value || "").trim()) {
				const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
				toast.error(`${label} is required.`);
				return;
			}
		}

		try {
			const payload = {
				id: staff.id,
				firstName: form.firstName.trim(),
				lastName: form.lastName.trim(),
				phone: form.phone.trim(),
				email: form.email.trim(),
				admin_status: form.admin_status,
			};

			if (form.password.trim()) {
				payload.password = form.password.trim();
			}

			await dispatch(updateStaff(payload)).unwrap();
			toast.success("Staff updated successfully!");
		} catch (error) {
			toast.error(error?.message || "Failed to update staff.");
		}
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="max-w-lg">
				<DialogHeader>
					<DialogTitle className="text-lg font-semibold">Edit Staff Member</DialogTitle>
				</DialogHeader>

				{updateError && <p className="text-sm text-red-600">{updateError}</p>}

				<form className="space-y-3">
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
						<label className="text-sm font-medium">
							Password <span className="text-xs text-gray-400">(Leave blank to keep existing)</span>
						</label>
						<CustomInput
							inputClassName={twMerge(inputStyle, "h-11")}
							type={showPassword ? "text" : "password"}
							value={form.password}
							onChange={(e) => setForm({ ...form, password: e.target.value })}
							showButton
							onButtonClick={togglePasswordVisibility}
							buttonChildren={<IconWrapper>{showPassword ? <VisibleEyeIcon /> : <InvisibleEyeIcon />}</IconWrapper>}
						/>
					</div>

					<div className="flex items-center space-x-2 mt-2">
						<input
							id="is-active"
							type="checkbox"
							checked={form.admin_status == 1}
							onChange={(e) => setForm({ ...form, admin_status: e.target.checked ? "1" : "0" })}
							className="accent-emerald-600 w-4 h-4"
						/>
						<label htmlFor="is-active" className="text-sm font-medium cursor-pointer">
							Active
						</label>
					</div>

					<DialogFooter className="mt-10">
						<button
							type="button"
							onClick={handleSubmit}
							className="bg-(--primary-clr)/80 hover:bg-(--primary-clr) text-white rounded-sm px-4 text-sm py-3"
							disabled={updating}>
							{updating ? "Updating..." : "Update Staff"}
						</button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}

export const ConfirmDialog = ({ open, onOpenChange, onConfirm, title, description, confirmText = "Confirm", confirmVariant = "default" }) => {
	const { deleting } = useSelector((state) => state.admin.staff);
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-md">
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
				</DialogHeader>
				<div className="py-4">
					<p className="text-sm text-gray-600">{description}</p>
				</div>
				<DialogFooter className="mt-4">
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						Cancel
					</Button>
					<Button variant={confirmVariant} disabled={deleting} className={"disabled:opacity-50 disabled:pointer-events-none"} onClick={onConfirm}>
						{deleting ? "Deleting..." : confirmText}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
