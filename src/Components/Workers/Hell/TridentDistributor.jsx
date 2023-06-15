import React, { useEffect } from "react";

export default function TridentDistributor(params) {
	const { id, soul, timeToComplete, handleComplete } = params;

	function processSoul() {
		handleComplete("TridentDistributor", id, soul);
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
			<h1>Trident Distributor</h1>
		</>
	);
}
