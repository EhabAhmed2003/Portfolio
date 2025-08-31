import { scrollTo } from "@/constants/functions/scrollTo";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
	const { t, i18n } = useTranslation();
	const isArabic = i18n.language === "ar";
	return (
		<section className="relative min-h-[90vh] flex flex-col-reverse justify-center lg:flex-row items-center lg:justify-between">
			<div
				className={`text-center ${
					isArabic ? "lg:text-right" : "lg:text-left"
				} space-y-4 max-w-xl w-10/12`}
			>
				<motion.h1
					initial={{ y: -60, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-4xl md:text-5xl uppercase lg:text-6xl xl:text-7xl ltr:font-[merriBold] rtl:font-[cairoBold] text-transparent bg-gradient-to-r from-primary to-primary/20 bg-clip-text leading-tight"
				>
					{t("hero.title")}
				</motion.h1>

				<motion.h2
					initial={{ y: 60, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
					className="dark:text-primary-foreground text-primary-foreground w-full lg:text-md text-sm sm:w-10/12 m-auto lg:m-0 lg:w-10/12"
				>
					{t("hero.im")}{" "}
					<span className="md:text-lg text-foreground">{t("hero.name")}</span>{" "}
					{t("hero.description")}
				</motion.h2>

				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { staggerChildren: 0.2, delayChildren: 0.6 },
						},
					}}
					className="flex gap-4 justify-center lg:justify-start mt-6"
				>
					<motion.button
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
						onClick={() => scrollTo(`projects`)}
						className="px-6 py-2 bg-primary hover:bg-primary/80 md:text-md text-sm text-white rounded-sm shadow-md hover:cursor-pointer transition"
					>
						{t("hero.projects")}
					</motion.button>
					<motion.a
						href="/cv/cv.pdf"
						rel="noopener noreferrer"
						target="_blank"
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<button className="px-6 py-2 border border-ring text-primary md:text-md text-sm hover:bg-primary bg-primary/10 hover:text-white rounded-sm transition hover:cursor-pointer">
							{t("hero.view cv")}
						</button>
					</motion.a>
				</motion.div>
			</div>

			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
				className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] aspect-square flex items-center justify-center mb-6 lg:mb-0"
			>
				<motion.div
					whileInView={{ scale: [1, 1.1, 1] }}
					transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
					className="absolute w-[102%] h-[102%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/80 dark:bg-primary/30 blur-3xl opacity-70"
				></motion.div>

				<div className="imageDiv absolute top-6/12 left-6/12 translate-[-50%] w-[102%] h-[102%] rounded-full blur-xs"></div>
				<img
					src="/images/hero.jpg"
					alt="hero"
					loading="lazy"
					className="relative w-full h-full object-cover rounded-full shadow-2xl bg-card"
				/>
			</motion.div>
		</section>
	);
}
