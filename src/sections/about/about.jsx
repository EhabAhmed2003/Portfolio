import SectionTitle from "@/components/sectionTitle/sectionTitle";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
	const { t } = useTranslation();
	return (
		<section id="about" className="flex flex-col gap-10 py-10">
			<div>
				<SectionTitle title={t("about.title")} />
			</div>

			<motion.p
				initial={{ y: 50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
				className="text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
			>
				{t("about.description")}
			</motion.p>
		</section>
	);
};
export default About;
