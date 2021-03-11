import React, { useState } from "react";
import classes from "./index.module.scss";
import { Icon } from "../../../components/UI";
import sprites from "../../../assets/icons/sprites.svg";

// const GoalCard = ({ image, title }) => {
// 	return (
// 		<div className={classes.card}>
// 			<img src={image} className={classes.card__image} alt={title} />
// 			<h5 className={classes.card__title}>{title}</h5>
// 			<div className={classes.card__overlay}>
// 				<div className={classes.card__cover}></div>
// 				<div className={classes.card__wrap}>
// 					<Icon
// 						icon={`${sprites}#icon-check_circle_outline`}
// 						iconStyle={classes.card__icon}
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

const GoalCard = ({ image, title, id }) => {
	const [isSelected, setIsSelected] = useState(false);
	const [isOverlayVisible, setIsOverlayVisible] = useState(false);

	const selectGoalHandler = (event) => {
		alert("Chala Hai");
		const isChecked = event.target.checked;

		if (isChecked) {
			setIsOverlayVisible(true);
		} else {
			setIsOverlayVisible(false);
		}
	};

	return (
		<div className={classes.card}>
			<div className={classes.card__select}>
				<input
					type="checkbox"
					checked={isSelected}
					id={id}
					onChange={selectGoalHandler}
					className={classes.card__checkbox}
				/>
				<label htmlFor={id} classes={classes.card__button}>
					Hello
				</label>
			</div>
		</div>
	);
};

export default GoalCard;
