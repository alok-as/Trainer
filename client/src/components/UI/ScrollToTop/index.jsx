import React from "react";
import classes from "./index.module.scss";
import sprites from "../../../assets/icons/sprites.svg";
import Icon from "../Icon";

const ScrollToTop = () => {
	return (
		<a className={classes.scroll} href="#hero">
			<div className={classes.scroll__arrow}>
				<Icon
					icon={`${sprites}#icon-keyboard_arrow_up`}
					iconStyle={classes.scroll__icon}
				/>
			</div>
			<p className={classes.scroll__text}>Top</p>
		</a>
	);
};

export default ScrollToTop;
