import { twMerge } from "tailwind-merge";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { checkboxStyles, inputStyle } from "../../extras/commonstyles";
import { Button } from "../../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function AddAdminModal({ open, setOpen }) {
	const dispatch = useDispatch();

	// const creating = useSelector((state) => state.smsGateway.creating);
	// const createSuccess = useSelector((state) => state.smsGateway.createSuccess);
	// const createError = useSelector((state) => state.smsGateway.createError);

	const [form, setForm] = useState({
		name: "",
		provider_class: "",
		is_active: true,
		settings: [
			{ key: "account_sid", value: "" },
			{ key: "auth_token", value: "" },
			{ key: "from_number", value: "" },
		],
	});

	// Close modal on success
	// useEffect(() => {
	// 	if (createSuccess) {
	// 		toast.success("Gateway added successfully");
	// 		setOpen(false);
	// 		// dispatch(resetCreateSuccess());
	// 		setForm({
	// 			name: "",
	// 			provider_class: "",
	// 			is_active: true,
	// 			settings: [
	// 				{ key: "account_sid", value: "" },
	// 				{ key: "auth_token", value: "" },
	// 				{ key: "from_number", value: "" },
	// 			],
	// 		});
	// 	}
	// }, [createSuccess]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// dispatch(createSmsGateway(form));
	};

	const updateSettingValue = (index, value) => {
		setForm((prev) => {
			const updated = [...prev.settings];
			updated[index].value = value;
			return { ...prev, settings: updated };
		});
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="max-w-lg">
				<DialogHeader>
					<DialogTitle className="text-lg font-semibold">Create New SMS Gateway</DialogTitle>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-2">
						<label className="text-sm font-medium">Name</label>
						<Input className={`${twMerge(inputStyle)}`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium">Provider Class</label>
						<Input
							className={`${twMerge(inputStyle)}`}
							value={form.provider_class}
							onChange={(e) => setForm({ ...form, provider_class: e.target.value })}
							required
						/>
					</div>

					<div className="flex items-center space-x-2">
						<Checkbox
							id="is-active"
							className={`${checkboxStyles}`}
							checked={form.is_active}
							onCheckedChange={(checked) => setForm({ ...form, is_active: !!checked })}
						/>
						<label htmlFor="is-active" className="text-sm">
							Active
						</label>
					</div>

					<div className="space-y-2">
						<label className="text-sm font-medium">Settings</label>
						<div className="flex flex-col gap-y-2 mt-4">
							{form.settings.map((setting, idx) => (
								<div key={setting.key} className="flex flex-col">
									<span className="text-sm text-gray-500">{setting.key}</span>
									<Input
										className={`${twMerge(inputStyle)}`}
										value={setting.value}
										onChange={(e) => updateSettingValue(idx, e.target.value)}
										required
									/>
								</div>
							))}
						</div>
					</div>

					{/* {createError && <p className="text-sm text-red-600">{createError}</p>} */}

					<DialogFooter className="mt-4">
						<Button type="submit" className="bg-(--primary-clr)/80 hover:bg-(--primary-clr)">
							Add Admin
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
