import React, { Fragment } from "react";
import {
	Hero,
	Manual,
	Highlight,
	Exercise,
	Video,
	BMI,
	Testimonials,
	Request,
} from "../../containers/Home";
import { ScrollToTop } from "../../components/UI";

const Home = () => {
	return (
		<Fragment>
			<Hero />
			<Manual />
			<Highlight />
			<Exercise />
			<Video />
			<BMI />
			<Testimonials />
			<Request />
			<ScrollToTop />
		</Fragment>
	);
};

export default Home;
