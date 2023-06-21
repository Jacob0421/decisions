import React from "react";
import Message from "./Message";

export default function MessageBox(params) {
	const { messages } = params;

	return (
		<div className="message-container">
			{messages.map((message, index) => (
				<Message message={message} />
			))}
		</div>
	);
}
