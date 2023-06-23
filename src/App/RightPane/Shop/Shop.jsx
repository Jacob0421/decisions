import React from "react";
import { Levels } from "../../../Data/ShopInitialization";
import "./Shop.css";
import ShopCategory from "./ShopCategory/ShopCategory";

export default function Shop(params) {
	const { handleBuy } = params;

	return (
		<div className="content center-text">
			<span className="shop-title">Shop</span>
			{Levels.map((level, index) => (
				<ShopCategory
					key={index}
					levelName={level.LevelName}
					buildings={level.Buildings}
					handleBuy={handleBuy}
				/>
			))}
		</div>
	);
}
