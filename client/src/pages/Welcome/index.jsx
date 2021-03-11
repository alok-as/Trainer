import React from "react";
import classes from "./index.module.scss";
import { NewMember } from "../../components/Auth";
import { Attendance } from "../../containers/Auth";

const Welcome = ({ history, match }) => {
	const switchToRegisterForm = () => {
		history.push(`${match.url}/register`);
	};

	return (
		<section className={classes.welcome}>
			<NewMember switchToRegister={switchToRegisterForm} />
			<Attendance history={history} match={match} />
		</section>
	);
};

export default Welcome;
