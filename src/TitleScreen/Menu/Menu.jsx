import React from "react";

export default function Menu(params) {
	const { handleMenuItemClick } = params;

	return (
		<div>
			<h1>This is my Menu</h1>
			<button onClick={() => handleMenuItemClick("Start")}>Start</button>
			<button onClick={() => handleMenuItemClick("Options")}>
				Options
			</button>
			<button onClick={() => handleMenuItemClick("Tutorial")}>
				How to Play
			</button>
		</div>
	);
}
