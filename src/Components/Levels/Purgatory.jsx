import React, { useState, useEffect } from "react";
import { Reaper } from "../Workers/Purgatory/Reaper";
import { Verifier } from "../Workers/Purgatory/Verifier";

export function Purgatory() {
	const [reapers, setReapers] = useState([
		{
			name: "1",
			timeToComplete: 15000,
			isIdle: true,
			soul: {},
		},
	]);

	const [verifiers, setVerifiers] = useState([
		{
			name: "1",
			timeToComplete: 20000,
			isIdle: true,
			soul: {},
		},
	]);

	const [verifiersQueue, setVerifiersQueue] = useState([]);

	const handleComplete = (workerType, id, soul) => {
		switch (workerType) {
			case "Reaper":
				if (verifiersQueue.length >= 5) {
					console.log(
						"Too many in Verifiers queue. Not adding to queue"
					);
					break;
				}
				setVerifiersQueue([...verifiersQueue, soul]);
				console.log("Purgatory - Set to Verifiers Queue");
				break;

			case "Verifier":
				let verifierData = [...verifiers];

				verifierData[id].soul = {};
				verifierData[id].isIdle = true;
				setVerifiers(verifierData);

				console.log("Purgatory - Verifier Refreshed");
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		let verifierData = [...verifiers];
		let queue = [...verifiersQueue];

		if (queue.length == 0) {
			return;
		}

		let verifiersSoul;

		verifierData.forEach((v, index) => {
			if (v.isIdle) {
				verifiersSoul = queue.shift();
				v.soul = verifiersSoul;
				v.isIdle = false;
			}
		});

		setVerifiers(verifierData);
		setVerifiersQueue(queue);

		console.log(verifierData);
	}, [verifiers]);

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
			<p>Verifiers Queue Length: {verifiersQueue.length}</p>
			{verifiers.map((verifier, index) => (
				<Verifier
					key={index}
					id={index}
					timeToComplete={verifier.timeToComplete}
					soul={verifier.soul}
					handleComplete={handleComplete}
				/>
			))}
		</>
	);
}
