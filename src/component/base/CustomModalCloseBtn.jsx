import { CloseIcon, IconWrapper } from "@/resources/icons";

const CustomModalCloseBtn = ({ handleClick }) => {
	return (
		<>
			<div className="flex gap-2.5 items-center">
				<button
					type="button"
					onClick={handleClick}
					className="bg-red-100 hover:bg-red-200/80 duration-300 ease-in-out text-emerald-500 p-1.5 rounded-md">
					<IconWrapper className="text-lg">
						<CloseIcon />
					</IconWrapper>
				</button>
			</div>
		</>
	);
};

export default CustomModalCloseBtn;
