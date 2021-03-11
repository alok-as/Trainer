import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { markAttendance } from "../../../redux/reducers/Auth/actions";
import classes from "./index.module.scss";
import logo from "../../../assets/images/Auth/logo.jpg";
import { InputField } from "../../../components/Auth";
import { Button } from "../../../components/UI";

const Attendance = ({ match, history }) => {
	const [memberId, setMemberId] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("8755595964");

	const dispatch = useDispatch();

	const markUserAttendance = (event) => {
		event.preventDefault();
		if (phoneNumber.length) {
			const info = {
				phoneNumber,
				type: "phoneNumber",
			};

			dispatch(markAttendance(info));
			history.push({
				pathname: "/auth/user/thankyou",
				state: { title: "attendance" },
			});
		}
	};

	return (
		<div className={classes.attendance}>
			<div className={classes.attendance__brand}>
				<img className={classes.attendance__logo} src={logo} alt="Brand" />
			</div>
			<form className={classes.attendance__form}>
				<InputField
					type="text"
					placeholder="Membership ID"
					value={memberId}
					onChange={(event) => setMemberId(event.target.value)}
				/>
				<div className={classes.attendance__divider}>Or</div>
				<InputField
					type="text"
					placeholder="Phone Number"
					value={phoneNumber}
					onChange={(event) => setPhoneNumber(event.target.value)}
				/>
				<div className={classes.attendance__mark}>
					<Button
						className={classes.attendance__button}
						onClick={markUserAttendance}
					>
						Mark Attendance
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Attendance;
