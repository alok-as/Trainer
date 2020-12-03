import React from "react";
import classes from "./index.module.scss";
import { Icon } from "../../../components/UI";
import sprites from "../../../assets/icons/sprites.svg";

const GoalCard = ({ image, title }) => {
	return (
		<div className={classes.card}>
			<img src={image} className={classes.card__image} alt={title} />
			<h5 className={classes.card__title}>{title}</h5>
			<div className={classes.card__overlay}>
				<div className={classes.card__cover}></div>
				<div className={classes.card__wrap}>
					<Icon
						icon={`${sprites}#icon-check_circle_outline`}
						iconStyle={classes.card__icon}
					/>
				</div>
			</div>
		</div>
	);
};

export default GoalCard;
