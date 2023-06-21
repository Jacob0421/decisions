import React, { useState, useEffect } from "react";

import {
	ReaperInitial,
	VerifierInitial,
	DeciderInitial,
} from "../../../Data/DataIntialization/Purgatory";

import Reaper from "./Workers/Reaper";
import Verifier from "./Workers/Verifier";
import Decider from "./Workers/Decider";

import styles from "./Purgatory.module.css";

export default function Purgatory(params) {
	const {
		handleAscension,
		handleDescension,
		itemBought,
		handleBuyCompleted,
		handleRevenue,
		handleNewMessage,
	} = params;

	useEffect(() => {
		if (Object.keys(itemBought).length === 0) {
			return;
		}
		applyItemBought();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemBought]);

	const applyItemBought = () => {
		switch (itemBought.buildingAffected) {
			case "Reaper":
				setReapers((prev) => {
					return {
						...prev,
						workers:
							prev.workers + itemBought.upgradeModifiers.worker,
						timeToComplete: Math.ceil(
							prev.timeToComplete *
								itemBought.upgradeModifiers.productivity
						),
						revenueGenerated: Math.ceil(
							prev.revenueGenerated *
								itemBought.upgradeModifiers.money
						),
					};
				});
				break;
			case "Verifier":
				setVerifiers((prev) => {
					return {
						...prev,
						workers: (prev.workers +=
							itemBought.upgradeModifiers.worker),
						timeToComplete: Math.ceil(
							(prev.timeToComplete *=
								itemBought.upgradeModifiers.productivity)
						),
						revenueGenerated: Math.ceil(
							(prev.revenueGenerated *=
								itemBought.upgradeModifiers.money)
						),
						queueMax: (prev.queueMax +=
							itemBought.upgradeModifiers.queue),
					};
				});
				break;
			case "Decider":
				setDeciders((prev) => {
					return {
						...prev,
						workers: (prev.workers +=
							itemBought.upgradeModifiers.worker),
						timeToComplete: Math.ceil(
							(prev.timeToComplete *=
								itemBought.upgradeModifiers.productivity)
						),
						revenueGenerated: Math.ceil(
							(prev.revenueGenerated *=
								itemBought.upgradeModifiers.money)
						),
						queueMax: (prev.queueMax +=
							itemBought.upgradeModifiers.queue),
					};
				});
				break;
			default:
				break;
		}

		handleBuyCompleted("Purgatory");
	};

	const [reapers, setReapers] = useState({
		workers: ReaperInitial.workers,
		timeToComplete: ReaperInitial.timeToComplete,
		revenueGenerated: ReaperInitial.revenueGenerated,
	});

	const [verifiers, setVerifiers] = useState({
		workers: VerifierInitial.workers,
		timeToComplete: VerifierInitial.timeToComplete,
		revenueGenerated: VerifierInitial.revenueGenerated,
		queueMax: VerifierInitial.queueMax,
		queue: [],
	});

	const [deciders, setDeciders] = useState({
		workers: DeciderInitial.workers,
		timeToComplete: DeciderInitial.timeToComplete,
		percentCorrect: DeciderInitial.percentCorrect,
		revenueGenerated: DeciderInitial.revenueGenerated,
		queueMax: DeciderInitial.queueMax,
		queue: [],
	});

	const handleComplete = (workerType, soul) => {
		switch (workerType) {
			case "Reaper":
				queueWithVerifier(soul);
				break;

			case "Verifier":
				// Returns soul removed from the Verifiers queue
				const toDeciders = removeVerifiersSoul();

				// Takes the soul removed from pervious Verifier and finds a Decider queue to place it in
				queueWithDeciders(toDeciders);
				break;
			default:
				break;
		}
	};

	// for Verifier
	const removeVerifiersSoul = () => {
		const toRemove = verifiers.queue[0];

		setVerifiers((prev) => {
			return {
				...prev,
				queue: prev.queue.filter((s, index) => index !== 0),
			};
		});

		return toRemove;
	};

	// for Verifier
	const queueWithVerifier = (soul) => {
		if (verifiers.queue.length < verifiers.queueMax) {
			setVerifiers((prev) => {
				return { ...prev, queue: [...prev.queue, soul] };
			});
		} else {
			//message

			const date = `${new Date().toLocaleString(undefined, {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			})}`;
			handleNewMessage({
				type: "Bad",
				text: "Verifier Queue Overload",
				time: date,
			});
		}
	};

	//for Decider
	const queueWithDeciders = (soul) => {
		if (deciders.queue.length < deciders.queueMax) {
			setDeciders((prev) => {
				return { ...prev, queue: [...prev.queue, soul] };
			});
		} else {
			const date = `${new Date().toLocaleString(undefined, {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			})}`;
			handleNewMessage({
				type: "Bad",
				text: "Decider Queue Overload",
				time: date,
			});
		}
	};

	// for Decider
	const handleDecision = (decision, soul) => {
		setDeciders((prev) => {
			return {
				...prev,
				queue: prev.queue.filter((d, index) => index !== 0),
			};
		});

		if (decision) {
			//calback function from ../App/App.jsx
			handleAscension(soul);
		} else {
			handleDescension(soul);
		}
	};

	return (
		<>
			<h1 className="title">Purgatory</h1>
			<div className={styles.workerContainer}>
				<Reaper
					workerCount={reapers.workers}
					timeToComplete={reapers.timeToComplete}
					handleComplete={handleComplete}
					revenueGenerated={reapers.revenueGenerated}
					handleRevenue={handleRevenue}
				/>
				<Verifier
					workerCount={verifiers.workers}
					timeToComplete={verifiers.timeToComplete}
					souls={verifiers.queue}
					queueMax={verifiers.queueMax}
					handleComplete={handleComplete}
					revenueGenerated={verifiers.revenueGenerated}
					handleRevenue={handleRevenue}
				/>
				<Decider
					timeToComplete={deciders.timeToComplete}
					percentCorrect={deciders.percentCorrect}
					souls={deciders.queue}
					handleDecision={handleDecision}
					revenueGenerated={deciders.revenueGenerated}
					handleRevenue={handleRevenue}
					workerCount={deciders.workers}
					queueMax={deciders.queueMax}
				/>
			</div>
		</>
	);
}
