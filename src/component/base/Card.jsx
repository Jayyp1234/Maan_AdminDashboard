import { IconWrapper } from "@/resources/icons";
import { Skeleton } from "../../components/ui/skeleton";

const statusMap = {
	all: "text-slate-600",
	pending: "text-yellow-600",
	verified: "text-green-600",
	blocked: "text-red-600",
};

export const Card = ({ cardTitle = "", value = "", status = "all", icon = null, isLoading }) => {
	return (
		<div className="bg-white rounded-lg flex justify-between p-6 pt-5 shadow-xs flex-col gap-y-8">
			<span className="text-slate-600 tracking-tight text-[.9rem] font-medium capitalize text-balance">{cardTitle}</span>
			{isLoading ? (
				<Skeleton className={"w-full bg-slate-100 h-10"} />
			) : (
				<div className="flex items-center justify-between gap-5">
					<h3 className="font-semibold tracking-wide text-3xl" dangerouslySetInnerHTML={{ __html: value }} />
					{icon && <IconWrapper className={`text-3xl ${statusMap[status.toLocaleLowerCase()]}`}>{icon}</IconWrapper>}
				</div>
			)}
		</div>
	);
};
