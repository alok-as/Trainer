import React from "react";
import classes from "./index.module.scss";

const InputField = ({ className, type, value, placeholder, onChange }) => {
	let finalClass = [classes.field__text];
	if (className) {
		finalClass.push(className);
	}
	switch (type) {
		case "textarea":
			return (
				<textarea
					className={classes.field__area}
					placeholder={placeholder}
					onChange={onChange}
				></textarea>
			);
		default:
			return (
				<input
					className={finalClass.join(" ")}
					type={type}
					placeholder={placeholder}
					onChange={onChange}
				/>
			);
	}
};

export default InputField;
