import { scrollTo } from "@/constants/functions/scrollTo";
import { headerList } from "@/constants/headerList";
import { Github, Linkedin, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer className="border-t border-border py-5 w-10/12 m-auto md:w-11/12">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
				{/* Logo / Name */}
				<h2 className="text-xl font-bold text-primary rtl:font-[cairoBold] ltr:font-[merriBold]">
					{t("footer.title")}
				</h2>

				{/* Navigation Links */}
				<ul className="flex gap-6 text-muted-foreground text-sm">
					{headerList.map((ele) => {
						return (
							<li
								key={ele.id}
								onClick={() => scrollTo(ele.pathTo)}
								className="hover:text-primary hover:cursor-pointer"
							>
								{t(`footer.${ele.value}`)}
							</li>
						);
					})}
				</ul>

				{/* Social Links */}
				<div className="flex gap-4">
					<a
						href="https://github.com/EhabAhmed2003"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-primary"
					>
						<Github />
					</a>
					<a
						href="https://www.facebook.com/ho.ba.7165331/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-primary"
					>
						<Facebook />
					</a>
					<a
						href="https://www.linkedin.com/in/ehab-ahmed-7b07a3322/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-primary"
					>
						<Linkedin />
					</a>
				</div>
			</div>

			{/* Copyright */}
			<div className="text-center text-xs text-muted-foreground mt-3">
				© {new Date().getFullYear()} {t(`footer.message`)}
			</div>
		</footer>
	);
};

export default Footer;
