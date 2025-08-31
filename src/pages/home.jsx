import About from "@/sections/about/about";
import HeroSection from "@/sections/hero/hero";
import Projects from "@/sections/projects/projects";
import Skills from "@/sections/skills/skills";
import Contact from "../sections/contact/contact";
import { useTranslation } from "react-i18next";
import Intro from "@/sections/intro/intro";
const Home = () => {
	const { i18n } = useTranslation();
	return (
		<div
			dir={i18n.language === "ar" ? "rtl" : "ltr"}
			className={`w-11/12 md:w-10/12 m-auto `}
		>
			<HeroSection />
			<Skills />
			<Projects />
			<About />
			<Contact />
			<Intro />
		</div>
	);
};
export default Home;
