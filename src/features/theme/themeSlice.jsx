import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	theme: localStorage.getItem(`theme`) || "dark",
};

const themeSlice = createSlice({
	initialState,
	name: "themeMode",
	reducers: {
		toggleMode: (state) => {
			state.theme === "dark" ? (state.theme = "light") : (state.theme = "dark");
			localStorage.setItem("theme", state.theme);
		},
	},
});
export default themeSlice.reducer;
export const { toggleMode } = themeSlice.actions;
