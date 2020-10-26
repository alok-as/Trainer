import React from "react";
import classes from "./index.module.scss";

const Modal = ({ isVisible, children }) => {
	return isVisible ? <div className={classes.modal}>{children}</div> : null;
};

export default Modal;
