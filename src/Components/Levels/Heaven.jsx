import React, { useState, useEffect } from "react";

export default function Heaven(params) {
	let { soulsAscending } = params;

	const [welcomers, setWelcomers] = useState([
		{
			name: "Wally",
			timeToComplete: 8000,
			queueMax: 5,
			queue: [],
		},
	]);

	// useEffect(() => {
	// 	const numInAscensionQueue = soulsAscending.length;

	// 	let welcomerData = [...welcomers];

	// 	let remainingSpots, numToTransfer;
	// 	welcomerData.forEach((welcomer) => {
	// 		remainingSpots = welcomer.queueMax - welcomer.queue.length;

	// 		numToTransfer = () => {
	// 			if (numInAscensionQueue > remainingSpots) {
	// 				return remainingSpots;
	// 			} else {
	// 				return numInAscensionQueue;
	// 			}
	// 		};

	// 		welcomer.queue = [
	// 			...welcomer.queue,
	// 			...soulsAscending.splice(0, numToTransfer),
	// 		];
	// 	});

	// 	setWelcomers(welcomerData);
	// 	console.log(welcomerData[0].queue);
	// }, [soulsAscending]);

	return (
		<>
			<h1>Heaven</h1>
			<p>Queue to Heaven: {soulsAscending.length}</p>
		</>
	);
}
