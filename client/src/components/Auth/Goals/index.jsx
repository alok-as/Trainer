import React from "react";
import classes from "./index.module.scss";
import { Heading, GoalCard } from "../index";

const Goals = ({ cards }) => {
	return (
		<section className={classes.goals}>
			<Heading>
				Tell us what you are looking for,
				<br />
				We'll help you acheive that.
			</Heading>
			<div className={classes.goals__cards}>
				{cards.map((card) => (
					<GoalCard title={card.title} image={card.image} />
				))}
			</div>
		</section>
	);
};

export default Goals;
