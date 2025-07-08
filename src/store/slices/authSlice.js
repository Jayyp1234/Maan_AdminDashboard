import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../api/auth";

export const loginUser = createAsyncThunk("admin/login", async ({ email, password }, { rejectWithValue }) => {
	try {
		const response = await authAPI.login(email, password);
		localStorage.setItem("token", response.data.token);
		localStorage.setItem("user", JSON.stringify(response.data.admin));
		return response.data;
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

export const registerUser = createAsyncThunk("auth/register", async (userData, { rejectWithValue }) => {
	try {
		const response = await authAPI.register(userData);
		localStorage.setItem("token", response.token);
		localStorage.setItem("user", JSON.stringify(response.user));
		return response;
	} catch (error) {
		return rejectWithValue(error.response?.data?.message || "Registration failed");
	}
});

export const sendResetOtp = createAsyncThunk("admin/send-reset-otp", async (email, { rejectWithValue }) => {
	try {
		const response = await authAPI.sendResetOtp(email);
		return response;
	} catch (error) {
		return rejectWithValue(error.response?.data?.message || error.response?.data?.error || "Failed to send OTP");
	}
});

export const verifyResetOtp = createAsyncThunk("auth/verifyResetOtp", async ({ email, otp }, { rejectWithValue }) => {
	try {
		const response = await authAPI.verifyResetOtp(email, otp);
		return response;
	} catch (error) {
		return rejectWithValue(error.response?.data?.message || error.response?.data?.error || "Invalid OTP");
	}
});

export const resetPasswordWithOtp = createAsyncThunk(
	"auth/resetPasswordWithOtp",
	async ({ email, otp, password, password_confirmation }, { rejectWithValue }) => {
		try {
			const response = await authAPI.resetPasswordWithOtp(email, otp, password, password_confirmation);
			return response;
		} catch (error) {
			return rejectWithValue(error.response?.data?.message || error.response?.data?.error || "Password reset failed");
		}
	}
);

export const logoutUser = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
	try {
		await authAPI.logout();
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		return {};
	} catch (error) {
		// Even if logout fails on server, clear local storage (because i dont have an endpoint for logout)
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		return {};
	}
});

export const verifyToken = createAsyncThunk("auth/verifyToken", async (_, { rejectWithValue }) => {
	try {
		const token = localStorage.getItem("token");
		if (!token) {
			throw new Error("No token found");
		}
		const response = await authAPI.verifyToken(token);
		return response;
	} catch (error) {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		return rejectWithValue("Token verification failed");
	}
});

export const getUserDetails = createAsyncThunk("auth/getUserDetails", async (_, { rejectWithValue }) => {
	try {
		const token = localStorage.getItem("token");
		if (!token) {
			return rejectWithValue("No authentication token found");
		}
		const { data } = await authAPI.getUserDetails();
		localStorage.setItem("user", JSON.stringify(data));
		return data;
	} catch (error) {
		return rejectWithValue(error.response?.data?.message || "Failed to fetch user details");
	}
});

const initialState = {
	user: null,
	token: localStorage.getItem("token") || null,
	isAuthenticated: !!localStorage.getItem("token"),
	loading: false,
	error: null,
	resetPassword: {
		loading: false,
		step: null,
		email: null,
		otp: null,
		otpVerified: false,
		error: null,
	},
};

const authSlice = createSlice({
	name: "auth",
	initialState,

	reducers: {
		clearError: (state) => {
			state.error = null;
		},

		setCredentials: (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isAuthenticated = true;
		},
		clearCredentials: (state) => {
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
			localStorage.removeItem("token");
			localStorage.removeItem("user");
		},
		setResetPasswordStep: (state, action) => {
			state.resetPassword.step = action.payload;
		},
		clearResetPasswordState: (state) => {
			state.resetPassword = {
				loading: false,
				step: null,
				email: null,
				otpVerified: false,
				error: null,
			};
		},
	},
	extraReducers: (builder) => {
		builder
			// Login
			.addCase(loginUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isAuthenticated = true;
				state.error = null;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.isAuthenticated = false;
			})
			// Register
			.addCase(registerUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isAuthenticated = true;
				state.error = null;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.isAuthenticated = false;
			})
			// Logout
			.addCase(logoutUser.fulfilled, (state) => {
				state.user = null;
				state.token = null;
				state.isAuthenticated = false;
				state.loading = false;
				state.error = null;
			})
			// Verify Token
			.addCase(verifyToken.pending, (state) => {
				state.loading = true;
			})
			.addCase(verifyToken.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload.user;
				state.isAuthenticated = true;
			})
			.addCase(verifyToken.rejected, (state) => {
				state.loading = false;
				state.user = null;
				state.token = null;
				state.isAuthenticated = false;
			})
			.addCase(sendResetOtp.pending, (state) => {
				state.resetPassword.loading = true;
				state.resetPassword.error = null;
			})
			.addCase(sendResetOtp.fulfilled, (state, action) => {
				state.resetPassword.loading = false;
				state.resetPassword.step = "verify-otp";
				state.resetPassword.email = action.meta.arg;
			})
			.addCase(sendResetOtp.rejected, (state, action) => {
				state.resetPassword.loading = false;
				state.resetPassword.error = action.payload;
			})

			// Verify OTP
			.addCase(verifyResetOtp.pending, (state) => {
				state.resetPassword.loading = true;
				state.resetPassword.error = null;
			})
			.addCase(verifyResetOtp.fulfilled, (state) => {
				state.resetPassword.loading = false;
				state.resetPassword.step = "reset-password";
				state.resetPassword.otpVerified = true;
			})
			.addCase(verifyResetOtp.rejected, (state, action) => {
				state.resetPassword.loading = false;
				state.resetPassword.error = action.payload;
			})

			// Reset Password
			.addCase(resetPasswordWithOtp.pending, (state) => {
				state.resetPassword.loading = true;
				state.resetPassword.error = null;
			})
			.addCase(resetPasswordWithOtp.fulfilled, (state) => {
				state.resetPassword.loading = false;
				state.resetPassword.step = "complete";
			})
			.addCase(resetPasswordWithOtp.rejected, (state, action) => {
				state.resetPassword.loading = false;
				state.resetPassword.error = action.payload;
			})
			// get user details
			.addCase(getUserDetails.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getUserDetails.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
				state.isAuthenticated = true;
				state.error = null;
			})
			.addCase(getUserDetails.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const { clearError, setCredentials, clearCredentials, clearResetPasswordState, setResetPasswordStep } = authSlice.actions;
export default authSlice.reducer;
