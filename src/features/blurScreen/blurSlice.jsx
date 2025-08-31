import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	showBlur: false,
};
const blurSlice = createSlice({
	name: "blurSlice",
	initialState,
	reducers: {
		setShowBlur: (state, action) => {
			state.showBlur = action.payload;
		},
	},
});
export default blurSlice.reducer;
export const { setShowBlur } = blurSlice.actions;
