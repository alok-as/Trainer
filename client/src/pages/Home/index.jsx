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

const Home = () => {
	const checkInternetSpeed = () => {
		const imageLink =
			"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";
		const size = 5616998;

		const image = new Image();
		image.onload = () => {
			const endTime = new Date().getTime();
			parseTime(startTime, endTime, size);
		};
		const startTime = new Date().getTime();
		image.src = imageLink;
	};

	const parseTime = (startTime, endTime, size) => {
		const duration = (endTime - startTime) / 1000;
		console.log("Duration", duration);
		const loadedBits = size * 8;

		const bps = (loadedBits / duration).toFixed(2);
		const kbps = (bps / 1024).toFixed(2);
		const mbps = (kbps / 1024).toFixed(2);

		console.log("Network Speed", {
			bps,
			kbps,
			mbps,
		});
	};

	useEffect(() => {
		Aos.init({
			duration: 600,
			offset: 280,
			easing: "ease-in-sine",
		});
		checkInternetSpeed();
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
		</Fragment>
	);
};

export default Home;
