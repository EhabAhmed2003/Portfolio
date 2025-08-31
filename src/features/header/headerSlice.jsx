import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isFixedHeader: false,
	showDropdown: false,
};

const headerSlice = createSlice({
	name: "headerSlice",
	initialState,
	reducers: {
		setIsFixedHeader: (state, action) => {
			state.isFixedHeader = action.payload;
		},
		setShowDropdown: (state, action) => {
			state.showDropdown = action.payload;
		},
	},
});
export default headerSlice.reducer;
export const { setIsFixedHeader, setShowDropdown } = headerSlice.actions;
