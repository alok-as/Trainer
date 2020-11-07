import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import classes from "./index.module.scss";
import Row from "../../hoc/Row";
import { Logo, NavigationLink, Hamburger } from "../../components/UI";
import PropTypes from "prop-types";

const Header = ({ openSidebar, isVisible }) => {
	let finalClass = [classes.header];
	if (isVisible) {
		finalClass.push(classes.header__visible);
	}

	const [links, setLinks] = useState([
		{ id: uuid(), to: "/", name: "Home" },
		{ id: uuid(), to: "/gallery", name: "Gallery" },
		{ id: uuid(), to: "/classses", name: "Classes" },
		{ id: uuid(), to: "/", name: "Portfolio" },
		{ id: uuid(), to: "/", name: "Blog" },
		{ id: uuid(), to: "/", name: "Shop" },
		{ id: uuid(), to: "/", name: "Elements" },
	]);

	return (
		<header className={finalClass.join(" ")}>
			<Row className={classes.header__wrapper}>
				<Logo type="dark" />
				<nav className={classes.navigation}>
					<ul className={classes.navigation__list}>
						{links.map((link) => (
							<NavigationLink
								key={link.id}
								to={link.to}
								name={link.name}
								type="dark"
							/>
						))}
					</ul>
				</nav>
				<Hamburger onClick={openSidebar} type="dark" />
			</Row>
		</header>
	);
};

Header.defaultProps = {
	isVisible: false,
};

Header.propTypes = {
	openSidebar: PropTypes.func.isRequired,
	isVisible: PropTypes.bool,
};

export default React.memo(Header);
