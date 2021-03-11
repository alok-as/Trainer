// import React, { Component } from "react";
// import ChildComponent from "./index2";

// export default class Testing extends Component {
// 	state = {
// 		isVisible: false,
// 		results: null,
// 	};

// 	getResult() {
// 		fetch("https://jsonplaceholder.typicode.com/posts/1")
// 			.then((response) => response.json())
// 			.then((json) => {
// 				this.setState({ results: json });
// 			});
// 	}

// 	componentDidMount() {
// 		console.log("Parent is Mounted");
// 		this.getResult();
// 	}

// 	componentDidUpdate() {
// 		console.log("Parent is Updated");
// 	}

// 	render() {
// 		console.log("Parent is Rendered");
// 		return (
// 			<div>
// 				<h1>Parent Component</h1>
// 				<ChildComponent results={this.state.results} />
// 			</div>
// 		);
// 	}
// }

import React, { Component } from "react";

export default class Testing extends Component {
	state = {
		count: 0,
		isVisible: false,
	};

	increment = () => {
		// this.setState({ count: this.state.count + 1 });
		// console.log(this.state.count);

		this.setState({ isVisible: false });

		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
			};
		});

		this.setState((prevState) => {
			console.log(prevState.count);
		});
	};

	componentDidMount() {
		console.log("Component is Mounted");
	}

	componentDidUpdate() {
		console.log("Component is Updated");
	}

	render() {
		return (
			<div>
				<h1>Testing Component</h1>
				<p>{this.state.count}</p>
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}
