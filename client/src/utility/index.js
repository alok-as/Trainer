export const updatedObject = (oldObject, updatedProperties) => {
	return {
		...oldObject,
		...updatedProperties,
	};
};

export const getTodaysDate = () => {
	const today = new Date();
	const dd = String(today.getDate()).padStart(2, "0");
	const mm = String(today.getMonth() + 1).padStart(2, "0");
	const yyyy = today.getFullYear();
	return `${mm}/${dd}/${yyyy}`;
};

export const dataURItoBlob = (dataURI) => {
	var byteString = atob(dataURI.split(",")[1]);
	var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

	var ab = new ArrayBuffer(byteString.length);

	var ia = new Uint8Array(ab);

	for (var i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}

	var blob = new Blob([ab], { type: mimeString });
	return blob;
};
