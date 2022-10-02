import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  loadingError: false,
  items: [],
};

const serviceListSlice = createSlice({
  name: 'serviceList',
  initialState,
  reducers: {
    fetchServiceList(state, action) {
      state.loading = true;
      state.loadingError = false;
    },
    fetchServiceListSuccess(state, action) {
      state.items = action.payload;
      state.loading = false;
    },
    fetchServiceListFailed(state, action) {
      state.loading = false;
      state.loadingError = true;
    },
  },
});

// Actions
export const serviceListActions = serviceListSlice.actions;

// // Selectors
export const serviceListLoading = (state) => state.serviceList.loading;
export const serviceListLoadingError = (state) =>
  state.serviceList.loadingError;
export const selectListItems = (state) => state.serviceList.items;

// Reducers
const serviceListReducer = serviceListSlice.reducer;
export default serviceListReducer;
