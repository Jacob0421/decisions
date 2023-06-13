import React, { useEffect } from "react";

export default function Decider(params) {
	const { id, soul, timeToComplete, percentCorrect, handleDecision } = params;

	function processSoul() {
		// probably will clean this up later. throws app breaking error if tries to read undefined
		if (!soul) {
			return;
		}

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

		console.log(`decision: ${decision}`);
		console.log(`decisionBool pre-correction: ${decisionBool}`);
		if (decision < percentIncorrect) {
			decisionBool = !decisionBool;
		}
		console.log(`decisionBool post-correction: ${decisionBool}`);

		console.log(`Decider ${id + 1} - Passed`);

		handleDecision(id, decisionBool, soul);
	}

	useEffect(() => {
		const ticker = setInterval(() => processSoul(), timeToComplete);

		return () => clearInterval(ticker);
	}, [soul]);

	return (
		<>
			<h1>Decider</h1>
		</>
	);
}
