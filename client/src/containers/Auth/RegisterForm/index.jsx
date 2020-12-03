import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import strength from "../../../assets/images/Auth/strength.png";
import muscle from "../../../assets/images/Auth/muscle.png";
import fat from "../../../assets/images/Auth/fat.png";
import fit from "../../../assets/images/Auth/fit.png";

import classes from "./index.module.scss";
import { updatedObject } from "../../../utility";
import { registerUser } from "../../../redux/reducers/Auth/actions";

import {
	PersonalDetails,
	BodyInfo,
	Selfie,
	Goals,
} from "../../../components/Auth";
import { Button } from "../../../components/UI";

const RegisterForm = () => {
	const [step, setStep] = useState(1);

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
		//Form Validation Left
		setStep(step);
	};

	const previousStep = (step) => {
		setStep(step);
	};

	const dispatch = useDispatch();
	// const { loading, user, error } = useSelector((state) => state.register);

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

		dispatch(registerUser(formData));
	};

	// const checkInputValidation = (step) => {
	// 	const nameRegex = /^[a-z ,.'-]+$/i;
	// 	const phoneRegex = /^\d{10}$/;
	// 	const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	// 	const addressRegex = /^[a-zA-Z0-9\s,'-]*$/;
	// 	const dateOfBirthRegex = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/i;

	// 	let isNameValid,
	// 		isPhoneNumbeValid,
	// 		isEmailValid,
	// 		isAddressValid,
	// 		isDatOfBirthValid;

	// 	switch (step) {
	// 		case 1:
	// 			isNameValid = nameRegex.test(fields.name.value);
	// 			isPhoneNumbeValid = phoneRegex.test(fields.phoneNumber.value);
	// 			isEmailValid = emailRegex.test(fields.email.value);
	// 			isAddressValid = addressRegex.test(fields.address.value);
	// 			isDatOfBirthValid = dateOfBirthRegex.test(fields.dateOfBirth.value);

	// 			let nameError, phoneError, addressError, emailError, dateOfBirthError;

	// 			if (
	// 				isNameValid ||
	// 				isPhoneNumbeValid ||
	// 				isEmailValid ||
	// 				isAddressValid ||
	// 				isDatOfBirthValid
	// 			) {
	// 				return true;
	// 			}

	// 			if (!isNameValid) {
	// 				nameError = updatedObject(errors.name, {
	// 					name: "Name must be provided",
	// 				});
	// 			}

	// 			if (!isPhoneNumbeValid) {
	// 				phoneError = updatedObject(errors.name, {
	// 					phone: "Enter a valid Phone number",
	// 				});
	// 			}

	// 			if (!isEmailValid) {
	// 				emailError = updatedObject(errors.name, {
	// 					name: "Enter a valid email address",
	// 				});
	// 			}

	// 			if (!isAddressValid) {
	// 				addressError = updatedObject(errors.name, {
	// 					name: "Address must be provided",
	// 				});
	// 			}

	// 			if (!isDatOfBirthValid) {
	// 				dateOfBirthError = updatedObject(errors.name, {
	// 					name: "Enter a valid Birthday",
	// 				});
	// 			}

	// 			const updatedErrors = updatedObject(errors, {
	// 				nameError,
	// 				phoneError,
	// 				emailError,
	// 				addressError,
	// 				dateOfBirthError,
	// 			});

	// 			setErrors(updatedErrors);
	// 			return false;
	// 		case 2:
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// };

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
