import React, { Fragment } from "react";
import classes from "./index.module.scss";

const InputField = ({ type, placeholder, value, onChange, className }) => {
	let field = null;
	let finalClass = [classes.field];

	if (className) {
		finalClass.push(className);
	}

	switch (type) {
		case "text":
		case "email":
		case "password":
			field = (
				<input
					type={type}
					className={finalClass.join(" ")}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			);
			break;
		default:
			field = (
				<input
					type="text"
					className={finalClass.join(" ")}
					placeholder="Placeholder"
				/>
			);
	}

	return <Fragment>{field}</Fragment>;
};

export default InputField;
