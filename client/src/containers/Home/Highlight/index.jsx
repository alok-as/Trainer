import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import classes from "./index.module.scss";
import Row from "../../../hoc/Row";
import { HighlightCard } from "../../../components/Home";

const Highlight = () => {
	const [cards, setCards] = useState([
		{
			id: uuid(),
			title: "Body & Mind",
			content:
				"Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean lorem sollicitudin, auci elit nascetur.",
		},
		{
			id: uuid(),
			title: "Healthy Life",
			content:
				"Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean lorem sollicitudin, auci elit nascetur.",
		},
		{
			id: uuid(),
			title: "Strategies",
			content:
				"Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean lorem sollicitudin, auci elit nascetur.",
		},
		{
			id: uuid(),
			title: "Workout",
			content:
				"Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean lorem sollicitudin, auci elit nascetur.",
		},
	]);
	return (
		<section className={classes.highlight}>
			<Row>
				<div className={classes.highlight__cards}>
					{cards.map((card) => (
						<HighlightCard
							key={card.id}
							title={card.title}
							content={card.content}
						/>
					))}
				</div>
			</Row>
		</section>
	);
};

export default Highlight;
