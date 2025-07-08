import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "../../constants/apiEndpoints";

export const fetchAllTransactions = createAsyncThunk("payments/fetchAll", async (_, { rejectWithValue }) => {
	try {
		const response = await fetch(`${API_ENDPOINTS.FETCH_ALL_TRANSACTIONS}`);
		const data = await response.json();
		if (!data.status) {
			throw new Error("Failed to fetch transactions");
		}
		return data.data;
	} catch (error) {
		console.log(error);
		return rejectWithValue(error.message || "Failed to fetch transactions");
	}
});

export const paymentsSlice = createSlice({
	name: "payments",
	initialState: {
		list: [],
		filtered: [],
		search: "",
		loading: false,
		error: null,
		pagination: {
			current_page: 1,
			per_page: 10,
		},
	},
	reducers: {
		setSearch(state, action) {
			state.search = action.payload;
			state.pagination.current_page = 1;
			paymentsSlice.caseReducers.applyFilters(state);
		},
		setCurrentPage(state, action) {
			state.pagination.current_page = action.payload;
		},
		setPerPage(state, action) {
			state.pagination.per_page = action.payload;
		},
		clear(state) {
			state.list = [];
			state.filtered = [];
			state.search = "";
			state.loading = false;
			state.error = null;
			state.pagination = { current_page: 1, per_page: 10 };
		},
		applyFilters(state) {
			const search = state.search.toLowerCase().trim();
			if (!search) {
				state.filtered = state.list;
			} else {
				state.filtered = state.list.filter(
					(item) =>
						item.reference?.toLowerCase().includes(search) ||
						item.webhook_data?.data?.sender?.originatorName?.toLowerCase().includes(search) ||
						item.webhook_data?.data?.recipient?.toLowerCase().includes(search)
				);
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllTransactions.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchAllTransactions.fulfilled, (state, action) => {
				state.loading = false;
				state.list = action.payload;
				state.filtered = action.payload;
			})
			.addCase(fetchAllTransactions.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const { setSearch, setCurrentPage, setPerPage, clear, applyFilters } = paymentsSlice.actions;

export default paymentsSlice;
