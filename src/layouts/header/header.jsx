import ThemeButton from "@/components/buttons/themeToggle";
import { headerList } from "@/constants/headerList";
import useWidth from "@/hooks/useWidth";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import Dropdown from "./dropdown";
import { setShowDropdown } from "@/features/header/headerSlice";
import { scrollTo } from "@/constants/functions/scrollTo";
import { setShowBlur } from "@/features/blurScreen/blurSlice";
import LangSelector from "@/components/langSelector/langSelector";
import { useTranslation } from "react-i18next";

const CloseIcon = motion.create(X);
const ListIcon = motion.create(AlignJustify);

const Header = () => {
	const { isFixedHeader, showDropdown } = useSelector((state) => state.header);
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const width = useWidth();
	const isBigScreen = width >= 767;

	const handleShowDropdown = () => {
		dispatch(setShowDropdown(true));
		dispatch(setShowBlur(true));
	};
	const handleCloseDropdown = () => {
		dispatch(setShowDropdown(false));
		dispatch(setShowBlur(false));
	};
	const handleScrollUp = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<AnimatePresence mode="wait">
			<motion.header
				initial={{ y: "-100%", opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				exit={{ y: "-100%", opacity: 0 }}
				className={` flex justify-between items-center px-6 py-3 top-5 left-0 right-0 w-11/12 md:w-10/12 m-auto rounded-lg border border-border ${
					isFixedHeader ? "bg-card/20 backdrop-blur-3xl fixed z-20" : "relative"
				}`}
			>
				<div>
					<h2
						onClick={handleScrollUp}
						className="text-2xl md:text-3xl ltr:font-[merriBold] rtl:font-[cairoBold] hover:cursor-pointer "
					>
						{t("header.title")}
					</h2>
				</div>
				<div className="w-5/12">
					{width > 767 && (
						<ul className="flex list-none justify-around text-sm ">
							{headerList.map((val) => (
								<li
									key={val.id}
									to={val.pathTo}
									onClick={() => scrollTo(val.pathTo)}
									className={`hover:cursor-pointer py-2 px-5 rounded hover:bg-primary hover:text-white transition`}
								>
									{t(`header.${val.value}`)}
								</li>
							))}
						</ul>
					)}
				</div>
				<div className="flex gap-4 items-center">
					<ThemeButton />
					<LangSelector />
					{!isBigScreen &&
						(showDropdown ? (
							<CloseIcon
								initial={{}}
								animate={{ rotate: 180 }}
								transition={{ duration: 0.3 }}
								className="w-8 h-8 hover:cursor-pointer z-20"
								onClick={handleCloseDropdown}
							/>
						) : (
							<ListIcon
								initial={{}}
								animate={{ rotate: 180 }}
								transition={{ duration: 0.3 }}
								className="w-8 h-8 hover:cursor-pointer"
								onClick={handleShowDropdown}
							/>
						))}
				</div>
				{!isBigScreen && <Dropdown />}
			</motion.header>
		</AnimatePresence>
	);
};
export default Header;
