import { useEffect, useState } from "react";

const useWidth = () => {
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleWidth = () => {
			setWidth(window.innerWidth);
		};
		addEventListener("resize", handleWidth);
		return () => removeEventListener("resize", handleWidth);
	}, [width]);
	return width;
};

export default useWidth;
