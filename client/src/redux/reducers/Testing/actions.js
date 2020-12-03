import * as actionTypes from "./actionTypes";
import endpoints from "../../../services/endpoints";

export const getContactCard = (email, password) => async (
	dispatch,
	getStore,
	axios
) => {
	try {
		dispatch({
			type: actionTypes.CONTACT_CARD_REQUEST,
		});

		const { data } = await axios.get(`${endpoints["contact-card"]}`);
		console.log("Data from Contact Card", data);

		dispatch({
			type: actionTypes.CONTACT_CARD_SUCCESS,
			payload: data,
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: actionTypes.CONTACT_CARD_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
