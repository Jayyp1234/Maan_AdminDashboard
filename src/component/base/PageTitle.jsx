export const PageTitle = ({ title = "No Name" }) => {
	return (
		<div className="text-start">
			<h4 className="font-semibold text-2xl">{title}</h4>
		</div>
	);
};
