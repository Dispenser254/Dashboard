// import React from 'react'
import { Flowbite } from "flowbite-react";
import { Outlet } from "react-router-dom";
import theme from "../flowbite-theme";
// import { useEffect } from "react";

function FlowbiteWrapper() {
	const dark = localStorage.getItem("theme") === "dark";

	return (
		<Flowbite theme={{ dark, theme }}>
			{/* <PersistFlowbiteThemeToLocalStorage /> */}
			<Outlet />
		</Flowbite>
	);
}

// function PersistFlowbiteThemeToLocalStorage() {
// 	const [themeMode] = useThemeMode();

// 	useEffect(() => {
// 		localStorage.setItem("theme", themeMode);
// 	}, [themeMode]);

// 	return <></>;
// }

export default FlowbiteWrapper;
