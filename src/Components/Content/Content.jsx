import React from "react";
import { Shop } from "../Shop/Shop";
import { Purgatory } from "../Levels/Purgatory";

export function Content() {
	// const handleNewWorker = (Level, buildingName) => {
	// 	switch (Level) {
	// 		case "Reaper":
	// 			let reaperData = GetReaper;
	// 			reaperData.workerCount += 1;
	// 			break;

	// 		default:
	// 			break;
	// 	}
	// };

	return (
		<>
			<Shop />
			<Purgatory />
		</>
	);
}
