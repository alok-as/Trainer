import React from "react";
import classes from "./index.module.scss";
import PropTypes from "prop-types";
import { Icon } from "../../UI";

const HeroCard = ({ icon, title, content, color }) => {
	return (
		<div className={classes.card} style={{ backgroundColor: color }}>
			<Icon icon={icon} iconStyle={classes.card__icon} />
			<h4 className={classes.card__title}>{title}</h4>
			<p className={classes.card__paragraph}>{content}</p>
			<button className={classes.card__button}>Read more</button>
		</div>
	);
};

HeroCard.defaultProps = {
	// icon: ""
	title: "Title",
	content:
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis esse fuga consectetur obcaecati id ullam doloribus nesciunt quaerat tempora exercitationem.",
	color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
};

HeroCard.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
	color: PropTypes.string,
};

export default HeroCard;
