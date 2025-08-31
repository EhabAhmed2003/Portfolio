import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "@/layouts/header/header";
import React from "react";
import Home from "@/pages/home";
import {
	setIsFixedHeader,
	setShowDropdown,
} from "@/features/header/headerSlice";
import ScrollUpButton from "@/components/buttons/scrollUpButton";
import { setShowScrollUpButton } from "@/features/scrollUpButton/scrollUpButtonSlice";
import SocialsSideBar from "@/layouts/socialsSidebar/socials";
import Blur from "@/components/blurScreen/blur";
import { setShowBlur } from "@/features/blurScreen/blurSlice";
import Footer from "@/layouts/footer/footer";
import CustomCursor from "@/components/cursor/cursor";
import { useTranslation } from "react-i18next";

function App() {
	const [scrollY, setScrollY] = useState(window.scrollY);
	const { theme } = useSelector((state) => state.theme);
	const dispatch = useDispatch();
	const { i18n } = useTranslation();
	useEffect(() => {
		const root = document.documentElement;
		if (theme === "dark") {
			root.classList.add(`dark`);
		} else {
			root.classList.remove(`dark`);
		}
	}, [theme]);

	useEffect(() => {
		const handleScroll = () => {
			const current = window.scrollY;
			if (scrollY > current && current > 30) {
				dispatch(setIsFixedHeader(true));
				dispatch(setShowDropdown(false));
				dispatch(setShowBlur(false));
				setScrollY(current);
			} else {
				dispatch(setIsFixedHeader(false));
				dispatch(setShowDropdown(false));
				dispatch(setShowBlur(false));
				setScrollY(current);
			}
			if (current > 300) {
				dispatch(setShowScrollUpButton(true));
			} else {
				dispatch(setShowScrollUpButton(false));
			}
		};
		addEventListener("scroll", handleScroll);
		return () => removeEventListener("scroll", handleScroll);
	}, [scrollY, dispatch]);
	return (
		<div
			dir={i18n.language === "ar" ? "rtl" : "ltr"}
			className="min-h-[300vh] relative overflow-hidden"
		>
			<div className="fixed inset-0 z-0 bg-gradient"></div>
			<main className="relative ltr:font-[merriMedium] rtl:font-[cairoMedium]">
				<Header />
				<Blur />
				<ScrollUpButton />
				<SocialsSideBar />
				<CustomCursor />
				<Home />
				<Footer />
			</main>
		</div>
	);
}

export default App;
