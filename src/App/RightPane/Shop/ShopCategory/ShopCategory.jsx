import React, { useState } from "react";
import ShopBuilding from "./ShopBuilding/ShopBuilding";

export default function ShopCategory(params) {
	const { levelName, buildings, handleBuy } = params;
	const [isVisible, setIsVisible] = useState(false);

	return (
		<>
			<div className="shop-divider"></div>
			<div className="item-section">
				<h1 onClick={() => setIsVisible(!isVisible)}>{levelName}</h1>

				<div className="building-container">
					{buildings.map(
						(building, index) =>
							isVisible && (
								<ShopBuilding
									key={index}
									buildingName={building.BuildingName}
									buildingBackground={building.img}
									buildingUpgrades={building.Upgrades}
									handleBuy={handleBuy}
								/>
							)
					)}
				</div>
			</div>
		</>
	);
}
