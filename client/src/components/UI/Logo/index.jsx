import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.scss";
import image from "../../../assets/images/UI/logo.png";

const Logo = () => {
	return (
		<Link className={classes.logo__wrapper} to="/">
			<img className={classes.logo__image} src={image} alt="Brand Logo" />
		</Link>
	);
};

export default Logo;
