import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Intro = () => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		document.body.style.overflow = "hidden";

		const timer = setTimeout(() => {
			setShow(false);
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<AnimatePresence
			onExitComplete={() => (document.body.style.overflow = "auto")}
		>
			{show && (
				<motion.div
					key="intro"
					initial={{ opacity: 1, scale: 1 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					transition={{ duration: 1, ease: "easeInOut" }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-gradient"
				>
					<div className="flex items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1600 900"
							className="w-[150vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw] h-auto"
							role="img"
							aria-label="E A logo intro"
						>
							<defs>
								{/* Gradients */}
								<linearGradient id="gradEA-dark" x1="0" x2="1" y1="0" y2="0">
									<stop offset="0%" stopColor="#1f5b9e" />
									<stop offset="50%" stopColor="#5b7cfa" />
									<stop offset="100%" stopColor="#ff6b9a" />
								</linearGradient>

								<linearGradient id="gradEA-light" x1="0" x2="1" y1="0" y2="0">
									<stop offset="0%" stopColor="#051933" />
									<stop offset="50%" stopColor="#1a1a4f" />
									<stop offset="100%" stopColor="#400018" />
								</linearGradient>

								<filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
									<feGaussianBlur stdDeviation="18" result="coloredBlur" />
									<feMerge>
										<feMergeNode in="coloredBlur" />
										<feMergeNode in="SourceGraphic" />
									</feMerge>
								</filter>

								<filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
									<feGaussianBlur stdDeviation="3" result="b" />
									<feMerge>
										<feMergeNode in="b" />
										<feMergeNode in="SourceGraphic" />
									</feMerge>
								</filter>

								<style>{`
                  .ea-stroke {
                    fill: none;
                    stroke: url(#gradEA-dark);
                    stroke-width: 20;
                    stroke-linejoin: round;
                    stroke-linecap: round;
                    paint-order: stroke;
                    stroke-dasharray: 3000;
                    stroke-dashoffset: 3000;
                    filter: url(#soft);
                  }

                  .ea-outline {
                    fill: none;
                    stroke: rgba(0,0,0,0.1);
                    stroke-width: 5;
                    stroke-linejoin: round;
                    stroke-linecap: round;
                    stroke-dasharray: 3000;
                    stroke-dashoffset: 3000;
                  }

                  .ea-fill-dark {
                    fill: url(#gradEA-dark);
                    opacity: 0;
                    filter: url(#glow);
                  }

                  .ea-fill-light {
                    fill: url(#gradEA-light);
                    opacity: 0;
                    filter: url(#glow);
                  }

                  @keyframes drawStroke {
                    to { stroke-dashoffset: 0; }
                  }

                  @keyframes drawOutline {
                    to { stroke-dashoffset: 0; }
                  }
                `}</style>
							</defs>

							<g
								transform="translate(800,450)"
								style={{ transformBox: "fill-box", transformOrigin: "center" }}
							>
								<text
									x="0"
									y="0"
									textAnchor="middle"
									dominantBaseline="middle"
									fontFamily="Poppins, Inter, system-ui, sans-serif"
									fontWeight="900"
									fontSize="520"
									className="ea-outline"
									style={{ animation: "drawOutline 5s ease forwards 0.05s" }}
								>
									EA
								</text>

								<text
									x="0"
									y="0"
									textAnchor="middle"
									dominantBaseline="middle"
									fontFamily="Poppins, Inter, system-ui, sans-serif"
									fontWeight="900"
									fontSize="520"
									className="ea-stroke"
									style={{ animation: "drawStroke 5s ease forwards 0.15s" }}
								>
									EA
								</text>

								<motion.text
									x="0"
									y="0"
									textAnchor="middle"
									dominantBaseline="middle"
									fontFamily="Poppins, Inter, system-ui, sans-serif"
									fontWeight="900"
									fontSize="520"
									className="ea-fill-light block dark:hidden"
									initial={{ opacity: 0, scale: 0.99 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 5, duration: 1.2, ease: "easeOut" }}
								>
									EA
								</motion.text>

								<motion.text
									x="0"
									y="0"
									textAnchor="middle"
									dominantBaseline="middle"
									fontFamily="Poppins, Inter, system-ui, sans-serif"
									fontWeight="900"
									fontSize="520"
									className="ea-fill-dark hidden dark:block"
									initial={{ opacity: 0, scale: 0.99 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 5, duration: 1.2, ease: "easeOut" }}
								>
									EA
								</motion.text>
							</g>
						</svg>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Intro;
