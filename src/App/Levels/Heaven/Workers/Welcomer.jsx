import React, { useEffect } from "react";

export default function Welcomer(params) {
	const {
		timeToComplete,
		souls,
		handleComplete,
		queueMax,
		workerCount,
		revenueGenerated,
		handleRevenue,
	} = params;

	function processSoul() {
		handleRevenue(revenueGenerated);
		handleComplete("Welcomer", souls[0]);
	}

	useEffect(() => {
		if (souls.length === 0) {
			return;
		}

		let ticker = setInterval(() => processSoul(), timeToComplete);
		return () => clearInterval(ticker);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [souls]);

	return (
		<div className="Worker">
			<h3>Welcomer</h3>
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
