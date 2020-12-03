import React from "react";
import classes from "./index.module.scss";
import { Heading, InputField } from "../index";

const BodyInfo = ({ fields, onChange }) => {
	console.log(fields);
	const ageGenderFields = fields.slice(0, 2);
	const weightHeightFields = fields.slice(2, 4);
	const martialField = fields[fields.length - 1];

	return (
		<section className={classes.body}>
			<Heading>
				Just a few more details,
				<br />
				Before you do that pushup.
			</Heading>
			<form className={classes.body__form}>
				<div className={classes.body__division}>
					{ageGenderFields.map((field) => (
						<InputField
							key={field.id}
							type={field.type}
							placeholder={field.placeholder}
							value={field.value}
							onChange={(event) => onChange(event, field.name)}
							className={classes.body__field}
						/>
					))}
				</div>
				<div className={classes.body__division}>
					{weightHeightFields.map((field) => (
						<InputField
							key={field.id}
							type={field.type}
							placeholder={field.placeholder}
							value={field.value}
							onChange={(event) => onChange(event, field.name)}
							className={classes.body__field}
						/>
					))}
				</div>
				<div className={classes.body__division}>
					<InputField
						key={martialField.id}
						type={martialField.type}
						placeholder={martialField.placeholder}
						value={martialField.value}
						className={classes.body__field}
						onChange={(event) => onChange(event, martialField.name)}
					/>
				</div>
			</form>
		</section>
	);
};

export default BodyInfo;
