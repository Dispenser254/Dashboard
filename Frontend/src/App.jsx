import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlowbiteWrapper from "./components/FlowbiteWrapper";
import { Dashboard } from "./pages/Dashboard";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route element={<FlowbiteWrapper />}>
					<Route index path="/" element={<Dashboard />} />
				</Route>
			</Routes>
		</Router>
	);
}
