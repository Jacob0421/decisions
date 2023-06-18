import React, { useEffect } from "react";

export default function Verifier(params) {
	const {
		timeToComplete,
		souls,
		queueMax,
		handleComplete,
		handleRevenue,
		revenueGenerated,
		workerCount,
	} = params;

	let isProcessing = false;

	function verifySoul() {
		isProcessing = true;
		handleRevenue(revenueGenerated);
		handleComplete("Verifier", souls[0]);
		isProcessing = false;
	}

	useEffect(() => {
		if (souls.length === 0) {
			return;
		}

		if (!isProcessing) {
			const ticker = setInterval(() => verifySoul(), timeToComplete);

			return () => clearInterval(ticker);
		}
	}, [souls]);

	return (
		<div className="Worker">
			<h3>Verifiers</h3>
			<div className="worker-details">
				<p>
					Queue: {souls.length}/{queueMax}
				</p>
				<p>Worker Count: {workerCount}</p>
				<p>Rate: {(1000 / timeToComplete).toFixed(2)}/s</p>
			</div>
		</div>
	);
}
