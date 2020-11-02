import React from "react";
import classes from "./index.module.scss";
import { Heading } from "../../UI";

const BMIChart = () => {
	return (
		<div className={classes.bmi__chart}>
			<Heading type="tertiary" color="light">
				Bmi calculator chart
			</Heading>
			<table className={classes.table}>
				<thead>
					<tr className={classes.table__row}>
						<th className={classes.table__heading}>BMI</th>
						<th className={classes.table__heading}>Weight Status</th>
					</tr>
				</thead>
				<tbody>
					<tr className={classes.table__row}>
						<td className={classes.table__data}>Below 18.5</td>
						<td className={classes.table__data}>Underweight</td>
					</tr>
					<tr className={classes.table__row}>
						<td className={classes.table__data}>18.5 - 24.9</td>
						<td className={classes.table__data}>Healthy</td>
					</tr>
					<tr className={classes.table__row}>
						<td className={classes.table__data}>25.0 - 29.9</td>
						<td className={classes.table__data}>Overweight</td>
					</tr>
					<tr className={classes.table__row}>
						<td className={classes.table__data}>30.0 - and Above</td>
						<td className={classes.table__data}>Obese</td>
					</tr>
				</tbody>
			</table>
			<p className={classes.table__foot}>
				* <strong>BMR</strong> Body Metabolic Rate / <strong>BMI</strong> Body
				Mass Index
			</p>
		</div>
	);
};

export default BMIChart;
