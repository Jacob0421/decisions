import React, { useEffect } from "react";

export default function TailAttacher(params) {
	const {
		timeToComplete,
		souls,
		handleComplete,
		revenueGenerated,
		handleRevenue,
		workerCount,
		queueMax,
	} = params;

	let isProcessing = false;

	function processSoul() {
		isProcessing = true;
		handleRevenue(revenueGenerated);
		handleComplete("TailAttacher", souls[0]);
		isProcessing = false;
	}

	useEffect(() => {
		if (souls.length === 0) {
			return;
		}

		if (!isProcessing) {
			let ticker = setInterval(() => processSoul(), timeToComplete);
			return () => clearInterval(ticker);
		}
	}, [souls]);

	return (
		<div className="Worker">
			<h3>Tail Attacher</h3>
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
