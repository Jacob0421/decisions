import React, { useState } from "react";
import Shop from "../Shop/Shop";
import Purgatory from "../Levels/Purgatory";
import Heaven from "../Levels/Heaven";
import Hell from "../Levels/Hell";

export function Content() {
	// const handleNewWorker = (Level, buildingName) => {
	// 	switch (Level) {
	// 		case "Reaper":
	// 			let reaperData = GetReaper;
	// 			reaperData.workerCount += 1;
	// 			break;

	// 		default:
	// 			break;
	// 	}
	// };

	const [soulsAscending, setSoulsAscending] = useState({
		maxQueueLength: 10,
		queue: [],
	});
	const [soulsDescending, setSoulsDescending] = useState({
		maxQueueLength: 10,
		queue: [],
	});

	const handleAscension = (soul) => {
		let ascensionData = soulsAscending;

		if (ascensionData.queue.length >= ascensionData.maxQueueLength) {
			console.log(
				"No room in the Ascension queue. This soul is left to roam in purgatory"
			);
			return;
		}

		ascensionData.queue = [...ascensionData.queue, soul];
		setSoulsAscending(ascensionData);
	};

	const handleDescension = (soul) => {
		let decensionData = soulsDescending;

		if (decensionData.queue.length >= decensionData.maxQueueLength) {
			console.log(
				"No room in the Ascension queue. This soul is left to roam in purgatory"
			);
			return;
		}

		decensionData.queue = [...decensionData.queue, soul];
		setSoulsAscending(decensionData);
	};

	return (
		<>
			<Shop />
			<Heaven soulsAscending={soulsAscending} />
			<p>Heaven Queue: {soulsAscending.queue.length}</p>

			<Purgatory
				handleAscension={handleAscension}
				handleDescension={handleDescension}
			/>

			<p>Hell Queue: {soulsDescending.queue.length}</p>
			<Hell soulsDescending={soulsDescending} />
		</>
	);
}
