import React, { Fragment } from "react";
import { Hero, Manual, Highlight, Exercise } from "../../containers/Home";

const Home = () => {
	return (
		<Fragment>
			<Hero />
			<Manual />
			<Highlight />
			<Exercise />
		</Fragment>
	);
};

export default Home;
