import React, { useState, useEffect } from "react";

import Reaper from "../Workers/Purgatory/Reaper";
import Verifier from "../Workers/Purgatory/Verifier";
import Decider from "../Workers/Purgatory/Decider";

export default function Purgatory(params) {
	const { handleAscension, handleDescension } = params;

	// ToDo: Move this value initialization to extrernal data file
	const [reapers, setReapers] = useState([
		{
			name: "Remy",
			timeToComplete: 2000,
		},
	]);

	// Todo: Move this value initialization to an external data file
	const [verifiers, setVerifiers] = useState([
		{
			name: "Veronica",
			timeToComplete: 4000,
			queueMax: 5,
			queue: [],
		},
	]);

	// Todo: Move this value initialization to an external data file
	const [deciders, setDeciders] = useState([
		{
			name: "Daryl",
			timeToComplete: 6000,
			percentCorrect: 50,
			queueMax: 5,
			queue: [],
		},
	]);

	const handleComplete = (workerType, id, soul) => {
		switch (workerType) {
			case "Reaper":
				// findVerifierAndQueue Checks all verifiers for a queue that has a free space, then places soul. If there are none, soul is lost.
				// Could possibly return true / false so that we can output different messages for each result.
				findVerifierAndQueue(soul);
				break;

			case "Verifier":
				// Returns soul removed from the Verifiers queue
				const toDeciders = removeSoul(id);

				// Takes the soul removed from pervious Verifier and finds a Decider queue to place it in
				findDeciderAndQueue(toDeciders);
				break;
			default:
				break;
		}
	};

	// for Verifier
	const removeSoul = (id) => {
		let verifierData = [...verifiers];
		let currentVerifier = verifierData[id];

		const toRemove = currentVerifier.queue[0];

		currentVerifier.queue = currentVerifier.queue.filter(
			(s, index) => index !== 0
		);
		setVerifiers(verifierData);
		return toRemove;
	};

	// for Verifier
	const findVerifierAndQueue = (soul) => {
		let verifierData = [...verifiers];

		let availableVerifier = verifierData.find(
			(v) => v.queue.length < v.queueMax
		);

		if (!availableVerifier) {
			return;
		}

		availableVerifier.queue = [...availableVerifier.queue, soul];

		setVerifiers(verifierData);
	};

	//for Decider
	const findDeciderAndQueue = (soul) => {
		let deciderData = [...deciders];

		let availableDecider = deciderData.find(
			(v) => v.queue.length < v.queueMax
		);

		if (!availableDecider) {
			return;
		}

		availableDecider.queue = [...availableDecider.queue, soul];

		setDeciders(deciderData);
	};

	// for Decider
	const handleDecision = (id, decision, soul) => {
		// Here we need to do the same as above.
		// empty the one from the queue,
		let deciderData = deciders;

		deciderData[id].queue = deciderData[id].queue.filter(
			(d, index) => index !== 0
		);

		setDeciders(deciderData);

		// (DONE) and move to next step.

		if (decision) {
			//calback function from ../Conten/Content.jsx
			handleAscension(soul);
		} else {
			handleDescension(soul);
		}
	};

	return (
		<>
			<h1>Purgatory</h1>
			{reapers.map((reaper, index) => (
				<Reaper
					key={index}
					id={index + 1}
					timeToComplete={reaper.timeToComplete}
					handleComplete={handleComplete}
				/>
			))}
			{/* <p>Verifiers Queue Length: {verifiersQueue.length}</p> */}
			{verifiers.map((verifier, index) => (
				<Verifier
					key={index}
					id={index}
					timeToComplete={verifier.timeToComplete}
					soul={verifier.queue[0]}
					handleComplete={handleComplete}
				/>
			))}

			{deciders.map((decider, index) => (
				<Decider
					key={index}
					id={index}
					timeToComplete={decider.timeToComplete}
					percentCorrect={decider.percentCorrect}
					soul={decider.queue[0]}
					handleDecision={handleDecision}
				/>
			))}
		</>
	);
}
