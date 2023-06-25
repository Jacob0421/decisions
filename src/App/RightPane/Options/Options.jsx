import React from "react";
import styles from "./Options.module.css";

export default function Options(params) {
	const { handleMenuItemClick } = params;

	const handleToTitleClick = () => {
		if (
			window.confirm(
				"This will reset all progress. Do you want to continue?"
			) == true
		) {
			handleMenuItemClick("Title");
		}
	};

	return (
		<div className={styles.optionsContainer}>
			<button
				onClick={handleToTitleClick}
				className={styles.optionsButton}>
				Return to Title
			</button>
		</div>
	);
}
