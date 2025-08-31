import useWidth from "@/hooks/useWidth";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const width = useWidth();

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePos({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	if (width < 768) return null;

	return (
		<motion.div
			animate={{ x: mousePos.x - 15, y: mousePos.y - 15 }}
			transition={{ type: "spring", stiffness: 500, damping: 30 }}
			className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary/50 mix-blend-difference pointer-events-none z-50"
		/>
	);
}
