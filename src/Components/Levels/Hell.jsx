import React, { useEffect, useRef, useState } from "react";
import HornFitter from "../Workers/Hell/HornFitter";
import TailAttacher from "../Workers/Hell/TailAttacher";
import TridentDistributor from "../Workers/Hell/TridentDistributor";

export default function Hell(params) {
	let { soulsDescending, handleProcessedSoulFromQueue } = params;

	const [hornFitters, setHornFitters] = useState([
		{
			timeToComplete: 4000,
		},
	]);

	const [tailAttachers, setTailAttachers] = useState([
		{
			timeToComplete: 5000,
			queueMax: 5,
			queue: [],
		},
	]);

	const [tridentDistibutors, setTridentDistributors] = useState([
		{
			timeToComplete: 6000,
			queueMax: 5,
			queue: [],
		},
	]);

	const handleComplete = (workerType, id, soul) => {
		switch (workerType) {
			case "HornFitter":
				findAttacherAndQueue(soul);
				handleProcessedSoulFromQueue("Hell");
				break;
			case "TailAttacher":
				let toDistributer = removeAttachersSoul(id);
				findDistributorAndQueue(toDistributer);
				break;
			case "TridentDistributor":
				const toDevil = removeDistributorsSoul(id);
				break;
			default:
				break;
		}
	};

	const findDistributorAndQueue = (soul) => {
		let distributorData = [...tridentDistibutors];
		let availableDistributor = distributorData.find(
			(a) => a.queue.length < a.queueMax
		);

		if (!availableDistributor) {
			console.log("All Distibutors full.");
			return;
		}

		availableDistributor.queue = [...availableDistributor.queue, soul];

		setTridentDistributors(distributorData);
	};

	const removeDistributorsSoul = (workerId) => {
		let distributorData = [...tailAttachers];
		let currentDistributor = distributorData[workerId];

		const toBeReturned = currentDistributor.queue[0];

		currentDistributor.queue = currentDistributor.queue.filter(
			(a, index) => index !== 0
		);

		setTridentDistributors(distributorData);

		return toBeReturned;
	};

	const removeAttachersSoul = (workerId) => {
		let attacherData = [...tailAttachers];
		let currentAttacher = attacherData[workerId];

		const toBeReturned = currentAttacher.queue[0];

		currentAttacher.queue = currentAttacher.queue.filter(
			(a, index) => index !== 0
		);

		setTailAttachers(attacherData);
		return toBeReturned;
	};

	// For HornFitter
	const findAttacherAndQueue = (soul) => {
		let attacherData = [...tailAttachers];
		let availableAttacher = attacherData.find(
			(a) => a.queue.length < a.queueMax
		);

		if (!availableAttacher) {
			console.log("All Attachers full.");
			return;
		}

		availableAttacher.queue = [...availableAttacher.queue, soul];

		setTailAttachers(attacherData);
	};

	return (
		<>
			<p>Queue to hell: {soulsDescending.length}</p>
			<h1>Hell</h1>

			{hornFitters.map((fitter, index) => (
				<HornFitter
					key={index}
					id={index}
					timeToComplete={fitter.timeToComplete}
					soul={soulsDescending[0]}
					handleComplete={handleComplete}
				/>
			))}

			{tailAttachers.map((attacher, index) => (
				<TailAttacher
					key={index}
					id={index}
					timeToComplete={attacher.timeToComplete}
					soul={attacher.queue[0]}
					handleComplete={handleComplete}
				/>
			))}

			{tridentDistibutors.map((distributor, index) => (
				<TridentDistributor
					key={index}
					id={index}
					timeToComplete={distributor.timeToComplete}
					soul={distributor.queue[0]}
					handleComplete={handleComplete}
				/>
			))}
		</>
	);
}
