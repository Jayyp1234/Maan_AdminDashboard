import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import adminSlice from "./slices/adminSlice";
import appSlice from "./slices/appSlice";
import paymentSlice from "./slices/paymentSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[appSlice.name]: appSlice.reducer,
		[adminSlice.name]: adminSlice.reducer,
		[paymentSlice.name]: paymentSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["persist/PERSIST"],
			},
		}),
});
