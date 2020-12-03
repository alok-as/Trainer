import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Layout, Auth } from "./hoc";

function App() {
	return (
		<Router>
			<Provider store={store}>
				<Switch>
					<Route path="/:page?" exact component={Layout} />
					<Route path="/auth/user" component={Auth} />
				</Switch>
			</Provider>
		</Router>
	);
}

export default App;
