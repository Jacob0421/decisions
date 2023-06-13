import React, { useState } from "react";

export default function Heaven() {
	const [welcomers, setWelcomers] = useState([
		{
			name: "Wally",
			timeToComplete: 8000,
			queueMax: 5,
			queue: [],
		},
	]);

	return (
		<>
			<h1>Heaven</h1>
		</>
	);
}
