import React from "react";
import classes from "./index.module.scss";

const Thumbnail = ({ image, className }) => {
	let finalClass = [classes.thumbnail__banner];
	if (className) {
		finalClass.push(className);
	}
	return (
		<div className={finalClass.join(" ")}>
			<div className={classes.thumbnail__overlay}></div>
			<img src={image} alt="Thumbnail" className={classes.thumbnail__image} />
		</div>
	);
};

export default Thumbnail;
