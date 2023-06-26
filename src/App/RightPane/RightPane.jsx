import React, { useState } from "react";
import Shop from "./Shop/Shop";
import MessageBox from "./MessageBox/MessageBox";
import {
	GiAngelOutfit,
	GiBullHorns,
	GiReceiveMoney,
	GiShoppingCart,
} from "react-icons/gi";
import { LuSettings, LuMessagesSquare } from "react-icons/lu";

import Options from "./Options/Options";

export default function RightPane(params) {
	const {
		angelCount,
		demonCount,
		money,
		messages,
		handleBuy,
		handleMenuItemClick,
	} = params;

	const [isShopVisible, setIsShopVisible] = useState(true);
	const [isStatsVisible, setIsStatsVisible] = useState(false);
	const [isOptionsVisible, setIsOptionsVisible] = useState(false);

	const handleMenuClick = (selectedPane) => {
		switch (selectedPane) {
			case "Shop":
				setIsShopVisible(true);
				setIsStatsVisible(false);
				setIsOptionsVisible(false);
				break;
			case "Stats":
				setIsShopVisible(false);
				setIsStatsVisible(true);
				setIsOptionsVisible(false);
				break;
			case "Options":
				setIsShopVisible(false);
				setIsStatsVisible(false);
				setIsOptionsVisible(true);
				break;
			default:
				break;
		}
	};

	return (
		<>
			<div className="right-pane">
				<div className="right-menu">
					<div className="menu-tabs">
						<div
							className={
								isShopVisible ? "menu-tab selected" : "menu-tab"
							}
							onClick={() => handleMenuClick("Shop")}>
							<GiShoppingCart />
						</div>
						<div
							className={
								isStatsVisible
									? "menu-tab selected"
									: "menu-tab"
							}
							onClick={() => handleMenuClick("Stats")}>
							<LuMessagesSquare />
						</div>
						<div
							className={
								isOptionsVisible
									? "menu-tab selected"
									: "menu-tab"
							}
							onClick={() => handleMenuClick("Options")}>
							<LuSettings />
						</div>
					</div>
					<div className="current-stats">
						<p style={{ alignItems: "center", fontSize: "20px" }}>
							<GiAngelOutfit />: {angelCount}
						</p>
						<p
							style={{
								alignItems: "center",
								fontSize: "20px",
							}}>
							<GiBullHorns />: {demonCount}
						</p>
						<p
							style={{
								alignItems: "center",
								fontSize: "20px",
							}}>
							<GiReceiveMoney />: {money}
						</p>
					</div>
				</div>
				<div className="right-content">
					{isShopVisible && <Shop handleBuy={handleBuy} />}
					{isStatsVisible && <MessageBox messages={messages} />}
					{isOptionsVisible && (
						<Options handleMenuItemClick={handleMenuItemClick} />
					)}
				</div>
			</div>
		</>
	);
}
