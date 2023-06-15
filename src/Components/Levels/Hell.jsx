import React, { useEffect, useState } from "react";
import HornFitter from "../Workers/Hell/HornFitter";

export default function Hell(params) {
	let { soulsDescending } = params;

	const [hornFitters, setHornFitters] = useState([
		{
			timeToComplete: 5000,
			queueMax: 5,
			queue: [],
		},
	]);

	const [tailAttachers, setTailAttachers] = useState([
		{
			timeToComplete: 3000,
			queueMax: 5,
			queue: [],
		},
	]);

	useEffect(() => {
		setFitterSouls();
	}, [soulsDescending]);

	const setFitterSouls = () => {
		let fittersData = [...hornFitters];
		let availableFitters = fittersData.filter(
			(f) => f.queue.length < f.queueMax
		);

		availableFitters.forEach((fitter) => {
			if (
				soulsDescending.length <=
				fitter.queueMax - fitter.queue.length
			) {
				fitter.queue = soulsDescending.splice(
					0,
					soulsDescending.length
				);
			} else {
				fitter.queue = soulsDescending.splice(
					0,
					fitter.queueMax - fitter.queue.length
				);
			}
		});

		setHornFitters(fittersData);
	};

	const handleComplete = (workerType, id, soul) => {
		switch (workerType) {
			case "HornFitter":
				const toAttacher = removeFitterSoul(id);
				findAttacherAndQueue(toAttacher);
				break;
			default:
				break;
		}
	};

	// for HornFitter
	const removeFitterSoul = (id) => {
		let fitterData = [...hornFitters];
		let currentFitter = fitterData[id];

		if (currentFitter.queue.length !== 0) {
			currentFitter.queue = currentFitter.queue.filter(
				(f, index) => index !== 0
			);
		}

		if (soulsDescending.length !== 0) {
			currentFitter.queue = soulsDescending.splice(
				0,
				currentFitter.queueMax - currentFitter.queue.length
			);
		}
		setHornFitters(fitterData);
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
					toToComplete={fitter.timeToComplete}
					soul={fitter.queue[0]}
					handleComplete={handleComplete}
				/>
			))}
		</>
	);
}
