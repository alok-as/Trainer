import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import classes from "./index.module.scss";
import image1 from "../../../assets/images/Home/Hero/hero-1.jpg";
import Row from "../../../hoc/Row";
import { Heading, Button, Icon } from "../../../components/UI";
import sprites from "../../../assets/icons/sprites.svg";
import { HeroCard } from "../../../components/Home";
import { useDispatch, useSelector } from "react-redux";
import { getContactCard } from "../../../redux/reducers/Testing/actions";
import { saveAs } from "file-saver";

const Hero = () => {
	const [cards, setCards] = useState([
		{
			id: uuid(),
			icon: `${sprites}#icon-whatshot`,
			title: "Training",
			content:
				"Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship",
			color: "#82cc0e",
		},
		{
			id: uuid(),
			icon: `${sprites}#icon-trophy`,
			title: "Workout",
			content:
				"Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship",
			color: "#4cdad8",
		},
		{
			id: uuid(),
			icon: `${sprites}#icon-bolt`,
			title: "Building",
			content:
				"Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship",
			color: "#f0494c",
		},
	]);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getContactCard());
	}, [dispatch]);

	const { loading, error, card, name } = useSelector(
		(state) => state.contactCard
	);

	const testing = () => {
		const contactCard = new Blob([card], {
			// type: "text/x-vCard;charset=iso-8859-1",
			type: "text/vcard;charset=utf-8",
		});
		saveAs(contactCard, "AlokHero.vcf");
	};

	return (
		<section className={classes.hero} id="hero">
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
								<Button onClick={testing}>Read More</Button>
							</div>
						</div>
					</Row>
				</div>
				<div className={classes.slide__previous}>
					<Icon
						icon={`${sprites}#icon-arrow_back_ios`}
						iconStyle={classes.slide__icon}
					/>
				</div>
				<div className={classes.slide__next}>
					<Icon
						icon={`${sprites}#icon-arrow_forward_ios`}
						iconStyle={classes.slide__icon}
					/>
				</div>
			</div>
			<div className={classes.hero__cards}>
				{cards.map((card) => (
					<HeroCard
						key={card.id}
						icon={card.icon}
						title={card.title}
						color={card.color}
					/>
				))}
			</div>
		</section>
	);
};

export default React.memo(Hero);
