import React, { useState, useEffect } from "react";

import {
	WelcomerInitial,
	WingReceptionistInitial,
	HaloDistributorInitial,
	GodInitial,
} from "../../../Data/DataIntialization/Heaven";

import Welcomer from "./Workers/Welcomer";
import WingReceptionist from "./Workers/WingReceptionist";
import HaloDistributor from "./Workers/HaloDistributor";
import God from "./Workers/God";

import styles from "./Heaven.module.css";

export default function Heaven(params) {
	let {
		soulsAscending,
		soulsAscendingQueueMax,
		handleProcessedSoulFromQueue,
		handleFinalProcess,
		handleRevenue,
	} = params;

	const [welcomers, setWelcomers] = useState({
		workers: WelcomerInitial.workers,
		timeToComplete: WelcomerInitial.timeToComplete,
		revenueGenerated: WelcomerInitial.revenueGenerated,
	});

	const [wingReceptionists, setWingReceptionists] = useState({
		workers: WingReceptionistInitial.workers,
		timeToComplete: WingReceptionistInitial.timeToComplete,
		revenueGenerated: WingReceptionistInitial.revenueGenerated,
		queueMax: WingReceptionistInitial.queueMax,
		queue: [],
	});

	const [haloDistibutors, setHaloDistributors] = useState({
		workers: HaloDistributorInitial.workers,
		timeToComplete: HaloDistributorInitial.timeToComplete,
		revenueGenerated: HaloDistributorInitial.revenueGenerated,
		queueMax: HaloDistributorInitial.queueMax,
		queue: [],
	});

	const [god, setGod] = useState({
		timeToComplete: GodInitial.timeToComplete,
		revenueGenerated: GodInitial.revenueGenerated,
		queueMax: GodInitial.queueMax,
		queue: [],
	});

	const handleComplete = (workerType, soul) => {
		switch (workerType) {
			case "Welcomer":
				queueWithReceptionists(soul);
				handleProcessedSoulFromQueue("Heaven");
				break;
			case "WingReceptionist":
				const toDistributer = removeReceptionistsSoul();
				queueWithDistributors(toDistributer);
				break;
			case "HaloDistributor":
				const toGod = removeDistributorsSoul();
				sendSoulToGod(toGod);
				break;
			case "God":
				removeGodsSoul();
				handleFinalProcess("Heaven");
				break;
			default:
				break;
		}
	};

	const removeGodsSoul = () => {
		setGod((prev) => {
			return {
				...prev,
				queue: [...prev.queue.filter((a, index) => index !== 0)],
			};
		});
	};

	const sendSoulToGod = (soul) => {
		if (god.queue.length < god.queueMax) {
			setGod((prev) => {
				return { ...prev, queue: [...prev.queue, soul] };
			});
		} else {
		}
	};

	const queueWithDistributors = (soul) => {
		if (haloDistibutors.queue.length < haloDistibutors.queueMax) {
			setHaloDistributors((prev) => {
				return {
					...prev,
					queue: [...prev.queue, soul],
				};
			});
		} else {
		}
	};

	const removeDistributorsSoul = () => {
		const toBeReturned = haloDistibutors.queue[0];

		setHaloDistributors((prev) => {
			return {
				...prev,
				queue: prev.queue.filter((a, index) => index !== 0),
			};
		});

		return toBeReturned;
	};

	const removeReceptionistsSoul = () => {
		const toBeReturned = wingReceptionists.queue[0];

		setWingReceptionists((prev) => {
			return {
				...prev,
				queue: prev.queue.filter((a, index) => index !== 0),
			};
		});

		return toBeReturned;
	};

	// For HornFitter
	const queueWithReceptionists = (soul) => {
		if (wingReceptionists.queue.length < wingReceptionists.queueMax) {
			setWingReceptionists((prev) => {
				return {
					...prev,
					queue: [...prev.queue, soul],
				};
			});
		} else {
		}
	};

	return (
		<>
			<h1 className="title">Heaven</h1>
			<div className={styles.workerContainer}>
				<Welcomer
					timeToComplete={welcomers.timeToComplete}
					souls={soulsAscending}
					handleComplete={handleComplete}
					queueMax={soulsAscendingQueueMax}
					handleRevenue={handleRevenue}
					revenueGenerated={welcomers.revenueGenerated}
					workerCount={welcomers.workers}
				/>

				<WingReceptionist
					timeToComplete={wingReceptionists.timeToComplete}
					souls={wingReceptionists.queue}
					handleComplete={handleComplete}
					handleRevenue={handleRevenue}
					revenueGenerated={wingReceptionists.revenueGenerated}
					workerCount={wingReceptionists.workers}
					queueMax={wingReceptionists.queueMax}
				/>

				<HaloDistributor
					timeToComplete={haloDistibutors.timeToComplete}
					souls={haloDistibutors.queue}
					handleComplete={handleComplete}
					handleRevenue={handleRevenue}
					revenueGenerated={haloDistibutors.revenueGenerated}
					workerCount={haloDistibutors.workers}
					queueMax={haloDistibutors.queueMax}
				/>
				<God
					timeToComplete={god.timeToComplete}
					souls={god.queue}
					handleComplete={handleComplete}
					handleRevenue={handleRevenue}
					revenueGenerated={god.revenueGenerated}
					queueMax={god.queueMax}
				/>
			</div>
		</>
	);
}
