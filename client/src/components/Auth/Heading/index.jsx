import React from "react";
import classes from "./index.module.scss";

const Heading = ({ children }) => {
	return <h3 className={classes.heading}>{children}</h3>;
};

export default Heading;
