import React from "react";
import classes from "./index.module.scss";
import PropTypes from "prop-types";

const HighlightCard = ({ icon, title, content }) => {
	return (
		<div className={classes.card}>
			<h4 className={classes.card__title}>{title}</h4>
			<p className={classes.card__paragraph}>{content}</p>
		</div>
	);
};

HighlightCard.defaultProps = {
	// icon: PropTypes.string,
	title: "Title",
	content:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium minus soluta, natus eveniet distinctio qui.",
};

HighlightCard.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
};

export default HighlightCard;
