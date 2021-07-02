import React from "react";
import "./Square.css";
import Circle from "../Circle/Circle";
import Cross from "../Cross/Cross";
import "../GlobalVariable";

function Square({ position, value, takeTurn }) {
	function handleClick() {
		if (value == global.EMPTY) takeTurn(position);
	}
	return (
		<div className="square" onClick={handleClick}>
			{value === global.CIRCLE && <Circle />}
			{value === global.CROSS && <Cross />}
		</div>
	);
}

export default Square;
