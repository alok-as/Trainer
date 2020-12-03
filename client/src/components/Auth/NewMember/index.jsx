import React from "react";
import classes from "./index.module.scss";
import { Button } from "../../UI";

const NewMember = ({ switchToRegister }) => {
	return (
		<div className={classes.new_member}>
			<h2 className={classes.new_member__heading}>
				<span className={classes.new_member__heading_primary}>Welcome to</span>
				<br />
				<span className={classes.new_member__heading_secondary}>
					Fitness Factor
				</span>
			</h2>
			<small className={classes.new_member__subheading}>
				A Maker of Fine bodies and Spirits
			</small>
			<div className={classes.new_member__member}>
				<p className={classes.new_member__text}>Don't have an account?</p>
				<Button
					className={classes.new_member__button}
					onClick={switchToRegister}
				>
					Sign Up
				</Button>
			</div>
		</div>
	);
};

export default NewMember;
