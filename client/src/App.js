import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./hoc/Layout";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/:page?" exact component={Layout} />
			</Switch>
		</Router>
	);
}

export default App;
