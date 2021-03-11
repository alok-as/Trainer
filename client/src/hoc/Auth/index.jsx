import React from "react";
import classes from "./index.module.scss";
import { Register, Welcome, ThankYou } from "../../pages";
// import { Testing } from "../../containers/Auth";
import { Switch, Route } from "react-router-dom";

const Auth = ({ history, match }) => {
	return (
		<div className={classes.auth}>
			<Switch>
				<Route path={match.url} exact component={Welcome} />
				<Route path={`${match.url}/register`} component={Register} />
				<Route path={`${match.url}/thankyou`} component={ThankYou} />
				{/* <Route path={`${match.url}/testing`} component={Testing} /> */}
			</Switch>
		</div>
	);
};

export default Auth;
