import React, { useState, Component } from "react";
import { v4 as uuid } from "uuid";

const Testing = () => {
	const [fields, setFields] = useState([
		{
			id: uuid(),
			type: "email",
			placeholder: "Email",
			value: "",
			// onChange: (event) => setEmail(event.target.value),
		},
		{
			id: uuid(),
			type: "password",
			placeholder: "Password",
			value: "",
			// onChange: (event) => setPassword(event.target.value),
		},
	]);

	return (
		<section>
			<form>
				{fields.map((field) => {
					return (
						<input
							key={field.id}
							type={field.type}
							placeholder={field.placeholder}
							value={field.value}
							onChange={field.onChange}
						/>
					);
				})}
			</form>
		</section>
	);
};

// class Testing extends Component {
// 	state = {
// 		fields: [
// 			{
// 				id: uuid(),
// 				type: "email",
// 				placeholder: "Email",
// 				value: "",
// 				// onChange: (event) => setEmail(event.target.value),
// 			},
// 			{
// 				id: uuid(),
// 				type: "password",
// 				placeholder: "Password",
// 				value: "",
// 				// onChange: (event) => setPassword(event.target.value),
// 			},
// 		],
// 	};

// 	render() {
// 		return (
// 			<section>
// 				<form>
// 					{this.state.fields.map((field) => {
// 						return (
// 							<input
// 								key={field.id}
// 								type={field.type}
// 								placeholder={field.placeholder}
// 								value={field.value}
// 								onChange={field.onChange}
// 							/>
// 						);
// 					})}
// 				</form>
// 			</section>
// 		);
// 	}
// }

export default Testing;
