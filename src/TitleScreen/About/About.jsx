import React from "react";
import styles from "./About.module.css";

export default function About(params) {
	const { handleMenuItemClick } = params;

	return (
		<div className={styles.aboutContainer}>
			<button onClick={() => handleMenuItemClick("Title")}>
				Back to main Menu
			</button>

			<p>
				First we would like to give a huge shoutout to the Portland
				Indie Game Squad &#40;
				<a href="https://pigsquad.com/">PIGSquad</a>&#41;. We are a
				small group of 3 out of the SouthEast US and this was our first
				time putting together something for a Game Jam. The rules and
				format were all easy to follow and definitely friendly to newer
				developers, and we will definitely be on the lookout for future
				Game Jams to join in.
			</p>
			<p>
				For more details on the event, see the PIGSquad Site here:
				<br />
				<a href="https://itch.io/jam/ssjidle">
					Summer Slow Jams 2023: Idle
				</a>
			</p>
			<p>
				The Type of game for this Gamejam was Idle, and the category for
				this Game Jam was Mutations. Our first take on this was the
				"Mutation" from being a soul of a recently passed and either
				being sent to hell to become a demon, or being sent to Heaven to
				become an angel
			</p>
		</div>
	);
}
