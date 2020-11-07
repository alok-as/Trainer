import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.scss";
import logo1 from "../../../assets/images/UI/logo.png";
import logo2 from "../../../assets/images/UI/logo-dark.png";

const Logo = ({ type }) => {
	switch (type) {
		case "light":
			return (
				<Link className={classes.logo__wrapper} to="/">
					<img className={classes.logo__image} src={logo1} alt="Brand Logo" />
				</Link>
			);
		case "dark":
			return (
				<Link className={classes.logo__wrapper} to="/">
					<img className={classes.logo__image} src={logo2} alt="Brand Logo" />
				</Link>
			);
		default:
			return (
				<Link className={classes.logo__wrapper} to="/">
					<img className={classes.logo__image} src={logo1} alt="Brand Logo" />
				</Link>
			);
	}
};

export default Logo;
