import React from "react";
import { Upgrades, Consumables } from "../../../../Data/ShopItems";
import "./Shop.css";

export default function Shop() {
	return (
		<div className="content center-text">
			<span className="title">Shop</span>

			<div className="shop-divider"></div>

			<h2 className="section-header">Upgrades</h2>
			<div className="item-section">
				{Upgrades.map((item, index) => (
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
