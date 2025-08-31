import SectionTitle from "@/components/sectionTitle/sectionTitle";
import { skills } from "@/constants/skills";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { y: 40, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const Skills = () => {
	const { t } = useTranslation();
	return (
		<section
			id="skills"
			className="min-h-[60vh] py-16 w-full flex flex-col gap-15 sticky top-10"
		>
			<div>
				<SectionTitle title={t`skills.title`} />
			</div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-6 gap-4 px-6 lg:px-20"
			>
				{skills.map((skill) => (
					<motion.div
						key={skill.id}
						variants={itemVariants}
						whileHover={{ scale: 1.08 }}
						whileTap={{ scale: 0.95 }}
						className="group bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center shadow-md 
              hover:shadow-xl hover:border-primary transition-all duration-300 cursor-pointer"
					>
						<img
							src={skill.image}
							alt={skill.name}
							className="w-15 h-15 object-contain mb-4 group-hover:scale-110 transition-transform"
							loading="lazy"
						/>
						<p className="text-card-foreground text-sm font-medium group-hover:text-primary transition-colors">
							{t(`skills.${skill.name}`)}
						</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Skills;
