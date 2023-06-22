import React, { useState } from "react";
import ShopItems from "./ShopItems/ShopItems";

export default function ShopBuilding(params) {
	const { buildingName, buildingBackground, buildingUpgrades, handleBuy } =
		params;

	const [isVisible, setisVisible] = useState(false);

	return (
		<>
			<img
				src={process.env.PUBLIC_URL + buildingBackground}
				className="building-icon"
				onClick={() => setisVisible(!isVisible)}
				alt={buildingName}
			/>
			<div className="upgrade-container">
				{isVisible &&
					buildingUpgrades.map((upgrade, index) => (
						<ShopItems
							key={index}
							itemName={upgrade.name}
							itemEffect={upgrade.effect}
							itemCost={upgrade.cost}
							levelAffected={upgrade.levelAffected}
							buildingAffected={upgrade.buildingAffected}
							upgradeType={upgrade.upgradeType}
							handleBuy={handleBuy}
						/>
					))}
			</div>
		</>
	);
}
