import { setShowBlur } from "@/features/blurScreen/blurSlice";
import { setShowDropdown } from "@/features/header/headerSlice";
import { useDispatch, useSelector } from "react-redux";

const BlurDiv = () => {
	const dispatch = useDispatch();
	const { showBlur } = useSelector((state) => state.blur);
	const handleCloseDropdown = () => {
		dispatch(setShowDropdown(false));
		dispatch(setShowBlur(false));
	};
	if (showBlur) {
		return (
			<div
				className="fixed inset-0 bg-black/20 w-[200vw] h-[200vh] z-10 text-9xl"
				onClick={handleCloseDropdown}
			></div>
		);
	}
};

export default BlurDiv;
