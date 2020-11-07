import React from "react";
import classes from "./index.module.scss";

const Modal = ({ isVisible, children }) => {
	const finalClass = [classes.modal];
	if (isVisible) {
		finalClass.push(classes.modal__visible);
	}
	return <div className={finalClass.join(" ")}>{children}</div>;
};

export default Modal;
