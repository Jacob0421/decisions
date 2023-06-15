import React, { useEffect } from "react";

export default function TheDevil(params) {
	const { id, soul, timeToComplete, handleComplete } = params;

	function processSoul() {
		handleComplete("TheDevil", id, soul);
	}

	useEffect(() => {
		if (!soul) {
			return;
		}

		let ticker = setInterval(processSoul(), timeToComplete);
		return () => clearInterval(ticker);
	}, [soul]);

	return (
		<>
			<h1>The Devil</h1>
		</>
	);
}
