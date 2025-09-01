import { headerList } from "@/constants/headerList";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { scrollTo } from "@/constants/functions/scrollTo";
import { useTranslation } from "react-i18next";

const Dropdown = () => {
	const { showDropdown, isFixedHeader } = useSelector((state) => state.header);

	const { t } = useTranslation();
	return (
		<AnimatePresence mode="wait">
			{showDropdown && (
				<>
					<motion.div
						initial={{ scaleY: 0, transformOrigin: "top", opacity: 0 }}
						animate={{ scaleY: 1, opacity: 1 }}
						transition={{ duration: 0.3 }}
						exit={{ scaleY: 0, opacity: 0 }}
						className={`top-full w-full left-0 min-h-40 py-4 rounded-b-lg bg-gradient-to-b dark:from-[#1a001f] dark:to-[#46045c]   from-[#ffffff] to-[#bbbbb9]  z-20 flex flex-col gap-4 items-center justify-center
                        
                        ${isFixedHeader ? "fixed" : "absolute"}`}
					>
						{headerList.map((val) => {
							return (
								<li
									key={val.id}
									onClick={() => scrollTo(val.pathTo)}
									className={`text-sm px-4 py-2 rounded hover:bg-primary list-none hover:cursor-pointer hover:text-white`}
								>
									{t(`header.${val.value}`)}
								</li>
							);
						})}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};
export default Dropdown;
