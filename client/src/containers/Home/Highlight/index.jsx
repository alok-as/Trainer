import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import image1 from "../../../assets/images/Home/Highlight/highlight-1.jpg";
import image2 from "../../../assets/images/Home/Highlight/highlight-2.jpg";
import image3 from "../../../assets/images/Home/Highlight/highlight-3.jpg";
import image4 from "../../../assets/images/Home/Highlight/highlight-4.jpg";
import classes from "./index.module.scss";
import Row from "../../../hoc/Row";
import { HighlightCard } from "../../../components/Home";

const Highlight = () => {
	const [cards, setCards] = useState([
		{
			id: uuid(),
			delay: 250,
			image: image1,
			title: "Body & Mind",
			content:
				"Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean lorem sollicitudin, auci elit nascetur.",
		},
		{
			id: uuid(),
			image: image2,
			delay: 500,
			title: "Healthy Life",
			content:
				"Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean lorem sollicitudin, auci elit nascetur.",
		},
		{
			id: uuid(),
			delay: 750,
			image: image3,
			title: "Strategies",
			content:
				"Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean lorem sollicitudin, auci elit nascetur.",
		},
		{
			id: uuid(),
			delay: 1000,
			image: image4,
			title: "Workout",
			content:
				"Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean lorem sollicitudin, auci elit nascetur.",
		},
	]);
	return (
		<section className={classes.highlight}>
			<Row className={classes.highlight__cards}>
				{cards.map((card) => (
					<HighlightCard
						key={card.id}
						delay={card.delay}
						image={card.image}
						title={card.title}
						content={card.content}
					/>
				))}
			</Row>
		</section>
	);
};

export default React.memo(Highlight);
