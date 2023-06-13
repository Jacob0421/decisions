import React, { useEffect } from "react";

export default function Verifier(params) {
	const { id, timeToComplete, soul, handleComplete } = params;

	function verifySoul() {
		if (!soul) {
			return;
		}

		console.log(`Verifier ${id + 1} - Passed`);

		handleComplete("Verifier", id, soul);
	}

	useEffect(() => {
		let ticker = setInterval(() => verifySoul(), timeToComplete);
		return () => clearInterval(ticker);
	}, [soul]);

	return (
		<>
			<h1>Verifier</h1>
		</>
	);
}
