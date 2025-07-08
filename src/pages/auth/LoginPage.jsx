import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { loginUser } from "@/store/slices/authSlice";
import { AuthLayout } from "@/component/layouts/AuthLayout";
import { images } from "@/resources/images";
import { IconWrapper, InvisibleEyeIcon, VisibleEyeIcon } from "@/resources/icons";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { actionBtnStyle, checkboxStyles } from "@/extras/commonstyles";
import { Spinner } from "@/component/base/Spinner";
import { twMerge } from "tailwind-merge";
import { CustomInput } from "../../component/base/CustomInput";
import { UNAUTHENTICATED_ROUTES } from "../../routes/router";

export const LoginPage = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		rememberMe: false,
	});
	const [showPassword, setShowPassword] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading } = useSelector((state) => state.auth);

	const handlePasswordToggle = () => {
		setShowPassword((prev) => !prev);
	};

	const handleInputChange = (e) => {
		const { name, value, type, checked, attributes } = e.target;

		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Show loading toast
		const toastId = toast.loading("Signing in...");

		try {
			const resultAction = await dispatch(
				loginUser({
					email: formData.email,
					password: formData.password,
				})
			);

			if (loginUser.fulfilled.match(resultAction)) {
				// Success toast
				toast.success("Login successful!", { id: toastId });
				navigate("/dashboard");
			} else {
				// Error toast with message from server
				const errorMessage = resultAction.payload;
				toast.error(errorMessage, { id: toastId });
			}
		} catch (err) {
			// Unexpected error toast
			toast.error("An unexpected error occurred", { id: toastId });
			console.error("Login error:", err);
		}
	};

	return (
		<AuthLayout>
			<div className="max-w-lg mx-auto">
				<header className="flex flex-col items-center text-center gap-y-6">
					<figure className="w-20">
						<img src={images.logos.logo} alt="" />
					</figure>
					<div>
						<p>Welcome to Admin Panel</p>
					</div>
				</header>
				<main className="bg-white rounded-lg flex flex-col gap-y-8 overflow-hidden shadow-2xl p-5 sm:px-8 sm:pt-5 sm:pb-8 min-h-[450px] mt-5">
					<form onSubmit={handleSubmit} className="text-center flex-grow flex flex-col">
						<div>
							<h4 className="capitalize font-semibold text-3xl">Sign in</h4>
							<div className="space-y-4 mt-8">
								<div className="relative">
									<CustomInput
										id="email"
										type="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										placeholder="Enter your email address"
										required
									/>
								</div>
								<div>
									<CustomInput
										id="password"
										type={showPassword ? "text" : "password"}
										showButton
										name="password"
										value={formData.password}
										onChange={handleInputChange}
										placeholder="Enter your password"
										required
										onButtonClick={handlePasswordToggle}
										buttonChildren={<IconWrapper>{showPassword ? <InvisibleEyeIcon /> : <VisibleEyeIcon />}</IconWrapper>}
									/>
								</div>

								<div className="flex items-center justify-between gap-8">
									<div className="flex items-center gap-1.5">
										<Checkbox
											id="rememberMe"
											name="rememberMe"
											checked={formData.rememberMe}
											onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, rememberMe: checked }))}
											className={`${checkboxStyles}`}
										/>
										<label htmlFor="rememberMe" name="rememberMe" className="leading-tight cursor-pointer text-stone-600 text-sm">
											Remember me
										</label>
									</div>
									<Link to={UNAUTHENTICATED_ROUTES.FORGOT_PASSWORD} className="text-(--primary-clr) text-sm font-semibold">
										Forgot Password
									</Link>
								</div>
							</div>
						</div>
						<div className="mt-auto">
							<button type="submit" disabled={loading} className={`${twMerge(actionBtnStyle, "rounded-md text-[1.05rem] font-medium h-13")}`}>
								{loading ? <Spinner /> : <span>Login</span>}
							</button>
							{/* <div className="text-center mt-4 hidden">
								<span className="text-[.9rem]">
									Don't have an account?{" "}
									<Link to="/register" className="text-(--primary-clr) font-medium">
										Register
									</Link>
								</span>
							</div> */}
						</div>
					</form>
				</main>
			</div>
		</AuthLayout>
	);
};
