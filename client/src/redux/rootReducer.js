import { combineReducers } from "redux";
import { register } from "./reducers/Auth/reducers";
import { contactCard } from "./reducers/Testing/reducers";

const rootReducer = combineReducers({
	register,
	contactCard,
});

export default rootReducer;
