import React from "react";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavigationLink = ({ to, name, type }) => {
	const finalClass = [classes.navigation__link];
	switch (type) {
		case "light":
			finalClass.push(classes.navigation__light);
			break;
		case "dark":
			finalClass.push(classes.navigation__dark);
			break;
		default:
			finalClass.push(classes.navigation__light);
	}
	return (
		<li className={classes.navigation__item}>
			<Link className={finalClass.join(" ")} to={to}>
				{name}
			</Link>
		</li>
	);
};

NavigationLink.propTypes = {
	to: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
};

export default NavigationLink;
