import React from "react";
import { Upgrades, Consumables } from "../../../Data/ShopItems";
import ShopItems from "./ShopItems/ShopItems";
import "./Shop.css";

export default function Shop(params) {
	const { handleBuy } = params;

	return (
		<div className="content center-text">
			<span className="title">Shop</span>

			<div className="shop-divider"></div>

			<h2 className="section-header">Upgrades</h2>
			<div className="item-section">
				{Upgrades.map((item, index) => (
					<ShopItems
						Key={index}
						id={index}
						itemName={item.name}
						itemCost={item.cost}
						itemEffect={item.effect}
						levelAffected={item.levelAffected}
						buildingAffected={item.buildingAffected}
						upgradeType={item.upgradeType}
						upgradeModifier={item.upgradeModifier}
						handleBuy={handleBuy}
					/>
				))}
			</div>
			<div className="shop-divider"></div>
			<h2 className="section-header">Consumables</h2>
			<div className="item-section">
				{Consumables.map((item, index) => (
					<button className="card flex col">
						<p>{item.name}</p>
						<label>
							<strong>Effect:</strong>
							<p>{item.effect}</p>
						</label>
						<p>Cost: {item.cost}</p>
					</button>
				))}
			</div>
			<div className="shop-divider"></div>
		</div>
	);
}
