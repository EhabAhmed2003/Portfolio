import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Share2, X } from "lucide-react";

const CloseIcon = motion.create(X);
const ShareIcon = motion.create(Share2);
const SocialsSideBar = () => {
	const [showSocials, setShowSocials] = useState(false);
	return (
		<aside className="fixed top-6/12 left-0 -translate-y-6/12 z-40">
			<div
				className="h-fit w-fit flex justify-center items-center hover:cursor-pointer rounded bg-primary/80 hover:bg-primary/70 transition-all"
				onClick={() => setShowSocials((prev) => !prev)}
			>
				{showSocials ? (
					<CloseIcon
						initial={{ rotate: 0 }}
						animate={{ rotate: 90 }}
						className="w-10 h-10 p-1.5 rounded font-bold"
					/>
				) : (
					<ShareIcon
						initial={{ rotate: 180 }}
						animate={{ rotate: 0 }}
						className="w-10 h-10 p-1.5 rounded font-bold"
					/>
				)}
				<AnimatePresence mode="wait">
					{showSocials && (
						<nav className="">
							<a href="https://github.com/EhabAhmed2003" target="_blank">
								<motion.img
									initial={{ top: 0, left: 30, opacity: 0 }}
									animate={{ top: 0, left: 45, opacity: 1 }}
									transition={{ duration: 0.3 }}
									exit={{ top: 0, left: 30, opacity: 0 }}
									className="absolute top-0"
									src="/images/social/github-color-svgrepo-com.png"
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/ehab-ahmed-7b07a3322/"
								target="_blank"
							>
								<motion.img
									initial={{ top: 30, left: 2, opacity: 0 }}
									animate={{ top: 45, left: 2, opacity: 1 }}
									transition={{ duration: 0.3 }}
									exit={{ top: 30, left: 2, opacity: 0 }}
									className="absolute top-12 left-2"
									src="/images/social/linkedin.png"
								/>
							</a>
							<a href="https://www.facebook.com/ho.ba.7165331/" target="_blank">
								<motion.img
									initial={{ bottom: 30, left: 2, opacity: 0 }}
									animate={{ bottom: 45, left: 2, opacity: 1 }}
									transition={{ duration: 0.3 }}
									exit={{ bottom: 30, left: 2, opacity: 0 }}
									className="absolute"
									src="/images/social/facebook (1).png"
								/>
							</a>
						</nav>
					)}
				</AnimatePresence>
			</div>
		</aside>
	);
};
export default SocialsSideBar;
