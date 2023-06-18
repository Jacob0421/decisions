import React, { useCallback, useState } from "react";
import Purgatory from "./Levels/Purgatory/Purgatory";
import Heaven from "./Levels/Heaven/Heaven";
import Hell from "./Levels/Hell/Hell";
import RightPane from "./RightPane/RightPane";
import Explosion from "./Explosion";
import "./App.css";

export default function Content() {
	const [timeTaken, setTimeTaken] = useState(Date.now());
	const [isEnd, setIsEnd] = useState(false);

	const [demonCount, setDemonCount] = useState(0);
	const [angelCount, setAngelCount] = useState(0);

	const [soulsAscending, setSoulsAscending] = useState({
		queueMax: 10,
		queue: [],
	});
	const [soulsDescending, setSoulsDescending] = useState({
		queueMax: 10,
		queue: [],
	});

	const handleAscension = (soul) => {
		let ascensionData = soulsAscending;

		if (ascensionData.queue.length >= ascensionData.queueMax) {
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

		if (descensionData.queue.length >= descensionData.queueMax) {
			// console.log(
			// 	"No room in the Descension queue. This soul is left to roam in purgatory"
			// );
			return;
		}

		setSoulsDescending((prev) => {
			return { ...prev, queue: [...prev.queue, soul] };
		});
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
			case "Heaven":
				setSoulsAscending((prev) => {
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
                setDemonCount((prev) => prev + 1);
                break;
            case "Heaven":
                setAngelCount((prev) => prev + 1);
                break;
            default:
                break;
        }
    };

	const [hellItemBought, setHellItemBought] = useState({});
	const [purgatoryItemBought, setPurgatoryItemBought] = useState({});

	const handleBuy = (upgradeObject) => {
		if (upgradeObject.itemCost > money) {
			return;
		}

		setMoney((prev) => prev - upgradeObject.itemCost);
		if (
			upgradeObject.buildingAffected === "God" &&
			upgradeObject.upgradeModifiers.worker === 1
		) {
			setTimeTaken((prev) => prev - Date.now);
			setIsEnd(true);

			console.log(`Time Taken: ${timeTaken} isEnd: ${isEnd}`);
		}

		switch (upgradeObject.levelAffected) {
			case "Hell":
				setHellItemBought(upgradeObject);
				break;
			case "Purgatory":
				setPurgatoryItemBought(upgradeObject);
				break;
			default:
				break;
		}
	}; 

	const handleBuyCompleted = (levelName) => {
		switch (levelName) {
			case "Purgatory":
				setPurgatoryItemBought({});
				break;
			default:
				break;
		}
	};

	const [money, setMoney] = useState(1000);

	const handleRevenue = (revenue) => {
		setMoney((prev) => prev + revenue);
	};

	return (
		<>
			{/* {isEnd ? <Explosion /> : ""} */}
			<RightPane
				angelCount={angelCount}
				demonCount={demonCount}
				money={money}
				handleBuy={handleBuy}
			/>
			<div className="level-container">
				<div className="heaven">
					<Heaven
						soulsAscending={soulsAscending.queue}
						soulsAscendingQueueMax={soulsAscending.queueMax}
						handleProcessedSoulFromQueue={
							handleProcessedSoulFromQueue
						}
						handleFinalProcess={handleFinalProcess}
						handleRevenue={handleRevenue}
					/>
				</div>

				<div className="purgatory">
					<Purgatory
						handleAscension={handleAscension}
						handleDescension={handleDescension}
						itemBought={purgatoryItemBought}
						handleBuyCompleted={handleBuyCompleted}
						handleRevenue={handleRevenue}
					/>
				</div>
				<div className="hell">
					<Hell
						soulsDescending={soulsDescending.queue}
						handleProcessedSoulFromQueue={
							handleProcessedSoulFromQueue
						}
						handleFinalProcess={handleFinalProcess}
						itemBought={hellItemBought}
						soulsDescendingQueueMax={soulsDescending.queueMax}
						handleRevenue={handleRevenue}
					/>
				</div>
			</div>
		</>
	);
}
