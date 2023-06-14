import React, { useCallback, useState } from "react";
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

	const [showShop, setShowShop] = useState(false);

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

		setSoulsAscending((prev) => {
			return { ...prev, queue: [...prev.queue, soul] };
		});
	};

	const handleDescension = (soul) => {
		let descensionData = soulsDescending;

		if (descensionData.queue.length >= descensionData.maxQueueLength) {
			console.log(
				"No room in the Descension queue. This soul is left to roam in purgatory"
			);
			return;
		}

		setSoulsDescending((prev) => {
			return { ...prev, queue: [...prev.queue, soul] };
		});
	};

	const handleShopVisibility = () => {
		setShowShop((current) => !current);
	};

	return (
		<>
			<button onClick={handleShopVisibility}>Show Shop</button>

			{showShop && <Shop />}
			<Heaven soulsAscending={soulsAscending.queue} />
			<p>Heaven Queue: {soulsAscending.queue.length}</p>

			<Purgatory
				handleAscension={handleAscension}
				handleDescension={handleDescension}
			/>

			<p>Hell Queue: {soulsDescending.queue.length}</p>
			<Hell soulsDescending={soulsDescending.queue} />
		</>
	);
}
