import * as actionTypes from "./actionTypes";

export const contactCard = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.CONTACT_CARD_REQUEST:
			return {
				loading: true,
			};
		case actionTypes.CONTACT_CARD_SUCCESS:
			return {
				loading: false,
				card: action.payload.vcard,
				name: action.payload.name,
			};
		case actionTypes.CONTACT_CARD_FAILED:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
