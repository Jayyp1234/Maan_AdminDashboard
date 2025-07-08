import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sidebarOpen: false,
	logoutModalOpen: false,
	exportDownloadFileOpen: false,
	currentPage: "dashboard",
	theme: "light",
	notifications: [],
	loading: false,
};

const uiSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		toggleSidebar: (state) => {
			state.sidebarOpen = !state.sidebarOpen;
		},
		toggleLogoutModal: (state, action) => {
			state.logoutModalOpen = action.payload;
		},
		toggleExportDownloadModal: (state, action) => {
			state.exportDownloadFileOpen = action.payload;
		},
		logout: (state, action) => {
			console.log("logged out");
		},
		setSidebarOpen: (state, action) => {
			state.sidebarOpen = action.payload;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
		toggleTheme: (state) => {
			state.theme = state.theme === "light" ? "dark" : "light";
		},
		setTheme: (state, action) => {
			state.theme = action.payload;
		},
		addNotification: (state, action) => {
			state.notifications.push({
				id: Date.now(),
				...action.payload,
			});
		},
		removeNotification: (state, action) => {
			state.notifications = state.notifications.filter((notification) => notification.id !== action.payload);
		},
		clearNotifications: (state) => {
			state.notifications = [];
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

export const {
	toggleSidebar,
	setSidebarOpen,
	setCurrentPage,
	toggleTheme,
	setTheme,
	addNotification,
	removeNotification,
	clearNotifications,
	setLoading,
	toggleLogoutModal,
	logout,
	toggleExportDownloadModal,
} = uiSlice.actions;

export default uiSlice.reducer;
