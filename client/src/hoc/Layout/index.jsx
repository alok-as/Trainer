import React, { Fragment, useEffect, useState } from "react";
import classes from "./index.module.scss";
import { Route, Switch } from "react-router-dom";
import { Header, HeaderFixed, Footer } from "../../containers";
import { Sidebar } from "../../components/UI";
import { Home, Gallery } from "../../pages";

const Layout = () => {
	const [isNavbarVisible, setIsNavbarVisible] = useState(false);
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);

	let finalClassMain = [classes.layout__main];

	if (isSidebarVisible) {
		finalClassMain.push(classes.layout__collapse);
	}

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (isSidebarVisible) {
				setIsSidebarVisible(false);
			}
			closeOnScroll();
			if (window.scrollY > 500) {
				setIsNavbarVisible(true);
			} else {
				setIsNavbarVisible(false);
			}
		});
	}, []);

	const openSidebar = () => {
		setIsSidebarVisible(true);
	};

	const closeOnScroll = () => {
		setIsSidebarVisible(false);
	};

	const closeSidebar = () => {
		setIsSidebarVisible(false);
	};

	return (
		<div className={classes.layout}>
			<Sidebar isVisible={isSidebarVisible} closeSidebar={closeSidebar} />
			<main className={finalClassMain.join(" ")}>
				<HeaderFixed openSidebar={openSidebar} isVisible={isNavbarVisible} />
				<Header openSidebar={openSidebar} />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/gallery" component={Gallery} />
				</Switch>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
