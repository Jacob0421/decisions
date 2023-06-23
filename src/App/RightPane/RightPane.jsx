import React, { useState } from "react";
import Shop from "./Shop/Shop";
import MessageBox from "./MessageBox/MessageBox";

export default function RightPane(params) {
	const { angelCount, demonCount, money, messages, handleBuy } = params;

	const [isShopVisible, setIsShopVisible] = useState(true);
	const [isStatsVisible, setIsStatsVisible] = useState(false);

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
							Messages
						</button>
					</div>
					<div className="current-stats">
						<p>Angels: {angelCount}</p>
						<p>Demons: {demonCount}</p>
						<p>Money: {money}</p>
					</div>
				</div>
				<div className="right-content">
					{isShopVisible && <Shop handleBuy={handleBuy} />}
					{isStatsVisible && <MessageBox messages={messages} />}
				</div>
			</div>
		</>
	);
}
