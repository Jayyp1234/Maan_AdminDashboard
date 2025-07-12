import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import { apiClient } from "../../utils/apiInterceptor";

export const getAllVendorsAdminDashboard = createAsyncThunk("vendorsDashboard/getAll", async (_, { rejectWithValue }) => {
	try {
		const data = await apiClient.get(API_ENDPOINTS.GET_ALL_VENDORS);
		return data;
	} catch (error) {
		return rejectWithValue(error.message || "Failed to fetch vendors dashboard");
	}
});

export const createStaff = createAsyncThunk("admin/createStaff", async (staffData, { rejectWithValue }) => {
	try {
		const response = await apiClient.post(API_ENDPOINTS.CREATE_ADMIN, staffData);
		console.log(response);
		return;
		return response;
	} catch (error) {
		return rejectWithValue(error.response?.data?.message || error.message || "Failed to create staff");
	}
});

export const updateStaff = createAsyncThunk("staff/update", async (staffData, { rejectWithValue }) => {
	try {
		const response = await apiClient.patch(API_ENDPOINTS.MODIFY_STAFF(staffData.id), staffData);
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response?.data?.message || error.message || "Failed to update staff.");
	}
});

export const deleteStaff = createAsyncThunk("staff/delete", async (staffId, { rejectWithValue }) => {
	try {
		await apiClient.delete(API_ENDPOINTS.MODIFY_STAFF(staffId));
		return staffId;
	} catch (error) {
		return rejectWithValue(error.response?.data?.message || error.message || "Failed to delete staff.");
	}
});

export const getAllStaffsAdminDashboard = createAsyncThunk("staffDashboard/getAll", async (_, { rejectWithValue }) => {
	try {
		const data = await apiClient.get(API_ENDPOINTS.GET_ALL_STAFFS);
		return data;
	} catch (error) {
		return rejectWithValue(error.response?.data?.message || error.message || "Failed to fetch staff dashboard");
	}
});

