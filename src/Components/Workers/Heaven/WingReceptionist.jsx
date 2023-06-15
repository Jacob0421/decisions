import React, { useEffect } from "react";

export default function WingReceptionist(params) {
	const { id, timeToComplete, soul, handleComplete } = params;

	function processSoul() {
		handleComplete("WingReceptionist", id, soul);
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
			<h1>Wing Receptionist</h1>
		</>
	);
}
