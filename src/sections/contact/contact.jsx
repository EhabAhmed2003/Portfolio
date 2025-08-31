import SectionTitle from "@/components/sectionTitle/sectionTitle";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.2, delayChildren: 0.3 },
	},
};
const Contact = () => {
	const { t } = useTranslation();

	const itemVariants = {
		hidden: { x: -50, opacity: 0 },
		show: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
	};
	return (
		<section id="contact" className="flex flex-col gap-10 py-10">
			<div>
				<SectionTitle title={t`contact.title`} />
			</div>

			<div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					className="space-y-6 flex flex-col"
				>
					<motion.a
						variants={itemVariants}
						href="mailto:eltorky.456@yahoo.com"
						className="flex gap-4 items-center"
					>
						<Mail className="text-primary" />
						<span className="text-sm text-foreground/70">
							{t("contact.email")}
						</span>
					</motion.a>
					<motion.a
						variants={itemVariants}
						href="tel:+201029659428"
						className="flex gap-4 items-center"
					>
						<Phone className="text-primary" />
						<span className="text-sm text-foreground/70">
							{t("contact.phone")}
						</span>
					</motion.a>
					<motion.p variants={itemVariants} className="flex gap-4 items-center">
						<MapPin className="text-primary" />
						<span className="text-sm text-foreground/70">
							{t("contact.location")}
						</span>
					</motion.p>
				</motion.div>

				{/* الفورم */}
				<motion.form
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
					className="border border-border backdrop-blur-xl rounded-xl p-6 shadow-md space-y-4"
				>
					<input
						type="text"
						placeholder={t("contact.form.name")}
						className="w-full text-sm p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
					/>
					<input
						type="email"
						placeholder={t("contact.form.email")}
						className="w-full text-sm p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
					/>
					<textarea
						rows={5}
						placeholder={t("contact.form.message")}
						className="w-full text-sm p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
					></textarea>
					<button
						type="submit"
						className="w-full text-sm py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition hover:cursor-pointer"
					>
						{t("contact.form.sendMessage")}
					</button>
				</motion.form>
			</div>
		</section>
	);
};

export default Contact;
