import React from "react";
import classes from "./index.module.scss";
import { Heading, InputField } from "../index";

const PersonalDetails = ({ fields, onChange }) => {
	return (
		<section className={classes.personal}>
			<Heading>
				Sign up Now,
				<br />
				The Dumbells are waiting for you.
			</Heading>
			<form className={classes.personal__form}>
				{fields.map((field) => (
					<InputField
						key={field.id}
						type={field.type}
						placeholder={field.placeholder}
						value={field.value}
						onChange={(event) => onChange(event, field.name)}
						className={classes.personal__field}
					/>
				))}
			</form>
		</section>
	);
};

export default PersonalDetails;
