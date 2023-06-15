import React from "react";

export default function Explosion() {
	return (
		<>
			<img
				src={process.env.PUBLIC_URL + "/explosion.gif"}
				style={{
					height: "100vh",
					width: "100vw",
					zIndex: 9999,
					position: "absolute",
				}}
			/>
		</>
	);
}
