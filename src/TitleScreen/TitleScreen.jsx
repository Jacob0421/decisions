import React, { useState } from "react";
import Menu from "./Menu/Menu";
import App from "../App/App";

export default function TitleScreen() {
	const [isMenuVisible, setIsMenuVisible] = useState(true);
	const [isGameVisible, setIsGameVisible] = useState(false);
	const [isOptionsVisible, setIsOptionsVisible] = useState(false);
	const [isTutorialVisible, setIsTutorialVisible] = useState(false);

	const handleMenuItemClick = (selected) => {
		switch (selected) {
			case "Start":
				setIsMenuVisible(false);
				setIsGameVisible(true);
				setIsOptionsVisible(false);
				setIsTutorialVisible(false);
				break;
			case "Options":
				setIsMenuVisible(false);
				setIsGameVisible(false);
				setIsOptionsVisible(true);
				setIsTutorialVisible(false);
				break;
			case "Tutorial":
				setIsMenuVisible(false);
				setIsGameVisible(false);
				setIsOptionsVisible(false);
				setIsTutorialVisible(true);
				break;
			default:
				break;
		}
	};

	return (
		<>
			{isMenuVisible && (
				<Menu handleMenuItemClick={handleMenuItemClick} />
			)}
			{isGameVisible && <App />}
			{/* {isOptionsVisible && <Options />}
			{isTutorialVisible && <Tutorial />} */}
		</>
	);
}
