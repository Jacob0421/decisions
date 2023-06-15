import React, { useEffect } from "react";

export default function TailAttacher(params) {
	const { id, soul, timeToComplete, handleComplete } = params;

	function processSoul() {
		handleComplete("TailAttacher", id, soul);
	}

	useEffect(() => {
		if (!soul) {
			return;
		}

		let ticker = setInterval(processSoul(), timeToComplete);
		return () => clearInterval(ticker);
	});

	return (
		<>
			<h1>Tail Attacher</h1>
		</>
	);
}
