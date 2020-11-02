import React from "react";
import classes from "./index.module.scss";
import { Heading } from "../../UI";

const TestimonialsCard = ({
	company,
	title,
	review,
	profile,
	name,
	designation,
}) => {
	return (
		<div className={classes.card}>
			<div className={classes.card__body}>
				<img className={classes.card__image} src={company} alt="Company Logo" />
				<Heading type="tertiary" color="dark">
					{title}
				</Heading>
				<p className={classes.card__review}>{review}</p>
			</div>
			<div className={classes.card__footer}>
				<img src={profile} className={classes.card__profile} alt="Profile" />
				<h5 className={classes.card__name}>{name}</h5>
				<h6 className={classes.card__designation}>{designation}</h6>
			</div>
		</div>
	);
};

export default TestimonialsCard;
