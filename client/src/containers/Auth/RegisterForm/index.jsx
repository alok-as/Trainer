import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

import strength from "../../../assets/images/Auth/strength.png";
import muscle from "../../../assets/images/Auth/muscle.png";
import fat from "../../../assets/images/Auth/fat.png";
import fit from "../../../assets/images/Auth/fit.png";

import classes from "./index.module.scss";
import { dataURItoBlob, updatedObject } from "../../../utility";
import { registerUser } from "../../../redux/reducers/Auth/actions";

import {
	PersonalDetails,
	BodyInfo,
	Selfie,
	Goals,
} from "../../../components/Auth";
import { Button } from "../../../components/UI";

const RegisterForm = (props) => {
	const [step, setStep] = useState(1);
	const history = useHistory();

	const [fields, setFields] = useState({
		name: {
			id: uuid(),
			type: "text",
			name: "name",
			placeholder: "Name",
			value: "Alok",
		},
		phoneNumber: {
			id: uuid(),
			type: "text",
			name: "phoneNumber",
			placeholder: "Phone",
			value: "8755595964",
		},
		address: {
			id: uuid(),
			type: "text",
			name: "address",
			placeholder: "Address",
			value: "RZ D-2 129 Street no-4 Mahavir Enclave",
		},
		email: {
			id: uuid(),
			type: "email",
			name: "email",
			placeholder: "Email",
			value: "alok.sharma61630@gmail.com",
		},
		dateOfBirth: {
			id: uuid(),
			type: "text",
			name: "dateOfBirth",
			placeholder: "Date of Birth",
			value: "11/08/1999",
		},
		age: {
			id: uuid(),
			type: "text",
			name: "age",
			placeholder: "Age",
			value: "21",
		},
		gender: {
			id: uuid(),
			type: "text",
			name: "gender",
			placeholder: "Gender",
			value: "Male",
		},
		weight: {
			id: uuid(),
			type: "text",
			name: "weight",
			placeholder: "Weight",
			value: "74",
		},
		height: {
			id: uuid(),
			type: "text",
			name: "height",
			placeholder: "Height",
			value: "172",
		},
		martialStatus: {
			id: uuid(),
			type: "text",
			name: "martialStatus",
			placeholder: "Martial Status",
			value: "Single",
		},
	});

	const fieldsArray = Object.keys(fields).map((key) => {
		return { ...fields[key] };
	});
	const personalFields = fieldsArray.slice(0, 5);
	const bodyFields = fieldsArray.slice(5);

	const [isSelfieTaking, setIsSelfieTaking] = useState(false);
	const [selfie, setSelfie] = useState(null);

	const [goals, setGoals] = useState([
		{ id: uuid(), image: strength, title: "Strength Training" },
		{ id: uuid(), image: muscle, title: "Muscle Gain" },
		{ id: uuid(), image: fat, title: "Fat Loss" },
		{ id: uuid(), image: fit, title: "Fit for Life" },
	]);

	const [errors, setErrors] = useState({
		nameError: "",
		phoneNumberError: "",
		addressError: "",
		emailError: "",
		dateOfBirthError: "",
	});

	const fieldsOnChangeHandler = (event, input) => {
		const updatedField = updatedObject(fields[input], {
			value: event.target.value,
		});

		const updatedFields = updatedObject(fields, {
			[input]: updatedField,
		});

		setFields(updatedFields);
	};

	const changeStep = (step) => {
		setStep(step);
	};

	const previousStep = (step) => {
		setStep(step);
	};

	const dispatch = useDispatch();
	const { loading, user, error, success } = useSelector(
		(state) => state.register
	);

	const checkFormValidation = (step) => {
		switch (step - 1) {
			case 1:
				break;
			default:
				break;
		}
	};

	const submitForm = () => {
		const formData = new FormData();

		formData.append("name", fields.name.value);
		formData.append("phoneNumber", fields.phoneNumber.value);
		formData.append("address", fields.address.value);
		formData.append("email", fields.email.value);
		formData.append("dateOfBirth", fields.dateOfBirth.value);
		formData.append("age", fields.age.value);
		formData.append("gender", fields.gender.value);
		formData.append("weight", fields.weight.value);
		formData.append("height", fields.height.value);
		formData.append("profilePic", dataURItoBlob(selfie));

		dispatch(registerUser(formData));
		history.push({
			pathname: "/auth/user/thankyou",
			state: { title: "register" },
		});
	};

	let form = null;
	let buttons = null;

	switch (step) {
		case 1:
			form = (
				<PersonalDetails
					fields={personalFields}
					onChange={fieldsOnChangeHandler}
				/>
			);
			buttons = <Button onClick={() => changeStep(2)}>Next</Button>;
			break;
		case 2:
			form = <BodyInfo fields={bodyFields} onChange={fieldsOnChangeHandler} />;
			buttons = (
				<Fragment>
					<Button onClick={() => changeStep(3)}>Next</Button>
					<Button onClick={() => previousStep(1)}>Previous</Button>
				</Fragment>
			);
			break;
		case 3:
			form = (
				<Selfie
					isSelfieTaking={isSelfieTaking}
					setIsSelfieTaking={setIsSelfieTaking}
					selfie={selfie}
					setSelfie={setSelfie}
				/>
			);
			buttons = (
				<Fragment>
					<Button onClick={() => changeStep(4)}>Next</Button>
					<Button onClick={() => previousStep(2)}>Previous</Button>
				</Fragment>
			);
			break;
		case 4:
			form = <Goals cards={goals} />;
			buttons = (
				<Fragment>
					<Button onClick={submitForm}>Submit</Button>
					<Button onClick={() => previousStep(3)}>Previous</Button>
				</Fragment>
			);
			break;
		default:
			break;
	}

	return (
		<div className={classes.form__wrapper}>
			{form}
			<div className={classes.form__buttons}>{buttons}</div>
		</div>
	);
};

export default RegisterForm;
