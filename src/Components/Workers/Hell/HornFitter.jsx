import React, { useEffect } from "react";

export default function HornFitter(params) {
	const { id, timeToComplete, soul, handleComplete } = params;

	function processSoul() {
		handleComplete("HornFitter", id, soul);
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
			<h1>Horn Fitter</h1>
		</>
	);
}
