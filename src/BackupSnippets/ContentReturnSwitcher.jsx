const [heavenVisible, setHeavenVisible] = useState(false);
const [purgatoryVisible, setPurgatoryVisible] = useState(true);
const [hellVisible, setHellVisible] = useState(false);

const handleClick = (levelName) => {
	switch (levelName) {
		case "Heaven":
			setHeavenVisible(true);
			setPurgatoryVisible(false);
			setHellVisible(false);
			break;
		case "Purgatory":
			setHeavenVisible(false);
			setPurgatoryVisible(true);
			setHellVisible(false);
			break;
		case "Hell":
			setHeavenVisible(false);
			setPurgatoryVisible(false);
			setHellVisible(true);
			break;
	}
};

return (
	<section className="test-container">
		<div className="test-buttons">
			<button onClick={() => handleClick("Heaven")}>Show Heaven</button>
			<button onClick={() => handleClick("Purgatory")}>
				Show Purgatory
			</button>
			<button onClick={() => handleClick("Hell")}>Show Hell</button>
		</div>

		<div
			className={[
				"test",
				heavenVisible ? "heaven-visible" : "",
				purgatoryVisible ? "purgatory-visible" : "",
				hellVisible ? "hell-visible" : "",
			].join(" ")}>
			<div className="lower one"></div>
			<div className="lower two"></div>
			<div className="lower three"></div>
		</div>
	</section>
);
