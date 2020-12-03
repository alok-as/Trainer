import config from "./config";

const endpoints = {
	baseURL: `${config.serverUrl}:${config.port}/api`,
	register: "/users/register",
	attendance: "/attendance",
	"contact-card": "/users/contact-card",
};

export default endpoints;
