import React from "react";
import styles from "./Menu.module.css";

export default function Menu(params) {
	const { handleMenuItemClick } = params;

	return (
		<div className={styles.menuContainer}>
			<h1>Decisions</h1>
			<button
				onClick={() => handleMenuItemClick("Start")}
				className={styles.menuButton}>
				Start
			</button>
			<button
				onClick={() => handleMenuItemClick("Options")}
				className={styles.menuButton}>
				Options
			</button>
			<button
				onClick={() => handleMenuItemClick("Tutorial")}
				className={styles.menuButton}>
				How to Play
			</button>
			<button
				onClick={() => handleMenuItemClick("About")}
				className={styles.menuButton}>
				About
			</button>
		</div>
	);
}
