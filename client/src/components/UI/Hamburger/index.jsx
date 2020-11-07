import React from "react";
import classes from "./index.module.scss";
import PropTypes from "prop-types";

const Hamburger = ({ onClick, type }) => {
	const finalClass = [classes.hamburger];
	const finalClassLine = [classes.hamburger__line];

	switch (type) {
		case "light":
			finalClass.push(classes.border__light);
			finalClassLine.push(classes.hamburger__light);
			break;
		case "dark":
			finalClass.push(classes.border__dark);
			finalClassLine.push(classes.hamburger__dark);
			break;
		default:
			finalClass.push(classes.border__light);
			finalClassLine.push(classes.hamburger__light);
			break;
	}
	return (
		<div className={finalClass.join(" ")} onClick={onClick}>
			<div className={finalClassLine.join(" ")}></div>
		</div>
	);
};

Hamburger.propTypes = {
	onClick: PropTypes.func.isRequired,
	type: PropTypes.string,
};

export default Hamburger;
