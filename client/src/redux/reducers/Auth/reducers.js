import * as actionTypes from "./actionTypes";

export const register = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.REGISTER_USER_REQUEST:
			return {
				loading: true,
			};
		case actionTypes.REGISTER_USER_SUCCESS:
			return {
				loading: false,
				success: true,
				user: action.payload,
			};
		case actionTypes.REGISTER_USER_FAIL:
			return {
				loading: false,
				success: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
