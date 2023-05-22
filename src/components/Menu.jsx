import { gameStates, useGameStore } from "../store" 

export const Menu = () => {
	const { startGame, gameState } =  useGameStore((state) => ({
		startGame: state.startGame,
		gameState: state.gameState
	}))

	return (
		<div className={`menu ${
			gameState === gameStates.MENU ? "menu--hidden" : ""
		}`}>
			<h1>Kana game</h1>
			<button onClick={() => startGame({ mode: "hiragana" })}>Start hiragana Game</button>
			<button onClick={() => startGame({ mode: "katakana" })}>Start Katakana Game</button>
		</div>		
	)
}