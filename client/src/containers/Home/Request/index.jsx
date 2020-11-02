import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import classes from "./index.module.scss";
import Row from "../../../hoc/Row";
import { Heading, InputField, Button } from "../../../components/UI";

const Request = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [message, setMessage] = useState("");

	const [fields, setfields] = useState([
		{
			key: uuid(),
			type: "text",
			value: name,
			placeholder: "Your Full name",
			onChange: (event) => setName(event.target.value),
		},
		{
			key: uuid(),
			type: "text",
			value: email,
			placeholder: "Your Email address",
			onChange: (event) => setEmail(event.target.value),
		},
		{
			key: uuid(),
			type: "text",
			value: subject,
			placeholder: "Your Query Subject",
			onChange: (event) => setSubject(event.target.value),
		},
		{
			key: uuid(),
			type: "text",
			value: phoneNumber,
			placeholder: "Your PhoneNumber",
			onChange: (event) => setPhoneNumber(event.target.value),
		},
		{
			key: uuid(),
			type: "textarea",
			placeholder: "Write your message here",
			onChange: (event) => setMessage(event.target.value),
		},
	]);

	return (
		<section className={classes.request}>
			<Row>
				<div className={classes.request__header}>
					<Heading type="tertiary" color="light">
						Healthy way to live
					</Heading>
					<Heading type="secondary" color="light">
						Start your project
					</Heading>
				</div>
				<form className={classes.request__form}>
					{fields.map((field) => (
						<InputField {...field} />
					))}
				</form>
				<div className={classes.request__button}>
					<Button>Send Request</Button>
				</div>
			</Row>
		</section>
	);
};

export default Request;
