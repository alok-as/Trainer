import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import classes from "./index.module.scss";
import image1 from "../../../assets/images/Home/Hero/hero-1.jpg";
import Row from "../../../hoc/Row";
import { Heading, Button } from "../../../components/UI";
import { HeroCard } from "../../../components/Home";

const Hero = () => {
	const [cards, setCards] = useState([
		{
			id: uuid(),
			title: "Training",
			content:
				"Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship",
			color: "#82cc0e",
		},
		{
			id: uuid(),
			title: "Workout",
			content:
				"Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship",
			color: "#4cdad8",
		},
		{
			id: uuid(),
			title: "Building",
			content:
				"Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship",
			color: "#f0494c",
		},
	]);
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
			<div className={classes.hero__cards}>
				{cards.map((card) => (
					<HeroCard key={card.id} title={card.title} color={card.color} />
				))}
			</div>
		</section>
	);
};

export default Hero;
