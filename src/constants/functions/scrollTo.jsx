export const scrollTo = (item) => {
	const element = document.getElementById(item);
	if (element) {
		element.scrollIntoView({ behavior: "smooth", block: "start" });
	}
};
