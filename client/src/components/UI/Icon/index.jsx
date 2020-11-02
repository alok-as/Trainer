import React from "react";

export default function Icon({ icon, iconStyle }) {
	return (
		<svg className={iconStyle}>
			<use xlinkHref={icon}></use>
		</svg>
	);
}
