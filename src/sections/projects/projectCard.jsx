import { projectsData } from "@/constants/projects";
import { useSelector } from "react-redux";
import { Github } from "lucide-react";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ProjectCard = () => {
	const { theme } = useSelector((state) => state.theme);
	const { t } = useTranslation();
	return (
		<>
			{projectsData.map((project) => {
				return (
					<motion.div
						initial={{ opacity: 0, y: 30, scale: 0.95 }}
						whileInView={{
							opacity: 1,
							y: 0,
							scale: 1,
							transition: { duration: 0.5, delay: project.id * 0.15 },
						}}
						key={project.id}
						className="projectContainer relative w-[370px]"
					>
						<div className="absolute top-6/12 left-6/12 translate-[-50%] w-[101%] h-[101%] overflow-hidden rounded-md blur-xs">
							<div className="absolute top-6/12 left-6/12 translate-[-50%] w-[200%] h-[200%] bg-conic imageDiv"></div>
						</div>
						<div className="relative w-full h-full p-5 bg-card rounded-md flex flex-col justify-between gap-3">
							<div className="flex flex-col gap-2">
								<div className="group w-full h-[200px] overflow-hidden rounded-t relative ">
									<img
										className="w-full h-full transition duration-500 group-hover:scale-110 sm:group-hover:blur-sm"
										src={theme === "dark" ? project.lightImg : project.darkImg}
										alt={`${project.title} Image`}
										loading="lazy"
									/>
									<div className="absolute inset-0 flex sm:bg-black/40 items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
										<a
											href={project.demo}
											target="_blank"
											className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 sm:block hidden"
										>
											<Eye />
										</a>
										<a
											href={project.github}
											target="_blank"
											className="px-4 py-2 bg-white text-primary rounded-md hover:bg-primary hover:text-white sm:block hidden"
										>
											<Github />
										</a>
									</div>
								</div>

								<div>
									<h3 className="ltr:font-[merribold] rtl:font-[cairoBold] mb-1 md:mb-2">
										{t(project.title)}
									</h3>
									<p className="text-xs leading-5 text-card-foreground overflow-hidden">
										{t(project.desc)}
									</p>
								</div>
								<ul className="flex flex-wrap gap-2">
									{project.tech.map((tech, i) => {
										return (
											<li
												className="text-xs py-2 capitalize px-4 w-fit rounded text-card-foreground bg-foreground/10"
												key={i}
											>
												{t(`skills.${tech}`)}
											</li>
										);
									})}
								</ul>
							</div>

							<div className="flex justify-center gap-3">
								<a
									href={project.demo}
									target="_blank"
									className=" py-2 pe-4 ps-3 rounded-md bg-primary transition text-sm duration-1000 text-white hover:bg-primary/80 flex justify-center items-center gap-2 "
								>
									<Eye className="w-5 h-5" />
									<span>{t("projects.buttons.live")}</span>
								</a>
								<a
									href={project.github}
									target="_blank"
									className=" py-2 pe-4 ps-3 rounded-md border border-primary text-sm text-primary hover:bg-primary hover:text-white transition flex justify-center items-center gap-2"
								>
									<Github className="w-5 h-5" />
									<span>{t("projects.buttons.github")}</span>
								</a>
							</div>
						</div>
					</motion.div>
				);
			})}
		</>
	);
};
export default ProjectCard;
