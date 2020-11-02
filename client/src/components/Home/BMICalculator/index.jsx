import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import classes from "./index.module.scss";
import { Heading, InputField, Button } from "../../UI";

const BMICalculator = () => {
	const [height, setHeight] = useState("");
	const [weight, setWeight] = useState("");
	const [age, setAge] = useState("");
	const [sex, setSex] = useState("");

	const [fields, setfields] = useState([
		{
			key: uuid(),
			type: "text",
			placeholder: "Height / cm",
			onChange: (event) => setHeight(event.target.value),
		},
		{
			key: uuid(),
			type: "text",
			placeholder: "Weight / kg",
			onChange: (event) => setWeight(event.target.value),
		},
		{
			key: uuid(),
			type: "text",
			placeholder: "Age",
			onChange: (event) => setAge(event.target.value),
		},
		{
			key: uuid(),
			type: "text",
			placeholder: "Sex",
			onChange: (event) => setSex(event.target.value),
		},
	]);

	return (
		<div className={classes.bmi__calculator}>
			<Heading type="tertiary" color="light">
				Calculate your BMI
			</Heading>
			<p className={classes.bmi__paragraph}>
				Your BMR calculator generates the number of calories your body burns per
				day at rest. Your BMR with activity factor is the number of calories
				your body burns per day based on the activity factor you selected.
			</p>
			<form className={classes.bmi__form}>
				{fields.map((field) => (
					<InputField className={classes.bmi__field} {...field} />
				))}
				<div className={classes.bmi__button}>
					<Button>Calculate</Button>
				</div>
			</form>
		</div>
	);
};

export default BMICalculator;
