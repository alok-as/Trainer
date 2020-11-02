import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import classes from "./index.module.scss";
import Row from "../../hoc/Row";
import { Logo, NavigationLink, Hamburger } from "../../components/UI";
import PropTypes from "prop-types";

const Header = ({ openSidebar }) => {
	console.log("Header is rendered");
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
		<header className={classes.header}>
			<Row>
				<div className={classes.header__wrapper}>
					<Logo />
					<nav className={classes.navigation}>
						<ul className={classes.navigation__list}>
							{links.map((link) => (
								<NavigationLink key={link.id} to={link.to} name={link.name} />
							))}
						</ul>
					</nav>
					<Hamburger onClick={openSidebar} />
				</div>
			</Row>
		</header>
	);
};

Header.propTypes = {
	openSidebar: PropTypes.func.isRequired,
};

export default React.memo(Header);
