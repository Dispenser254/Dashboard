import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlowbiteWrapper from "./components/FlowbiteWrapper";
import { Dashboard } from "./pages/Dashboard";
import EcommerceProductsPage from "./pages/Ecommerce/products";
import EcommerceBilling from "./pages/Ecommerce/billing";
import EcommerceInvoice from "./pages/Ecommerce/invoice";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route element={<FlowbiteWrapper />}>
					<Route index path="/" element={<Dashboard />} />
					<Route
						path="/e-commerce/products"
						element={<EcommerceProductsPage />}
					/>
					<Route path="/e-commerce/billing" element={<EcommerceBilling />} />
					<Route path="/e-commerce/invoice" element={<EcommerceInvoice />} />
				</Route>
			</Routes>
		</Router>
	);
}
