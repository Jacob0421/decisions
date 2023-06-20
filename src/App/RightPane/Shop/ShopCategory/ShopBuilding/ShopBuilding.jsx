import React, { useState } from "react";
import ShopItems from "./ShopItems/ShopItems";

export default function ShopBuilding(params) {
	const { buildingName, buildingUpgrades, handleBuy } = params;

	const [isVisible, setisVisible] = useState(false);

	return (
		<>
			<h2 onClick={() => setisVisible(!isVisible)}>{buildingName}</h2>
			{isVisible &&
				buildingUpgrades.map((upgrade, index) => (
					<ShopItems
						itemName={upgrade.name}
						itemEffect={upgrade.effect}
						itemCost={upgrade.cost}
						levelAffected={upgrade.levelAffected}
						buildingAffected={upgrade.buildingAffected}
						upgradeType={upgrade.upgradeType}
						handleBuy={handleBuy}
					/>
				))}
		</>
	);
}
