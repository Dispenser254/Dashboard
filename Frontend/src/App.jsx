import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlowbiteWrapper from "./components/FlowbiteWrapper";
import { Dashboard } from "./pages/Dashboard";
import EcommerceProductsPage from "./pages/Ecommerce/products";
import EcommerceBilling from "./pages/Ecommerce/billing";
import EcommerceInvoice from "./pages/Ecommerce/invoice";
import UsersFeed from "./pages/Users/feed";
import UsersProfile from "./pages/Users/profile";
import UsersList from "./pages/Users/list";
import UsersSettings from "./pages/Users/settings";
import ForgotPasswordPage from "./pages/Authentication/forgot-password";
import ResetPasswordPage from "./pages/Authentication/reset-password";
import ProfileLockPage from "./pages/Authentication/profile-lock";
import SignUpPage from "./pages/Authentication/sign-up";
import SignInPage from "./pages/Authentication/sign-in";
import MailingComposePage from "./pages/Mailing/compose";
import MailingInboxPage from "./pages/Mailing/inbox";
import MailingReplyPage from "./pages/Mailing/reply";
import MailingReadPage from "./pages/Mailing/read";
import ServerErrorPage from "./pages/Pages/500";
import NotFoundPage from "./pages/Pages/404";
import MaintenancePage from "./pages/Pages/maintenance";
import PricingPage from "./pages/Pages/pricing";

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
					<Route path="/users/feed" element={<UsersFeed />} />
					<Route path="/users/profile" element={<UsersProfile />} />
					<Route path="/users/list" element={<UsersList />} />
					<Route path="/users/settings" element={<UsersSettings />} />
					<Route path="/authentication/sign-in" element={<SignInPage />} />
					<Route path="/authentication/sign-up" element={<SignUpPage />} />
					<Route
						path="/authentication/forgot-password"
						element={<ForgotPasswordPage />}
					/>
					<Route
						path="/authentication/reset-password"
						element={<ResetPasswordPage />}
					/>
					<Route
						path="/authentication/profile-lock"
						element={<ProfileLockPage />}
					/>
					<Route path="/pages/pricing" element={<PricingPage />} />
					<Route path="/pages/maintenance" element={<MaintenancePage />} />
					<Route path="/pages/404" element={<NotFoundPage />} />
					<Route path="/pages/500" element={<ServerErrorPage />} />
					<Route path="/mailing/compose" element={<MailingComposePage />} />
					<Route path="/mailing/inbox" element={<MailingInboxPage />} />
					<Route path="/mailing/read" element={<MailingReadPage />} />
					<Route path="/mailing/reply" element={<MailingReplyPage />} />
				</Route>
			</Routes>
		</Router>
	);
}
