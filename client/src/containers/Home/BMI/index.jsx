import React from "react";
import classes from "./index.module.scss";
import Row from "../../../hoc/Row";
import { BMIChart, BMICalculator } from "../../../components/Home";

const BMI = () => {
	return (
		<section className={classes.bmi}>
			<Row className={classes.bmi__wrapper}>
				<BMIChart />
				<BMICalculator />
			</Row>
		</section>
	);
};

export default React.memo(BMI);
