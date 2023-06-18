import React, { useState } from "react";

import {
	HornFitterInitial,
	TailAttacherInitial,
	TridentDistributorInitial,
	TheDevilInitial,
} from "../../../Data/DataIntialization/Hell";

import HornFitter from "./Workers/HornFitter";
import TailAttacher from "./Workers/TailAttacher";
import TridentDistributor from "./Workers/TridentDistributor";
import TheDevil from "./Workers/TheDevil";

import styles from "./Hell.module.css";

export default function Hell(params) {
	let {
		soulsDescending,
		handleProcessedSoulFromQueue,
		handleFinalProcess,
		itemBought,
		soulsDescendingQueueMax,
		handleRevenue,
	} = params;

	const [hornFitters, setHornFitters] = useState({
		workers: HornFitterInitial.workers,
		timeToComplete: HornFitterInitial.timeToComplete,
		revenueGenerated: HornFitterInitial.revenueGenerated,
	});

	const [tailAttachers, setTailAttachers] = useState({
		workers: TailAttacherInitial.workers,
		timeToComplete: TailAttacherInitial.timeToComplete,
		revenueGenerated: TailAttacherInitial.revenueGenerated,
		queueMax: TailAttacherInitial.queueMax,
		queue: [],
	});

	const [tridentDistibutors, setTridentDistributors] = useState({
		workers: TridentDistributorInitial.workers,
		timeToComplete: TridentDistributorInitial.timeToComplete,
		revenueGenerated: TridentDistributorInitial.revenueGenerated,
		queueMax: TridentDistributorInitial.queueMax,
		queue: [],
	});

	const [theDevil, setTheDevil] = useState({
		timeToComplete: TheDevilInitial.timeToComplete,
		revenueGenerated: TheDevilInitial.revenueGenerated,
		queueMax: TheDevilInitial.queueMax,
		queue: [],
	});

	const handleComplete = (workerType, soul) => {
		switch (workerType) {
			case "HornFitter":
				queueWithAttacher(soul);
				handleProcessedSoulFromQueue("Hell");
				break;
			case "TailAttacher":
				let toDistributer = removeAttachersSoul();
				queueWithDistributor(toDistributer);
				break;
			case "TridentDistributor":
				const toDevil = removeDistributorsSoul();
				sendSoulToDevil(toDevil);
				break;
			case "TheDevil":
				removeDevilsSoul();
				handleFinalProcess("Hell");
				break;
			default:
				break;
		}
	};

	const removeDevilsSoul = () => {
		setTheDevil((prev) => {
			return {
				...prev,
				queue: [...prev.queue.filter((s, index) => index !== 0)],
			};
		});
	};

	const sendSoulToDevil = (soul) => {
		if (theDevil.queue.length < theDevil.queueMax) {
			setTheDevil((prev) => {
				return { ...prev, queue: [...prev.queue, soul] };
			});
		} else {
		}
	};

	const queueWithDistributor = (soul) => {
		if (tridentDistibutors.queue.length < tridentDistibutors.queueMax) {
			setTridentDistributors((prev) => {
				return {
					...prev,
					queue: [...prev.queue, soul],
				};
			});
		} else {
		}
	};

	const removeDistributorsSoul = (workerId) => {
		const toBeReturned = tridentDistibutors.queue[0];

		setTridentDistributors((prev) => {
			return {
				...prev,
				queue: prev.queue.filter((a, index) => index !== 0),
			};
		});

		return toBeReturned;
	};

	const removeAttachersSoul = () => {
		const toBeReturned = tailAttachers.queue[0];

		setTailAttachers((prev) => {
			return {
				...prev,
				queue: prev.queue.filter((a, index) => index !== 0),
			};
		});

		return toBeReturned;
	};

	const queueWithAttacher = (soul) => {
		if (tailAttachers.queue.length < tailAttachers.queueMax) {
			setTailAttachers((prev) => {
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
			<h1 className="title">Hell</h1>
			<div className={styles.workerContainer}>
				<HornFitter
					timeToComplete={hornFitters.timeToComplete}
					souls={soulsDescending}
					revenueGenerated={hornFitters.revenueGenerated}
					workerCount={hornFitters.workers}
					queueMax={soulsDescendingQueueMax}
					handleComplete={handleComplete}
					handleRevenue={handleRevenue}
				/>
				<TailAttacher
					timeToComplete={tailAttachers.timeToComplete}
					souls={tailAttachers.queue}
					revenueGenerated={tailAttachers.revenueGenerated}
					workerCount={tailAttachers.workers}
					queueMax={tailAttachers.queueMax}
					handleComplete={handleComplete}
					handleRevenue={handleRevenue}
				/>
				<TridentDistributor
					timeToComplete={tridentDistibutors.timeToComplete}
					souls={tridentDistibutors.queue}
					revenueGenerated={tridentDistibutors.revenueGenerated}
					workerCount={tridentDistibutors.workers}
					queueMax={tridentDistibutors.queueMax}
					handleComplete={handleComplete}
					handleRevenue={handleRevenue}
				/>

				<TheDevil
					timeToComplete={theDevil.timeToComplete}
					souls={theDevil.queue}
					handleComplete={handleComplete}
					handleRevenue={handleRevenue}
					revenueGenerated={theDevil.revenueGenerated}
					queueMax={theDevil.queueMax}
				/>
			</div>
		</>
	);
}
