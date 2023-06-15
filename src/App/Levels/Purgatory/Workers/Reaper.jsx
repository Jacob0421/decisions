import React, { useState, useEffect } from "react";
import { SoulData } from "../../../../../Data/Soul";

export default function Reaper(params) {
	const {
		timeToComplete,
		handleComplete,
		id,
		revenueGenerated,
		handleRevenue,
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

		// console.log(`Reaper ${id} Completed`);
		handleRevenue(revenueGenerated);
		handleComplete("Reaper", id, soul);
	}

	useEffect(() => {
		const ticker = setInterval(() => GenerateSoul(), timeToComplete);

		return () => clearInterval(ticker);
	}, []);

	return (
		<>
			<h1>Reaper</h1>
		</>
	);
}
