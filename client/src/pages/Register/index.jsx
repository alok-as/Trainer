import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import banner1 from "../../assets/images/Auth/banner-1.jpg";
import banner2 from "../../assets/images/Auth/banner-2.jpg";
import banner3 from "../../assets/images/Auth/banner-3.jpg";

import classes from "./index.module.scss";
import { Icon } from "../../components/UI";
import sprites from "../../assets/icons/sprites.svg";
import { Banner } from "../../components/Auth";
import { RegisterForm } from "../../containers/Auth";

const Register = ({ history, match }) => {
	const [slides, setSlides] = useState([
		{ id: uuid(), image: banner1 },
		// { id: uuid(), image: banner2 },
		// { id: uuid(), image: banner3 },
	]);

	const switchToWelcome = () => {
		history.replace("/auth/user");
	};

	return (
		<section className={classes.register} id="register">
			<div className={classes.register__back} onClick={switchToWelcome}>
				<Icon
					icon={`${sprites}#icon-keyboard_arrow_left`}
					iconStyle={classes.register__icon}
				/>
				<span> Back</span>
			</div>
			<Banner slides={slides} />
			<RegisterForm />
		</section>
	);
};

export default Register;
