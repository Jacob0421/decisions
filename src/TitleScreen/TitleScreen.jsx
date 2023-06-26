import React, { useState } from "react";
import Menu from "./Menu/Menu";
import App from "../App/App";
import Options from "./Options/Options";
import Tutorial from "./Tutorial/Tutorial";
import About from "./About/About";

export default function TitleScreen() {
	const [isMenuVisible, setIsMenuVisible] = useState(true);
	const [isGameVisible, setIsGameVisible] = useState(false);
	const [isOptionsVisible, setIsOptionsVisible] = useState(false);
	const [isTutorialVisible, setIsTutorialVisible] = useState(false);
	const [isAboutVisible, setIsAboutVisible] = useState(false);

	const handleMenuItemClick = (selected) => {
		switch (selected) {
			case "Start":
				setIsMenuVisible(false);
				setIsGameVisible(true);
				setIsOptionsVisible(false);
				setIsTutorialVisible(false);
				setIsAboutVisible(false);
				break;
			case "Options":
				setIsMenuVisible(false);
				setIsGameVisible(false);
				setIsOptionsVisible(true);
				setIsTutorialVisible(false);
				setIsAboutVisible(false);
				break;
			case "Tutorial":
				setIsMenuVisible(false);
				setIsGameVisible(false);
				setIsOptionsVisible(false);
				setIsTutorialVisible(true);
				setIsAboutVisible(false);
				break;
			case "Title":
				setIsMenuVisible(true);
				setIsGameVisible(false);
				setIsOptionsVisible(false);
				setIsTutorialVisible(false);
				setIsAboutVisible(false);
				break;
			case "About":
				setIsMenuVisible(false);
				setIsGameVisible(false);
				setIsOptionsVisible(false);
				setIsTutorialVisible(false);
				setIsAboutVisible(true);
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
			{isGameVisible && <App handleMenuItemClick={handleMenuItemClick} />}
			{isOptionsVisible && (
				<Options handleMenuItemClick={handleMenuItemClick} />
			)}
			{isTutorialVisible && (
				<Tutorial handleMenuItemClick={handleMenuItemClick} />
			)}
			{isAboutVisible && (
				<About handleMenuItemClick={handleMenuItemClick} />
			)}
		</>
	);
}
