import { createSlice } from "@reduxjs/toolkit";

type uiSliceState = {
  isDrawerOpen: boolean;
}

const initialState: uiSliceState = {
  isDrawerOpen: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    resetUISlice: () => initialState,
    handleToggleDrawer: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  }
});

export const {
  resetUISlice,
  handleToggleDrawer,
} = uiSlice.actions;

export default uiSlice;
