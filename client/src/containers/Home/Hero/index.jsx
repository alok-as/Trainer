import React from "react";
import classes from "./index.module.scss";
import image1 from "../../../assets/images/Home/Hero/hero-1.jpg";
import Row from "../../../hoc/Row";
import { Heading, Button } from "../../../components/UI";

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.hero__slider}>
				<div className={classes.slide}>
					<img
						src={image1}
						className={classes.slide__image}
						alt="Trainer Posing"
					/>
					<Row>
						<div className={classes.slide__content}>
							<Heading color="light">The runner's life</Heading>
							<Heading type="primary" color="light">
								Expert <br /> Personal
								<br /> Fitness
								<br /> Trainer
							</Heading>
							<div className={classes.slide__button}>
								<Button>Read More</Button>
							</div>
						</div>
					</Row>
				</div>
			</div>
		</section>
	);
};

export default Hero;
