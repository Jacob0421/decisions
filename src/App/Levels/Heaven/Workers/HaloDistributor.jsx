import React, { useEffect } from "react";

export default function HaloDistributor(params) {
	const { id, timeToComplete, soul, handleComplete } = params;

	function processSoul() {
		handleComplete("HaloDistributor", id, soul);
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
			<h1>Halo Distributor</h1>
		</>
	);
}
