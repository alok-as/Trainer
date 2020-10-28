import React from "react";
import classes from "./index.module.scss";
import PropTypes from "prop-types";

const Heading = ({ type, color, children, className }) => {
	const finalClass = [classes.heading];

	switch (color) {
		case "light":
			finalClass.push(classes.heading__light);
			break;
		case "dark":
			finalClass.push(classes.heading__dark);
			break;
		default:
			finalClass.push(classes.heading__dark);
	}

	switch (type) {
		case "primary":
			finalClass.push(classes.heading__primary);
			if (className) {
				finalClass.push(className);
			}
			return <h1 className={finalClass.join(" ")}>{children}</h1>;
		case "secondary":
			finalClass.push(classes.heading__secondary);
			if (className) {
				finalClass.push(className);
			}
			return <h2 className={finalClass.join(" ")}>{children}</h2>;
		case "tertiary":
			finalClass.push(classes.heading__tertiary);
			if (className) {
				finalClass.push(className);
			}
			return <h3 className={finalClass.join(" ")}>{children}</h3>;
		default:
			finalClass.push(classes.heading__tertiary);
			if (className) {
				finalClass.push(className);
			}
			return <h3 className={finalClass.join(" ")}>{children}</h3>;
	}
};

Heading.propTypes = {
	type: PropTypes.string,
	color: PropTypes.string,
};

export default Heading;