export const adminSlice = createSlice({
	name: "admin",
	initialState: {
		vendors: {
			list: [],
			filtered: [],
			search: "",
			loading: false,
			error: null,
			pagination: {
				current_page: 1,
				per_page: 10,
			},
			stats: {},
		},
		staff: {
			creating: false,
			createSuccess: false,
			createError: null,

			updating: false,
			updateSuccess: false,
			updateError: null,

			deleting: false,
			deleteSuccess: false,
			deleteError: null,

			list: [],
			filtered: [],
			search: "",
			loading: false,
			error: null,
			pagination: {
				current_page: 1,
				per_page: 10,
			},
			stats: {},
		},
	},
	reducers: {
		setVendorSearch: (state, action) => {
			state.vendors.search = action.payload;
			state.vendors.pagination.current_page = 1;
			adminSlice.caseReducers.applyVendorFilters(state);
		},
		setVendorCurrentPage: (state, action) => {
			state.vendors.pagination.current_page = action.payload;
		},
		setVendorPerPage: (state, action) => {
			state.vendors.pagination.per_page = action.payload;
		},
		applyVendorFilters: (state) => {
			const search = state.vendors.search.toLowerCase().trim();

			if (!search) {
				state.vendors.filtered = state.vendors.list;
			} else {
				const fieldsToSearch = ["applicant_name", "business_name", "email_address", "nominator_email"];

				state.vendors.filtered = state.vendors.list.filter((vendor) => fieldsToSearch.some((field) => vendor[field]?.toLowerCase().includes(search)));
			}
		},
		resetCreateStaffState: (state) => {
			state.staff.creating = false;
			state.staff.createSuccess = false;
			state.staff.createError = null;
		},
		resetDeleteStaffState: (state) => {
			state.staff.deleting = false;
			state.staff.deleteSuccess = false;
			state.staff.deleteError = null;
		},
		setStaffSearch: (state, action) => {
			state.staff.search = action.payload;
			state.staff.pagination.current_page = 1;
			adminSlice.caseReducers.applyStaffFilters(state);
		},
		resetUpdateStaffState: (state) => {
			state.staff.updating = false;
			state.staff.updateSuccess = false;
			state.staff.updateError = null;
		},
		applyStaffFilters: (state) => {
			const search = state.staff.search.toLowerCase().trim();
			if (!search) {
				state.staff.filtered = state.staff.list;
			} else {
				state.staff.filtered = state.staff.list.filter((staff) => {
					return (
						staff.firstName?.toLowerCase().includes(search) ||
						staff.lastName?.toLowerCase().includes(search) ||
						staff.email?.toLowerCase().includes(search) ||
						staff.phone?.toLowerCase().includes(search)
					);
				});
			}
		},

		applyStaffFilters: (state) => {
			const search = state.staff.search.toLowerCase().trim();

			if (!search) {
				state.staff.filtered = state.staff.list;
			} else {
				state.staff.filtered = state.staff.list.filter(
					(staff) =>
						(staff.firstName && staff.firstName.toLowerCase().includes(search)) ||
						(staff.lastName && staff.lastName.toLowerCase().includes(search)) ||
						(staff.email && staff.email.toLowerCase().includes(search)) ||
						(staff.phone && staff.phone.toLowerCase().includes(search))
				);
			}
		},

		setStaffCurrentPage: (state, action) => {
			state.staff.pagination.current_page = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			// get all vendors
			.addCase(getAllVendorsAdminDashboard.pending, (state) => {
				state.vendors.loading = true;
				state.vendors.error = null;
			})
			.addCase(getAllVendorsAdminDashboard.fulfilled, (state, action) => {
				state.vendors.loading = false;
				state.vendors.list = action.payload.data || [];
				state.vendors.filtered = action.payload.data || [];
				state.vendors.stats = {
					message: action.payload.message,
					status: action.payload.status,
					total_vendor: action.payload.total_vendor,
					total_vendor_amount: action.payload.total_vendor_amount,
					total_vendor_confirm_payment: action.payload.total_vendor_confirm_payment,
					total_vendor_confirm_payment_amount: action.payload.total_vendor_confirm_payment_amount,
					total_vendor_incomplete_payment: action.payload.total_vendor_incomplete_payment,
					total_vendor_incomplete_payment_amount: action.payload.total_vendor_incomplete_payment_amount,
				};
			})
			.addCase(getAllVendorsAdminDashboard.rejected, (state, action) => {
				state.vendors.loading = false;
				state.vendors.error = action.payload || "Failed to load vendors dashboard";
			})

			//create new admin
			.addCase(createStaff.pending, (state) => {
				state.staff.creating = true;
				state.staff.createError = null;
				state.staff.createSuccess = false;
			})
			.addCase(createStaff.fulfilled, (state) => {
				state.staff.creating = false;
				state.staff.createSuccess = true;
			})
			.addCase(createStaff.rejected, (state, action) => {
				state.staff.creating = false;
				state.staff.createError = action.payload;
			})

			// get all staffs
			.addCase(getAllStaffsAdminDashboard.pending, (state) => {
				state.staff.loading = true;
				state.staff.error = null;
			})
			.addCase(getAllStaffsAdminDashboard.fulfilled, (state, action) => {
				state.staff.loading = false;
				state.staff.list = action.payload.data || [];
				state.staff.filtered = action.payload.data || [];
				state.staff.stats = {
					message: action.payload.message,
					status: action.payload.status,
				};
			})
			.addCase(getAllStaffsAdminDashboard.rejected, (state, action) => {
				state.staff.loading = false;
				state.staff.error = action.payload || "Failed to load staff dashboard";
			})

			//update staff
			.addCase(updateStaff.pending, (state) => {
				state.staff.updating = true;
				state.staff.updateError = null;
			})
			.addCase(updateStaff.fulfilled, (state, action) => {
				state.staff.updating = false;
				state.staff.updateSuccess = true;

				const updatedStaff = action.payload;
				state.staff.list = state.staff.list.map((item) => (item.id === updatedStaff.id ? updatedStaff : item));

				adminSlice.caseReducers.applyStaffFilters(state);
			})
			.addCase(updateStaff.rejected, (state, action) => {
				state.staff.updating = false;
				state.staff.updateError = action.payload || "Failed to update staff.";
			})

			//delete staff
			.addCase(deleteStaff.pending, (state) => {
				state.staff.deleting = true;
				state.staff.deleteError = null;
			})
			.addCase(deleteStaff.fulfilled, (state, action) => {
				state.staff.deleting = false;
				state.staff.deleteSuccess = true;
				state.staff.list = state.staff.list.filter((item) => item.id !== action.payload);
				adminSlice.caseReducers.applyStaffFilters(state);
			})
			.addCase(deleteStaff.rejected, (state, action) => {
				state.staff.deleting = false;
				state.staff.deleteError = action.payload || "Failed to delete staff.";
			});
	},
});

export const {
	applyStaffFilters,
	setVendorSearch,
	setVendorCurrentPage,
	resetCreateStaffState,
	setVendorPerPage,
	applyVendorFilters,
	setStaffSearch,
	setStaffCurrentPage,
	setStaffPerPage,
	clearVendorsData,
	resetUpdateStaffState,
	resetDeleteStaffState,
} = adminSlice.actions;

export default adminSlice;
