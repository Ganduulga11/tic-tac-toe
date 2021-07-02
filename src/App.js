import React, { useState } from "react";
import "./App.css";
import Square from "./Square/Square";
import Result from "./Result/Result";
import "./GlobalVariable";

function App() {
	function detectWinner(p) {
		if (p[0] == global.CIRCLE && p[1] == global.CIRCLE && p[2] == global.CIRCLE)
			return global.CIRCLE;
		if (p[3] == global.CIRCLE && p[4] == global.CIRCLE && p[5] == global.CIRCLE)
			return global.CIRCLE;
		if (p[6] == global.CIRCLE && p[7] == global.CIRCLE && p[8] == global.CIRCLE)
			return global.CIRCLE;

		if (p[0] == global.CIRCLE && p[3] == global.CIRCLE && p[6] == global.CIRCLE)
			return global.CIRCLE;
		if (p[1] == global.CIRCLE && p[4] == global.CIRCLE && p[7] == global.CIRCLE)
			return global.CIRCLE;
		if (p[2] == global.CIRCLE && p[5] == global.CIRCLE && p[8] == global.CIRCLE)
			return global.CIRCLE;

		if (p[0] == global.CIRCLE && p[4] == global.CIRCLE && p[8] == global.CIRCLE)
			return global.CIRCLE;
		if (p[2] == global.CIRCLE && p[4] == global.CIRCLE && p[6] == global.CIRCLE)
			return global.CIRCLE;

		if (p[0] == global.CROSS && p[1] == global.CROSS && p[2] == global.CROSS)
			return global.CIRCLE;
		if (p[3] == global.CROSS && p[4] == global.CROSS && p[5] == global.CROSS)
			return global.CROSS;
		if (p[6] == global.CROSS && p[7] == global.CROSS && p[8] == global.CROSS)
			return global.CROSS;

		if (p[0] == global.CROSS && p[3] == global.CROSS && p[6] == global.CROSS)
			return global.CROSS;
		if (p[1] == global.CROSS && p[4] == global.CROSS && p[7] == global.CROSS)
			return global.CROSS;
		if (p[2] == global.CROSS && p[5] == global.CROSS && p[8] == global.CROSS)
			return global.CROSS;

		if (p[0] == global.CROSS && p[4] == global.CROSS && p[8] == global.CROSS)
			return global.CROSS;
		if (p[2] == global.CROSS && p[4] == global.CROSS && p[6] == global.CROSS)
			return global.CROSS;

		if (p.every((position) => position != global.EMPTY)) return "It is a tie";
	}

	const [state, setState] = useState({
		player: global.CIRCLE,
		positions: [
			global.EMPTY,
			global.EMPTY,
			global.EMPTY,
			global.EMPTY,
			global.EMPTY,
			global.EMPTY,
			global.EMPTY,
			global.EMPTY,
			global.EMPTY,
		],
		winner: global.EMPTY,
	});

	function takeTurn(position) {
		const positions = [...state.positions];
		positions[position] = state.player;

		setState({
			player: state.player == global.CIRCLE ? global.CROSS : global.CIRCLE,
			positions,
			winner: detectWinner(positions),
		});
	}

	function reset() {
		setState({
			player: global.CIRCLE,
			positions: [
				global.EMPTY,
				global.EMPTY,
				global.EMPTY,
				global.EMPTY,
				global.EMPTY,
				global.EMPTY,
				global.EMPTY,
				global.EMPTY,
				global.EMPTY,
			],
		});
	}

	const winner = detectWinner(state.positions);

	return (
		<div id="app">
			<div>
				<div className="grid">
					<Square position={0} value={state.positions[0]} takeTurn={takeTurn} />
					<Square position={1} value={state.positions[1]} takeTurn={takeTurn} />
					<Square position={2} value={state.positions[2]} takeTurn={takeTurn} />
					<Square position={3} value={state.positions[3]} takeTurn={takeTurn} />
					<Square position={4} value={state.positions[4]} takeTurn={takeTurn} />
					<Square position={5} value={state.positions[5]} takeTurn={takeTurn} />
					<Square position={6} value={state.positions[6]} takeTurn={takeTurn} />
					<Square position={7} value={state.positions[7]} takeTurn={takeTurn} />
					<Square position={8} value={state.positions[8]} takeTurn={takeTurn} />
				</div>
				{winner && <Result winner={winner} reset={reset} />}
			</div>
		</div>
	);
}

export default App;
