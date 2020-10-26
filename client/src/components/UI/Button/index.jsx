import React from "react";
import classes from "./index.module.scss";

const Button = ({ children }) => {
	return <button className={classes.button}>{children}</button>;
};

export default Button;
