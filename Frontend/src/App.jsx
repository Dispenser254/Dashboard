import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlowbiteWrapper from "./components/FlowbiteWrapper";
import { Dashboard } from "./pages/Dashboard";
import EcommerceProductsPage from "./pages/Ecommerce/products";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route element={<FlowbiteWrapper />}>
					<Route index path="/" element={<Dashboard />} />
					<Route path="/e-commerce/products" element={<EcommerceProductsPage />} />
				</Route>
			</Routes>
		</Router>
	);
}
