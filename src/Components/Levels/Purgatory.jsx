import React, { useState, useEffect } from "react";
import { Reaper } from "../Workers/Purgatory/Reaper";
import { Verifier } from "../Workers/Purgatory/Verifier";

export function Purgatory() {

	// ToDo: Move this value initialization to extrernal data file 
	const [reapers, setReapers] = useState([
		{
			name: "1",
			timeToComplete: 9000,
		},
	]);

	// Todo: Move this value initialization to an external data file
	const [verifiers, setVerifiers] = useState([
		{
			name: "Bob",
			timeToComplete: 20000,
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
				console.log("Purgatory - Set to Verifiers Queue");
				break;

			case "Verifier":
				const toDeciders = removeSoul(id);
				console.log("Purgatory - Verifier Refreshed");
				break;
			default:
				break;
		}
	};

	const removeSoul = (id) => {
		let verifierData = [...verifiers];
		let currentVerifier = verifierData[id];

		const toRemove = currentVerifier.queue[0];

		currentVerifier.queue = currentVerifier.queue.filter(
			(s, index) => index !== 0
		);

		console.log(currentVerifier.queue.length);
		setVerifiers(verifierData);

		return toRemove;
	};

	const findVerifierAndQueue = (soul) => {
		let verifierData = [...verifiers];

		let availableVerifier = verifierData.find(
			(v) => v.queue.length < v.queueMax
		);

		if (!availableVerifier) {
			console.log("All Queues Filled. This soul is doomed to permanently roam the earth.");
			return;
		}

		availableVerifier.queue = [...availableVerifier.queue, soul];

		console.log(availableVerifier.queue.length);

		setVerifiers(verifierData);
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
		</>
	);
}
