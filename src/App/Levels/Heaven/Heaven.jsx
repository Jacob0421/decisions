import React, { useState, useEffect } from "react";
import Welcomer from "./Workers/Welcomer";
import WingReceptionist from "./Workers/WingReceptionist";
import God from "./Workers/God";
import HaloDistributor from "./Workers/HaloDistributor";

export default function Heaven(params) {
	let { soulsAscending, handleProcessedSoulFromQueue, handleFinalProcess } =
		params;

	const [welcomers, setWelcomers] = useState([
		{
			name: "Wally",
			timeToComplete: 4000,
		},
	]);

	const [wingReceptionists, setWingReceptionists] = useState([
		{
			timeToComplete: 5000,
			queueMax: 5,
			queue: [],
		},
	]);

	const [haloDistibutors, setHaloDistributors] = useState([
		{
			timeToComplete: 6000,
			queueMax: 5,
			queue: [],
		},
	]);

	const [god, setGod] = useState({
		timeToComplete: 7000,
		queueMax: 5,
		queue: [],
	});

	const handleComplete = (workerType, id, soul) => {
		switch (workerType) {
			case "Welcomer":
				findReceptionistAndQueue(soul);
				handleProcessedSoulFromQueue("Heaven");
				break;
			case "WingReceptionist":
				let toDistributer = removeReceptionistsSoul(id);
				findDistributorAndQueue(toDistributer);
				break;
			case "HaloDistributor":
				const toGod = removeDistributorsSoul(id);
				sendSoulToGod(toGod);
				break;
			case "God":
				removeGodsSoul();
				handleFinalProcess("Heaven");
				break;
			default:
				break;
		}
	};

	const removeGodsSoul = () => {
		let godData = god;

		godData.queue = godData.queue.filter((a, index) => index !== 0);

		setGod(godData);
	};

	const sendSoulToGod = (soul) => {
		let godData = god;
		if (godData.queue.length >= godData.queueMax) {
			console.log("Patience is a virtue. Maybe we can talk later..");
			return;
		}

		godData.queue = [...godData.queue, soul];

		setGod(godData);
	};

	const findDistributorAndQueue = (soul) => {
		let distributorData = [...haloDistibutors];
		let availableDistributor = distributorData.find(
			(a) => a.queue.length < a.queueMax
		);

		if (!availableDistributor) {
			console.log("All Distibutors full.");
			return;
		}

		availableDistributor.queue = [...availableDistributor.queue, soul];

		setHaloDistributors(distributorData);
	};

	const removeDistributorsSoul = (workerId) => {
		let distributorData = [...haloDistibutors];
		let currentDistributor = distributorData[workerId];

		const toBeReturned = currentDistributor.queue[0];

		currentDistributor.queue = currentDistributor.queue.filter(
			(a, index) => index !== 0
		);

		setHaloDistributors(distributorData);

		return toBeReturned;
	};

	const removeReceptionistsSoul = (workerId) => {
		let receptionistData = [...wingReceptionists];
		let currentReceptionist = receptionistData[workerId];

		const toBeReturned = currentReceptionist.queue[0];

		currentReceptionist.queue = currentReceptionist.queue.filter(
			(a, index) => index !== 0
		);

		setWingReceptionists(receptionistData);
		return toBeReturned;
	};

	// For HornFitter
	const findReceptionistAndQueue = (soul) => {
		let receptionistData = [...wingReceptionists];
		let availableReceptionist = receptionistData.find(
			(r) => r.queue.length < r.queueMax
		);

		if (!availableReceptionist) {
			console.log("All Attachers full.");
			return;
		}

		availableReceptionist.queue = [...availableReceptionist.queue, soul];

		setWingReceptionists(receptionistData);
	};

	return (
		<>
			<God
				timeToComplete={god.timeToComplete}
				soul={god.queue[0]}
				handleComplete={handleComplete}
			/>

			{haloDistibutors.map((distributor, index) => (
				<HaloDistributor
					key={index}
					id={index}
					timeToComplete={distributor.timeToComplete}
					soul={distributor.queue[0]}
					handleComplete={handleComplete}
				/>
			))}
			{wingReceptionists.map((receptionist, index) => (
				<WingReceptionist
					key={index}
					id={index}
					timeToComplete={receptionist.timeToComplete}
					soul={receptionist.queue[0]}
					handleComplete={handleComplete}
				/>
			))}
			{welcomers.map((welcomer, index) => (
				<Welcomer
					key={index}
					id={index}
					timeToComplete={welcomer.timeToComplete}
					soul={soulsAscending[0]}
					handleComplete={handleComplete}
				/>
			))}
			<h1>Heaven</h1>
			<p>Queue to Heaven: {soulsAscending.length}</p>
		</>
	);
}
