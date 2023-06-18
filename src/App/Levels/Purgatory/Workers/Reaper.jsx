import React, { useState, useEffect } from "react";
import { SoulData } from "../../../../Data/Soul";

export default function Reaper(params) {
	const {
		timeToComplete,
		handleComplete,
		revenueGenerated,
		handleRevenue,
		workerCount,
	} = params;

	function GenerateSoul() {
		let randNum = 0,
			countGoodTraits = 0,
			countBadTraits = 0;

		for (let i = 0; i < SoulData.maxNumOfTraits; i++) {
			randNum = Math.floor(Math.random() * 100);
			if (randNum > 49) {
				countGoodTraits += 1;
			} else {
				countBadTraits += 1;
			}
		}

		const soul = {
			GoodTraits: countGoodTraits,
			BadTraits: countBadTraits,
		};

		handleRevenue(revenueGenerated);
		handleComplete("Reaper", soul);
	}

	useEffect(() => {
		const ticker = setInterval(() => GenerateSoul(), timeToComplete);

		return () => clearInterval(ticker);
	});

	return (
		<div className="Worker">
			<h3>Reapers</h3>
			<div className="worker-details">
				<p>Count:{workerCount}</p>
				<p>Rate: {(1000 / timeToComplete).toFixed(2)}/s</p>
			</div>
		</div>
	);
}
