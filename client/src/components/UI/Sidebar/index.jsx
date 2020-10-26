import React, { Fragment } from "react";
import classes from "./index.module.scss";
import { Modal } from "../index";
import PropTypes from "prop-types";

const Sidebar = ({ isVisible, closeSidebar }) => {
	return (
		<Fragment>
			<Modal isVisible={isVisible}>
				<aside className={classes.sidebar}>
					<div className={classes.sidebar__wrapper}>
						<div className={classes.sidebar__header}>
							<h5 className={classes.sidebar__heading}>Echo</h5>
							<div className={classes.sidebar__close} onClick={closeSidebar}>
								X
							</div>
						</div>
						<div className={classes.sidebar__content}>
							<p className={classes.sidebar__paragraph}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
								tempore quidem illo neque, inventore ratione dolorum sunt
								mollitia.
							</p>
							<ul className={classes.sidebar__list}>
								<li className={classes.sidebar__item}>1-677-124-44227</li>
								<li className={classes.sidebar__item}>Info@Yourbusiness.com</li>
								<li className={classes.sidebar__item}>
									184 Main Collins street west victoria 8007
								</li>
							</ul>
						</div>
						<div className={classes.sidebar__footer}>
							<p className={classes.sidebar__foot_text}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							</p>
						</div>
					</div>
				</aside>
			</Modal>
		</Fragment>
	);
};

Sidebar.defaultProps = {
	isVisible: false,
};

Sidebar.propTypes = {
	isVisible: PropTypes.bool,
	closeSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
