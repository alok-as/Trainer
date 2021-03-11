import React from "react";
import classes from "./index.module.scss";
import { Button } from "../../components/UI";

const ThankYou = ({ history, location }) => {
	const backToWelcome = () => {
		history.replace("/auth/user");
	};

	const { title } = location.state;

	return (
		<div className={classes.thankyou}>
			<div className={classes.thankyou__content}>
				<div className={classes.thankyou__status}></div>
				<h4 className={classes.thankyou__title}>
					{title === "register" ? "Thank You!" : "Good Luck!"}
				</h4>
				<blockquote className={classes.thankyou__quote}>
					{title === "register"
						? " You have successfully register for Fitness Factor. We look forward to work with you on your fitness journey"
						: "If you want something you’ve never had, you must be willing to do something you’ve never done."}
				</blockquote>
				<Button onClick={backToWelcome}>Back</Button>
			</div>
		</div>
	);
};

export default ThankYou;
