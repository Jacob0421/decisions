import React from "react";

export default function Options(params) {
	const { handleMenuItemClick } = params;

	return (
		<>
			<button onClick={() => handleMenuItemClick("Title")}>
				Back to main Menu
			</button>
			<p>Hey... yeah... there's Nothing here</p>
		</>
	);
}
