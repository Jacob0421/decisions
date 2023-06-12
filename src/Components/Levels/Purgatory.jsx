import React, { useState } from "react";
import { Reaper } from "../Workers/Purgatory/Reaper";

export function Purgatory() {
	const [reapers, setReapers] = useState([
		{
			name: "1",
			timeToComplete: 15000,
		},
		{
			name: "2",
			timeToComplete: 15000,
		},
	]);

	const handleComplete = (workerType, soul) => {
		switch (workerType) {
			case "Reaper":
				break;
		}
	};

	return (
		<>
			<h1>Purgatory</h1>
			{reapers.map((reaper, index) => (
				<Reaper
					key={index}
					id={index + 1}
					timeToComplete={reaper.timeToComplete}
					handleComplete={handleComplete}
				/>
			))}
		</>
	);
}
