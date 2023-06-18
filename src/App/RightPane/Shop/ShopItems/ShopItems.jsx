import React from "react";

export default function ShopItems(params) {
	const {
		itemName,
		itemEffect,
		itemCost,
		levelAffected,
		buildingAffected,
		upgradeType,
		handleBuy,
	} = params;

	function buyItem() {
		let workerModifier = 0,
			moneyModifier = 1,
			productivityModifier = 1,
			queueModifier = 0;

		switch (upgradeType) {
			case "Worker":
				workerModifier = 1;
				productivityModifier = 0.5;
				break;
			case "Money":
				moneyModifier = 1.25;
				break;
			case "Productivity":
				productivityModifier = 0.75;
				break;
			case "Queue":
				queueModifier = 5;
				break;
			default:
				break;
		}

		handleBuy({
			itemCost: itemCost,
			levelAffected: levelAffected,
			buildingAffected: buildingAffected,
			upgradeModifiers: {
				worker: workerModifier,
				money: moneyModifier,
				productivity: productivityModifier,
				queue: queueModifier,
			},
		});
	}

	return (
		<button onClick={() => buyItem()}>
			<p>{itemName}</p>
			<strong>Effect:</strong>
			<p>{itemEffect}</p>
			<p>Cost: {itemCost}</p>
		</button>
	);
}
