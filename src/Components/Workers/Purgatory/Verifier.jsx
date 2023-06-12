import React, { useEffect } from "react";

export function Verifier(params) {
	const { id, timeToComplete, soul, handleComplete } = params;

	useEffect(() => {
		let ticker = setInterval(
			() => handleComplete("Verifier", id, soul),
			timeToComplete
		);
		return () => clearInterval(ticker);
	}, [soul]);

	return (
		<>
			<h1>Verifier</h1>
		</>
	);
}
