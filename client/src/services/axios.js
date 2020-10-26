import axios from "axios";
import API from "./endpoints";

const instance = axios.create({
	baseURL: API.baseURL,
});

export default instance;
