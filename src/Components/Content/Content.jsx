import React, { useCallback, useState } from "react";
import Shop from "./MenuOptions/Shop/Shop";
import Stats from "./MenuOptions/Stats/Stats";
import Purgatory from "../Levels/Purgatory";
import Heaven from "../Levels/Heaven";
import Hell from "../Levels/Hell";

import "./Content.css";

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

	const [isShopVisible, setIsShopVisible] = useState(true);
	const [isStatsVisible, setIsStatsVisible] = useState(false);

	const [demonCount, setDemonCount] = useState(0);

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
			// console.log(
			// 	"No room in the Ascension queue. This soul is left to roam in purgatory"
			// );
			return;
		}

		setSoulsAscending((prev) => {
			return { ...prev, queue: [...prev.queue, soul] };
		});
	};

	const handleDescension = (soul) => {
		let descensionData = soulsDescending;

		if (descensionData.queue.length >= descensionData.maxQueueLength) {
			// console.log(
			// 	"No room in the Descension queue. This soul is left to roam in purgatory"
			// );
			return;
		}

		setSoulsDescending((prev) => {
			return { ...prev, queue: [...prev.queue, soul] };
		});
	};

	const handleMenuClick = (selectedPane) => {
		switch (selectedPane) {
			case "Shop":
				setIsShopVisible(true);
				setIsStatsVisible(false);
				break;
			case "Stats":
				setIsShopVisible(false);
				setIsStatsVisible(true);
				break;
		}
	};

	const handleProcessedSoulFromQueue = (levelName) => {
		switch (levelName) {
			case "Hell":
				setSoulsDescending((prev) => {
					return {
						...prev,
						queue: [
							...prev.queue.filter((soul, index) => index !== 0),
						],
					};
				});
				break;
			default:
				break;
		}
	};

	const handleFinalProcess = (levelName) => {
		switch (levelName) {
			case "Hell":
				setDemonCount(demonCount + 1);
				break;
			default:
				break;
		}
	};

	return (
		<>
			<div className="right-pane">
				<div className="right-menu">
					<div>
						<button onClick={() => handleMenuClick("Shop")}>
							Shop
						</button>
						<button onClick={() => handleMenuClick("Stats")}>
							Stats
						</button>
					</div>
					<div className="current-stats">
						<p>Angels: &#123;Count&#125;</p>
						<p>Demons: {demonCount}</p>
						<p>Money: &#123;Count&#125;</p>
					</div>
				</div>
				<div className="right-content">
					{isShopVisible && <Shop />}
					{isStatsVisible && <Stats />}
				</div>
			</div>
			<div className="level-container">
				<div className="level heaven">
					<Heaven soulsAscending={soulsAscending.queue} />
				</div>

				<div className="level purgatory">
					<Purgatory
						handleAscension={handleAscension}
						handleDescension={handleDescension}
					/>
				</div>
				<div className="level hell">
					<Hell
						soulsDescending={soulsDescending.queue}
						handleProcessedSoulFromQueue={
							handleProcessedSoulFromQueue
						}
						handleFinalProcess={handleFinalProcess}
					/>
				</div>
			</div>
		</>
	);
}
