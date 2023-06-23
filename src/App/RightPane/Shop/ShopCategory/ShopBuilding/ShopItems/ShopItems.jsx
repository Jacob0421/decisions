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

		console.log(
			[
				itemName,
				itemEffect,
				itemCost,
				levelAffected,
				buildingAffected,
				upgradeType,
				workerModifier,
				moneyModifier,
				productivityModifier,
				queueModifier,
			].join(" ")
		);

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
		<button className="upgrade-details" onClick={() => buyItem()}>
			<h2>{itemName}</h2>
			<p>
				<strong>Effect:</strong>
				{itemEffect}
			</p>
			<p>Cost: {itemCost}</p>
		</button>
	);
}
