import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
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
	useEffect(() => {
		Aos.init({
			duration: 600,
			offset: 280,
			easing: "ease-in-sine",
			// once: true,
		});
	}, []);
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
