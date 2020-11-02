import React from "react";
import classes from "./index.module.scss";
import Row from "../../../hoc/Row";
import { Button, Heading, Icon } from "../../../components/UI";
import image from "../../../assets/images/Home/Video/video-1.jpg";
import sprites from "../../../assets/icons/sprites.svg";

const Video = () => {
	return (
		<section className={classes.video}>
			<Row className={classes.video__wrapper}>
				<div className={classes.video__content}>
					<Heading type="tertiary" color="dark">
						My Video
					</Heading>
					<Heading type="secondary" color="dark">
						New Exercise
					</Heading>
					<p className={classes.video__paragraph}>
						Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
						sollicitu, nascetur auci elit consequat ipsutissem niuis sed odio
						sit amet nibh vulp cursus a pretium amet. Etiam rhoncus. Maecenas
						tempus, tellus eget condimentu rhoncus, gravida quam semper libero,
						sit amet adipiscing.
					</p>
					<Button>Read More</Button>
				</div>
				<div className={classes.video__preview}>
					<img src={image} alt="Trainer workout preview" />
					<div className={classes.video__button}>
						<Icon
							icon={`${sprites}#icon-play_arrow`}
							iconStyle={classes.video__icon}
						></Icon>
					</div>
				</div>
			</Row>
		</section>
	);
};

export default React.memo(Video);
