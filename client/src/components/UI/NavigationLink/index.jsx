import React from "react";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavigationLink = ({ to, name }) => {
	return (
		<li className={classes.navigation__item}>
			<Link className={classes.navigation__link} to={to}>
				{name}
			</Link>
		</li>
	);
};

NavigationLink.propTypes = {
	to: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default NavigationLink;
