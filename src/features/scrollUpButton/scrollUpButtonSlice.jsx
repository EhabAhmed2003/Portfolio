import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	showScrollUpButton: false,
};

const scrollUpButtonSlice = createSlice({
	name: "scrollUpButton",
	initialState,
	reducers: {
		setShowScrollUpButton: (state, action) => {
			state.showScrollUpButton = action.payload;
		},
	},
});
export default scrollUpButtonSlice.reducer;
export const { setShowScrollUpButton } = scrollUpButtonSlice.actions;
