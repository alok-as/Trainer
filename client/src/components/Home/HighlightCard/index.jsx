import React from "react";
import classes from "./index.module.scss";
import PropTypes from "prop-types";

const HighlightCard = ({ image, title, content }) => {
	return (
		<div className={classes.card}>
			<img className={classes.card__image} src={image} alt={title} />
			<h4 className={classes.card__title}>{title}</h4>
			<p className={classes.card__paragraph}>{content}</p>
		</div>
	);
};

HighlightCard.defaultProps = {
	title: "Title",
	content:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium minus soluta, natus eveniet distinctio qui.",
};

HighlightCard.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
};

export default HighlightCard;
