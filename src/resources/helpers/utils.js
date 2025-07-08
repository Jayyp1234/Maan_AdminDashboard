import { AUTHENTICATED_ROUTES } from "@/routes/router";

export const actionNames = {
	logout: "logout",
};

export const pagesForComponentVisibility = {
	// export modal
	exportAsModal: [
		AUTHENTICATED_ROUTES.userUpload,
		AUTHENTICATED_ROUTES.senders,
		AUTHENTICATED_ROUTES.business.index,
		AUTHENTICATED_ROUTES.transactions.index,
		AUTHENTICATED_ROUTES.userUpload,
	],
};
