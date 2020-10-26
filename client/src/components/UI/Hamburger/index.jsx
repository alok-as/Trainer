import React from "react";
import classes from "./index.module.scss";
import PropTypes from "prop-types";

const Hamburger = ({ onClick }) => {
	return (
		<div className={classes.hamburger} onClick={onClick}>
			<div className={classes.hamburger__line}></div>
		</div>
	);
};

Hamburger.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default Hamburger;
