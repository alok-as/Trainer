import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../../containers";
import { Sidebar } from "../../components/UI";
import { Home, Gallery } from "../../pages";

const Layout = () => {
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);

	const openSidebar = () => {
		setIsSidebarVisible(true);
	};

	const closeSidebar = () => {
		setIsSidebarVisible(false);
	};

	return (
		<Fragment>
			<Header openSidebar={openSidebar} />
			<Sidebar isVisible={isSidebarVisible} closeSidebar={closeSidebar} />
			<main>
				<Switch>
					<Route path="/" component={Home} />
					<Route path="/gallery" component={Gallery} />
				</Switch>
			</main>
			<footer>Footer</footer>
		</Fragment>
	);
};

export default Layout;
