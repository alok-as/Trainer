import React, { Component } from "react";

export default class ChildComponent extends Component {
	componentDidMount() {
		console.log("Child is Mounted");
		console.log("Accessing Children Props", this.props);
	}
	componentDidUpdate() {
		console.log("Children is Updated");
	}
	render() {
		console.log("Children is Rendered");
		return (
			<div>
				<h1>Children</h1>
			</div>
		);
	}
}
