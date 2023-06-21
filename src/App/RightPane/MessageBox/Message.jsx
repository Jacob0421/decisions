import React from "react";

export default function Message(params) {
	const { message } = params;

	if (message.type === "Bad") {
		return (
			<p
				style={{
					margin: "3px",
					textAlign: "left",
					width: "100%",
					backgroundColor: "rgba(255, 0, 0, 0.4)",
					padding: "0 1vw",
				}}>
				{message.time + ": " + message.text}
			</p>
		);
	} else {
		return (
			<p
				style={{
					margin: "4px",
					textAlign: "left",
					width: "100%",
					backgroundColor: "rgba(60, 179, 113, 0.5)",
					padding: "0 1vw",
				}}>
				{message.time + ": " + message.text}
			</p>
		);
	}

	// return (

	// 	// <p style={{ margin: "3px", textAlign: "center", width: "100%" }}>
	// 	// 	{message.text}
	// 	// </p>
	// );
}
