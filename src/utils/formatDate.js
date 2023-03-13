export const formatDate = (date) => {
	if (date) {
		return new Date(date).toLocaleDateString("fr");
	} else {
		return "";
	}
};
