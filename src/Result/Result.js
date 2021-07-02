import "./Result.css";
import React from "react";
import "../GlobalVariable";

function Result({ winner, reset }) {
	return (
		<div className="result">
			{winner == global.CIRCLE && "Circle won the game"}
			{winner == global.CROSS && "Cross won the game"}
			{winner == "It is a tie" && "It is a tie"}
			<button onClick={reset}>Reset</button>
		</div>
	);
}

export default Result;
