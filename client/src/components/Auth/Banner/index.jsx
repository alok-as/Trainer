import React, { useState, useEffect } from "react";
import classes from "./index.module.scss";

const Banner = ({ slides }) => {
	const [activeSlide, setactiveSlide] = useState(1);
	const changeSlide = () => {};

	return (
		<div className={classes.banner}>
			{slides.map((slide) => (
				<div key={slide.id} className={classes.banner__image}>
					<img src={slide.image} alt="Fitness Model" />
				</div>
			))}
		</div>
	);
};

export default Banner;
