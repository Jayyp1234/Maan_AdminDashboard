import React from "react";
import { images } from "@/resources/images";
import { HomeIcon, IconWrapper } from "../../resources/icons";
import { actionBtnStyle } from "../../extras/commonstyles";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router";

export default function PageNotFound() {
	const navigate = useNavigate();

	return (
		<div className="">
			<section className="grid grid-cols-1 lg:grid-cols-[1.5fr_3fr] h-screen">
				<aside className="hidden bg-white lg:flex px-4 items-center justify-center">
					<figure className="flex items-center justify-center max-w-52">
						<img src={images.logos.favicon} alt="logo favicon" className="w-full h-full" />
					</figure>
				</aside>
				<aside className="bg-(--primary-clr-light) grid place-content-center">
					<div>
						<figure className="max-w-96 mx-auto">
							<img src={images.svgs._404} alt="" className="w-full h-full" />
						</figure>
						<div>
							<h4 className="text-xl font-semibold">The page you are looking for does, not exist!</h4>
						</div>
						<div className="mt-5 flex items-center justify-center">
							<button
								type="button"
								onClick={() => navigate(-1, { replace: true })}
								className={`${twMerge(actionBtnStyle, "rounded-lg w-auto")} gap-2 px-8`}>
								<IconWrapper className="text-xl">
									<HomeIcon />
								</IconWrapper>
								<span className="font-semibold">Go Back</span>
							</button>
						</div>
					</div>
				</aside>
			</section>
		</div>
	);
}
