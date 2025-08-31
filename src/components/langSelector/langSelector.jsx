import { motion } from "framer-motion";
import { Globe, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LangSelector = () => {
	const { t, i18n } = useTranslation();
	const [isVisible, setIsVisible] = useState(false);

	const handleChangeLang = (lang) => {
		i18n.changeLanguage(lang);
		localStorage.setItem("lang", lang);
		setIsVisible(false);
	};
	return (
		<div className="w-10 h-10 relative flex justify-center items-center">
			{isVisible ? (
				<X
					className="hover:scale-110 hover:cursor-pointer transition"
					onClick={() => setIsVisible(false)}
				/>
			) : (
				<Globe
					className="hover:scale-110 hover:cursor-pointer transition"
					onClick={() => setIsVisible(true)}
				/>
			)}
			{isVisible && (
				<motion.ul
					initial={{ scale: 0, transformOrigin: "top" }}
					animate={{ scale: 1, transition: { duration: 0.3 } }}
					className="absolute top-[130%] w-fit min-w-[50px] h-fit z-20"
				>
					<li
						onClick={() => handleChangeLang("ar")}
						className="py-2 px-6 text-center hover:bg-primary text-sm hover:text-white hover:cursor-pointer bg-card"
					>
						{t("languages.arabic")}
					</li>
					<li
						onClick={() => handleChangeLang("en")}
						className="py-2 px-6 text-center hover:bg-primary text-sm hover:text-white hover:cursor-pointer bg-card"
					>
						{t("languages.english")}
					</li>
				</motion.ul>
			)}
		</div>
	);
};
export default LangSelector;
