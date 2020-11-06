import React from "react";
import classes from "./index.module.scss";
import Row from ".././../hoc/Row";
import { Heading, Icon, Thumbnail } from "../../components/UI";
import sprites from "../../assets/icons/sprites.svg";
import article1 from "../../assets/images/Footer/article-1.jpg";
import article2 from "../../assets/images/Footer/article-2.jpg";
import insta1 from "../../assets/images/Footer/instagram-1.jpg";
import insta2 from "../../assets/images/Footer/instagram-2.jpg";
import insta3 from "../../assets/images/Footer/instagram-3.jpg";
import insta4 from "../../assets/images/Footer/instagram-4.jpg";
import insta5 from "../../assets/images/Footer/instagram-5.jpg";
import insta6 from "../../assets/images/Footer/instagram-6.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<Row className={classes.footer__grid}>
				<div className={classes.footer__contact}>
					<Heading
						type="tertiary"
						color="light"
						className={classes.footer__heading}
					>
						Top Fit
					</Heading>
					<p className={classes.footer__paragraph}>
						Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
						sollicitudin lorem auci elit consequ.
					</p>
					<p className={classes.footer__call}>
						<Icon
							icon={`${sprites}#icon-call`}
							iconStyle={classes.footer__icon}
						/>
						1-677-124-44227
					</p>
				</div>
				<div className={classes.footer__articles}>
					<Heading
						type="tertiary"
						color="light"
						className={classes.footer__heading}
					>
						Latest Articles
					</Heading>
					<div className={classes.article}>
						<Thumbnail image={article1} className={classes.article__spacing} />
						<div className={classes.article__content}>
							<h6 className={classes.article__title}>Total body Workout</h6>
							<p className={classes.article__date}>11.8.2020</p>
						</div>
					</div>
					<div className={classes.article}>
						<Thumbnail image={article2} className={classes.article__spacing} />
						<div className={classes.article__content}>
							<h6 className={classes.article__title}>Tactics for Success</h6>
							<p className={classes.article__date}>15.8.2020</p>
						</div>
					</div>
				</div>
				<div className={classes.footer__images}>
					<Heading
						type="tertiary"
						color="light"
						className={classes.footer__heading}
					>
						Instagram
					</Heading>
					<div className={classes.footer__subgrid}>
						<Thumbnail image={insta1} className={classes.footer__insta} />
						<Thumbnail image={insta2} className={classes.footer__insta} />
						<Thumbnail image={insta3} className={classes.footer__insta} />
						<Thumbnail image={insta4} className={classes.footer__insta} />
						<Thumbnail image={insta5} className={classes.footer__insta} />
						<Thumbnail image={insta6} className={classes.footer__insta} />
					</div>
				</div>
				<div className={classes.footer__newsletter}>
					<Heading
						type="tertiary"
						color="light"
						className={classes.footer__heading}
					>
						NewsLetter
					</Heading>
					<p className={classes.footer__paragraph}>
						Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
						sollicitudin lorem auci elit consequ.
					</p>
				</div>
			</Row>
			<div className={classes.bottom}>
				<Row className={classes.bottom__wrapper}>
					<p className={classes.bottom__text}>&copy; Copyright Shaad Malik</p>
					<p className={classes.bottom__follow}>Follow Us on</p>
					<div className={classes.bottom__links}>
						<Link className={classes.bottom__link}>
							<Icon
								icon={`${sprites}#icon-social-twitter`}
								iconStyle={classes.bottom__icon}
							/>
						</Link>
						<Link className={classes.bottom__link}>
							<Icon
								icon={`${sprites}#icon-social-facebook`}
								iconStyle={classes.bottom__icon}
							/>
						</Link>
						<Link className={classes.bottom__link}>
							<Icon
								icon={`${sprites}#icon-instagram`}
								iconStyle={classes.bottom__icon}
							/>
						</Link>
						<Link className={classes.bottom__link}>
							<Icon
								icon={`${sprites}#icon-social-linkedin`}
								iconStyle={classes.bottom__icon}
							/>
						</Link>
					</div>
				</Row>
			</div>
		</footer>
	);
};

export default Footer;
