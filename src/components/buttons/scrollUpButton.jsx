import { useScroll } from "framer-motion";
import { ChevronUp } from "lucide-react";

import { useSelector } from "react-redux";

const ScrollUpButton = () => {
	const { showScrollUpButton } = useSelector((state) => state.scrollUpButton);

	const handleScrollUp = () => {
		window.scrollTo({ behavior: "smooth", top: 0 });
	};
	const { scrollYProgress } = useScroll();

	return (
		showScrollUpButton && (
			<button
				className="fixed bottom-6 right-7 w-12 h-12 flex justify-center items-center 
        rounded-full hover:cursor-pointer text-white 
        shadow-lg transition z-20 overflow-hidden group"
				onClick={handleScrollUp}
			>
				<div
					className="absolute inset-0 rounded-full"
					style={{
						background: `conic-gradient(white ${
							scrollYProgress.current * 100
						}%, transparent ${scrollYProgress.current * 100}%)`,
					}}
				/>

				<div className="absolute inset-[3px] bg-primary rounded-full" />

				<ChevronUp className="relative z-10" />
			</button>
		)
	);
};
export default ScrollUpButton;
