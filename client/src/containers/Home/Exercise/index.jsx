import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import classes from "./index.module.scss";
import { Heading } from "../../../components/UI";
import { ExerciseItem } from "../../../components/Home";
import image1 from "../../../assets/images/Home/Exercise/exercise-1.jpg";
import image2 from "../../../assets/images/Home/Exercise/exercise-2.jpg";
import image3 from "../../../assets/images/Home/Exercise/exercise-3.jpg";
import image4 from "../../../assets/images/Home/Exercise/exercise-4.jpg";
import image5 from "../../../assets/images/Home/Exercise/exercise-5.jpg";
import image6 from "../../../assets/images/Home/Exercise/exercise-6.jpg";

const Excercise = () => {
	const [exercises, setExercises] = useState([
		{ id: uuid(), delay: 300, image: image1 },
		{
			id: uuid(),
			delay: 600,
			image: image2,
			subtitle: "Basic",
			title: "Body balance",
			color: "dark",
		},
		{
			id: uuid(),
			delay: 1000,
			easing: "ease-in-quad",
			image: image3,
			area: "3/5",
			subtitle: "Work out",
			title: "3 steps to loosing weight",
			color: "light",
		},
		{
			id: uuid(),
			delay: 300,
			image: image4,
			subtitle: "Goals",
			title: "Weight Lifting",
			color: "light",
		},
		{
			id: uuid(),
			delay: 600,
			image: image5,
			area: "2/4",
			subtitle: "Start with basic",
			title: "Power Overwhelming",
			color: "light",
		},
		{
			id: uuid(),
			delay: 1000,
			easing: "ease-in-quad",
			image: image6,
		},
	]);
	return (
		<section className={classes.exercise}>
			<div className={classes.exercise__header}>
				<Heading type="tertiary">Find your exercise</Heading>
				<Heading type="secondary">Training & Exercise</Heading>
			</div>
			<div className={classes.exercise__grid}>
				{exercises.map((exercise) => (
					<ExerciseItem
						key={exercise.id}
						delay={exercise.delay}
						easing={exercise.easing}
						image={exercise.image}
						subtitle={exercise.subtitle}
						title={exercise.title}
						color={exercise.color}
						area={exercise.area}
					/>
				))}
			</div>
		</section>
	);
};

export default React.memo(Excercise);
