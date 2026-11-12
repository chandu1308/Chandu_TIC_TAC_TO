import "./styles.css";
import { useState } from "react";
import Board from "./Board.js";

export default function App() {
  const winningCases = [
    [0, 1, 2], // row 1 occupied,
    [3, 4, 5], // row 2 occupied,
    [6, 7, 8], // row 3 occupied,
    [0, 3, 6], // col 1 occupied,
    [1, 4, 7], // col 2 occupied,
    [2, 5, 8], // col 3 occupied,
    [0, 4, 8], // diagonal 1 occupied
    [2, 4, 6], // diagonal 2 occupied
  ];
  const onCellClicked = (cellIndex) => {
    if (!isCellEmpty(cellIndex)) {
      return;
    }
    setGameState((currentGameState) => {
      const updatedCells = [...currentGameState.cells];
      updatedCells[cellIndex] = currentGameState.currentPlayer;
      return {
        ...currentGameState,
        currentPlayer: currentGameState.currentPlayer === "x" ? "0" : "x",
        cells: updatedCells,
      };
    });
  };
  const isCellEmpty = (cellIndex) => {
    return gameState.cells[cellIndex] === "";
  };
  const isGameDraw = () => {
    return (
      gameState.cells.every((cell) => cell !== "") &&
      didXplayerWon &&
      did0playerWon
    );
  };
  const resetGame = () => {
    return setGameState(defaultState);
  };

  const defaultState = {
    currentPlayer: "x",
    cells: Array.from({ length: 9 }).fill(""),
  };
  const [gameState, setGameState] = useState(defaultState);
  const didPlayerWin = (player, gameState) => {
    return winningCases.some((eachCase) => {
      return eachCase.every((eachCaseIndex) => {
        return gameState.cells[eachCaseIndex] === player;
      });
    });
  };
  const didXplayerWon = didPlayerWin("x", gameState);
  const did0playerWon = didPlayerWin("0", gameState);
  const isDraw = isGameDraw();
  const isGameEnded = didXplayerWon || did0playerWon || isDraw;
  return (
    <div className="App">
      <h1>Chandu TIC_TAC_TO</h1>
      <h2></h2>
      <Board
        gameState={gameState}
        onCellClicked={onCellClicked}
        isGameEnded={isGameEnded}
      />
      {didXplayerWon && <p>Player "x" won!!!</p>}
      {did0playerWon && <p>Player "0" won!!!</p>}
      {isGameEnded && (
        <button onClick={() => resetGame()}>Play Again !!!</button>
      )}
    </div>
  );
}
