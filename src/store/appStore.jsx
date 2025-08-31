import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import headerReducer from "../features/header/headerSlice";
import scrollUpButtonReducer from "../features/scrollUpButton/scrollUpButtonSlice";
import blurReducer from "../features/blurScreen/blurSlice";
export const AppStore = configureStore({
	reducer: {
		theme: themeReducer,
		header: headerReducer,
		scrollUpButton: scrollUpButtonReducer,
		blur: blurReducer,
	},
});
