import React from "react";
import classes from "./index.module.scss";
import PropTypes from "prop-types";

const Heading = ({ type, color, children }) => {
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
			return <h1 className={finalClass.join(" ")}>{children}</h1>;
		case "secondary":
			finalClass.push(classes.heading__secondary);
			return <h2 className={finalClass.join(" ")}>{children}</h2>;
		case "tertiary":
			finalClass.push(classes.heading__tertiary);
			return <h3 className={finalClass.join(" ")}>{children}</h3>;
		default:
			finalClass.push(classes.heading__tertiary);
			return <h3 className={finalClass.join(" ")}>{children}</h3>;
	}
};

Heading.propTypes = {
	type: PropTypes.string,
	color: PropTypes.string,
};

export default Heading;
