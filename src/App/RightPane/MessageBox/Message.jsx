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
					backgroundColor: "red",
					padding: "0 1vw",
				}}>
				{message.text}
			</p>
		);
	} else {
		return (
			<p
				style={{
					margin: "3px",
					textAlign: "left",
					width: "100%",
					backgroundColor: "green",
					padding: "0 1vw",
				}}>
				{message.text}
			</p>
		);
	}

	// return (

	// 	// <p style={{ margin: "3px", textAlign: "center", width: "100%" }}>
	// 	// 	{message.text}
	// 	// </p>
	// );
}
