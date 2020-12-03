import React from "react";
import classes from "./index.module.scss";

const ExerciseItem = ({
	delay,
	easing,
	image,
	subtitle,
	title,
	color,
	area,
}) => {
	return (
		<div
			className={classes.exercise}
			style={{
				gridColumn: area,
				color: color === "dark" ? "var(--color-black-1)" : "var(--color-white)",
			}}
			data-aos="fade-up"
			data-aos-easing={easing}
			data-aos-delay={delay}
		>
			<img
				src={image}
				className={classes.exercise__image}
				alt="Trainer Performing Exercise"
			/>
			<div className={classes.exercise__content}>
				<h4 className={classes.exercise__subtitle}>{subtitle}</h4>
				<h3 className={classes.exercise__title}>{title}</h3>
			</div>
		</div>
	);
};

export default ExerciseItem;
