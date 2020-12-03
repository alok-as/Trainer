import * as actionTypes from "./actionTypes";
import endpoints from "../../../services/endpoints";

export const registerUser = (formData) => async (dispatch, getState, axios) => {
	try {
		dispatch({
			type: actionTypes.REGISTER_USER_REQUEST,
		});

		const { data } = await axios.post(`${endpoints.register}`, formData);
		console.log("Response Data", data);

		dispatch({
			type: actionTypes.REGISTER_USER_SUCCESS,
			payload: data.user,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.REGISTER_USER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const markAttendance = (info) => async (dispatch, getState, axios) => {
	try {
		dispatch({
			type: actionTypes.ATTENDANCE_USER_REQUEST,
		});

		const { data } = await axios.post(`${endpoints.attendance}`, info);
		console.log("Attendance Data", data);
	} catch (error) {
		const payload =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;

		console.log(payload);

		dispatch({
			type: actionTypes.ATTENDANCE_USER_FAIL,
			payload,
		});
	}
};
