import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchAppUsers = createAsyncThunk(
  'appUsers/fetchAppUsers',
  async ({ page = 1, limit = 10, filters = {} }, { rejectWithValue }) => {
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...filters
      })
      const response = await fetch(`/api/admin/app-users?${queryParams}`)
      if (!response.ok) throw new Error('Failed to fetch app users')
      return await response.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const updateUserStatus = createAsyncThunk(
  'appUsers/updateUserStatus',
  async ({ userId, status }, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/admin/app-users/${userId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      })
      if (!response.ok) throw new Error('Failed to update user status')
      return await response.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchUserDetails = createAsyncThunk(
  'appUsers/fetchUserDetails',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/admin/app-users/${userId}`)
      if (!response.ok) throw new Error('Failed to fetch user details')
      return await response.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const updateUserLimits = createAsyncThunk(
  'appUsers/updateUserLimits',
  async ({ userId, limits }, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/admin/app-users/${userId}/limits`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ limits })
      })
      if (!response.ok) throw new Error('Failed to update user limits')
      return await response.json()
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const appUsersSlice = createSlice({
  name: 'appUsers',
  initialState: {
    items: [],
    total: 0,
    currentPage: 1,
    totalPages: 0,
    loading: false,
    error: null,
    filters: {},
    selectedUser: null,
    userDetails: null
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload
    },
    clearFilters: state => {
      state.filters = {}
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload
    },
    clearUserDetails: state => {
      state.userDetails = null
    },
    clearError: state => {
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAppUsers.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAppUsers.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload.users
        state.total = action.payload.total
        state.currentPage = action.payload.currentPage
        state.totalPages = action.payload.totalPages
      })
      .addCase(fetchAppUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateUserStatus.fulfilled, (state, action) => {
        const index = state.items.findIndex(u => u.id === action.payload.id)
        if (index !== -1) {
          state.items[index] = action.payload
        }
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.userDetails = action.payload
      })
      .addCase(updateUserLimits.fulfilled, (state, action) => {
        if (state.userDetails && state.userDetails.id === action.payload.id) {
          state.userDetails = action.payload
        }
      })
  }
})

export const {
  setFilters,
  clearFilters,
  setSelectedUser,
  clearUserDetails,
  clearError
} = appUsersSlice.actions
export default appUsersSlice.reducer
