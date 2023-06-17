import React, { useEffect } from "react";

export default function Decider(params) {
	const {
		souls,
		timeToComplete,
		percentCorrect,
		handleDecision,
		revenueGenerated,
		handleRevenue,
		queueMax,
		workerCount,
	} = params;

	function processSoul() {
		// probably will clean this up later. throws app breaking error if tries to read undefined
		if (souls.length === 0) {
			return;
		}

		let soul = souls[0];

		// false = go to hell, true = go to heaven
		let decisionBool = false;

		if (soul.GoodTraits >= 5) {
			decisionBool = true;
		} else {
			decisionBool = false;
		}

		//calculating accuracy.
		let decision = Math.floor(Math.random() * 100);

		let percentIncorrect = 100 - percentCorrect;
		if (decision < percentIncorrect) {
			decisionBool = !decisionBool;
		}

		handleRevenue(revenueGenerated);
		handleDecision(decisionBool, soul);
	}

	useEffect(() => {
		const ticker = setInterval(() => processSoul(), timeToComplete);

		return () => clearInterval(ticker);
	}, [souls]);

	return (
		<div className="Worker">
			<h3>Deciders</h3>
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
