import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import logo1 from "../../../assets/images/Home/Testimonials/testimonials-logo-1.png";
import logo2 from "../../../assets/images/Home/Testimonials/testimonials-logo-2.png";
import logo3 from "../../../assets/images/Home/Testimonials/testimonials-logo-3.png";
import image1 from "../../../assets/images/Home/Testimonials/testimonials-1.png";
import image2 from "../../../assets/images/Home/Testimonials/testimonials-2.png";
import image3 from "../../../assets/images/Home/Testimonials/testimonials-3.png";
import classes from "./index.module.scss";
import Row from "../../../hoc/Row";
import { Heading } from "../../../components/UI";
import { TestimonialsCard } from "../../../components/Home";

const Testimonials = () => {
	const [cards, setCards] = useState([
		{
			id: uuid(),
			company: logo1,
			title: "Free Classes",
			review:
				"Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem auci elit consequat ipsut sem niuis sed.",
			profile: image1,
			name: "Nina Moritz",
			designation: "Journalist",
		},
		{
			id: uuid(),
			company: logo2,
			title: "Excellent Work",
			review:
				"Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem auci elit consequat ipsut sem niuis sed.",
			profile: image2,
			name: "Anna Atkins",
			designation: "Expert",
		},
		{
			id: uuid(),
			company: logo3,
			title: "Best Program",
			review:
				"Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem auci elit consequat ipsut sem niuis sed.",
			profile: image3,
			name: "Sara Morgan",
			designation: "Nutritionist",
		},
	]);
	return (
		<section className={classes.testimonials}>
			<Row>
				<div className={classes.testimonials__header}>
					<Heading type="tertiary" color="dark">
						Fitness Expert
					</Heading>
					<Heading type="secondary">Client Testimonials</Heading>
				</div>
				<div className={classes.testimonials__cards}>
					{cards.map((card) => (
						<TestimonialsCard key={card.id} {...card} />
					))}
				</div>
			</Row>
		</section>
	);
};

export default Testimonials;
