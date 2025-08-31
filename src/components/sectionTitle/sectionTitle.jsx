import { motion } from "framer-motion";
import "./sectionTitle.css";
import { useTranslation } from "react-i18next";

const SectionTitle = ({ title }) => {
	const { i18n } = useTranslation();
	const isArLang = i18n.language === "ar";
	return (
		<div className=" flex justify-center items-center md:gap-5 gap-3">
			<motion.span
				initial={{ x: isArLang ? "30%" : "-30%" }}
				whileInView={{ x: 0, transition: { duration: 0.6 } }}
				exit={{ x: isArLang ? "30%" : "-30%" }}
				className="bg-border md:w-[30%] w-[20%] h-[2px]"
			></motion.span>
			<motion.h2
				initial={{ scale: 0, opacity: 0 }}
				whileInView={{
					scale: 1,
					opacity: 1,
					transition: { duration: 0.7 },
				}}
				exit={{ scale: 0, opacity: 0 }}
				className="titleAnimate relative ltr:font-[merribold] rtl:font-[cairoBold] text-center uppercase py-2 rounded md:text-4xl text-3xl"
			>
				{title}
			</motion.h2>
			<motion.span
				initial={{ x: isArLang ? "-30%" : "30%" }}
				whileInView={{ x: 0, transition: { duration: 0.6 } }}
				exit={{ x: isArLang ? "-30%" : "30%" }}
				className="bg-border md:w-[30%] w-[25%] h-[2px]"
			></motion.span>
		</div>
	);
};
export default SectionTitle;
