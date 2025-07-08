import React from "react";
import { images } from "@/resources/images";

export const AuthLayout = ({ children }) => {
	return (
		<div className="bg-(--primary-clr-light) py-16 min-h-screen relative isolate grid grid-cols-1 place-content-center">
			<div className="absolute inset-0 -z-1">
				<figure className="w-44 lg:w-64 aspect-square absolute top-0 right-0">
					<img src={images.layers.circle} alt="" className="w-full h-full" />
				</figure>
				<figure className="w-44 lg:w-64 aspect-square absolute bottom-0 left-0">
					<img src={images.layers.star} alt="" className="w-full h-full" />
				</figure>
			</div>
			<div className="relative px-4">{children}</div>
		</div>
	);
};
