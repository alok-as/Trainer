import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import axios from "../services/axios";
import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk.withExtraArgument(axios)))
);

export default store;
