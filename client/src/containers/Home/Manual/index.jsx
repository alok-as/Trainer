import React from "react";
import classes from "./index.module.scss";
import Row from "../../../hoc/Row";
import { Heading, Button } from "../../../components/UI";
import image from "../../../assets/images/Home/Manual/manual-1.jpg";

const Manual = () => {
	const downloadPdf = () => {
		console.log("Pdf downloading");
	};

	return (
		<section className={classes.manual}>
			<Row>
				<div className={classes.manual__wrapper}>
					<div className={classes.manual__content}>
						<Heading type="tertiary" className={classes.manual__heading}>
							Free classes
						</Heading>
						<Heading type="secondary">Free Membership</Heading>
						<p className={classes.manual__paragraph}>
							Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
							sollicitudin, nascetur auci elit consequat ipsutissem niuis sed
							odio sit amet nibh vulputate cursus a pretium amet. Etiam rhoncus.
							Maecenas tempus, tellus eget condimentum rhoncus, gravida quam
							semper libero, sit amet sodales.
						</p>
						<Button>Download Pdf</Button>
					</div>
					<div className={classes.manual__banner} data-aos="fade-left">
						<img src={image} alt="Manual Pdf Cover" />
					</div>
				</div>
			</Row>
		</section>
	);
};

export default React.memo(Manual);
