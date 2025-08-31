import SectionTitle from "@/components/sectionTitle/sectionTitle";
import ProjectCard from "./projectCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
	const { t } = useTranslation();
	return (
		<section
			id="projects"
			className="py-15 flex flex-col justify-center gap-15"
		>
			<SectionTitle title={t("projects.title")} />

			<div className="flex gap-5 flex-wrap justify-center">
				<ProjectCard />
			</div>
		</section>
	);
};

export default Projects;
