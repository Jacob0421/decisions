import React from "react";
import styles from "./Tutorial.module.css";

export default function Tutorial(params) {
	const { handleMenuItemClick } = params;

	return (
		<div className={styles.tutorialContainer}>
			<button onClick={() => handleMenuItemClick("Title")}>
				Back to main Menu
			</button>

			<p>First and foremost, Welcome to Decisions!</p>
			<p>
				Decisions is an idle game where Souls are harvested and passed
				through a system which either assigns them to Heaven to become
				angels, or Hell do become demons.
			</p>
			<p>
				There are 3 levels; <strong>Purgatory</strong>,{" "}
				<strong>Heaven</strong>, and <strong>Hell</strong>. Souls will
				originally start in purgatory, and either be sent to heaven, or
				hell by the deciders where they will live their life
			</p>
			<h2>Purgatory</h2>
			<p>
				The start point of the game is in <strong>Purgatory</strong>, at
				the reapers. every so often a reaper will harvest a soul and
				send it to the verifiers queue. From then it will be processed
				and past to the decider. &#40;<strong>Note:</strong> Each soul
				has between 1 and 10 total good and bad traits which should
				ultimately decide whether a soul should go to heaven or
				hell&#41; The decider will take each soul and weigh whether or
				not each soul should go to heaven or hell. The decider starts
				with a 50% accuracy rate, so someone that goes to heaven could
				go to hell, and hell to heaven, respectively.
			</p>
			<h2>Hell</h2>
			<p>
				Once the Decider pushes a soul towards hell, the soul will br
				processed through all of the Horn Fitter, Tail Attacher, amd
				Trident Distributor, before reachimg the devil. Once done at the
				devil, a demon is generated and the counter in the top-right
				increases. the same process happens in heaven, except once going
				through God, God will generate an angel.
			</p>
		</div>
	);
}
