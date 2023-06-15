import React, { useEffect } from "react";

export default function God(params) {
	const { id, timeToComplete, soul, handleComplete } = params;

	function processSoul() {
		handleComplete("God", id, soul);
	}

	useEffect(() => {
		if (!soul) {
			return;
		}

		let ticker = setInterval(() => processSoul(), timeToComplete);
		return () => clearInterval(ticker);
	}, [soul]);

	return (
		<>
			<h1>God</h1>
		</>
	);
}
