const Board = ({ cells, winningLine, onCellClicked, isGameEnded }) => {
  return (
    <div className="game-board" role="group" aria-label="Tic-Tac-Toe game board">
      {cells.map((cell, index) => {
        const isWinningCell = winningLine.includes(index);
        const label = cell
          ? `Square ${index + 1}, ${cell.toUpperCase()}${isWinningCell ? ", part of winning line" : ""}`
          : `Square ${index + 1}, empty`;

        return (
          <button
            aria-label={label}
            aria-disabled={Boolean(cell || isGameEnded)}
            className={[
              "game-cell",
              cell ? `game-cell--${cell}` : "",
              isWinningCell ? "game-cell--winner" : "",
            ].filter(Boolean).join(" ")}
            disabled={Boolean(cell || isGameEnded)}
            key={index}
            onClick={() => onCellClicked(index)}
            type="button"
          >
            {cell === "x" ? <span aria-hidden="true">×</span> : cell === "o" ? <span aria-hidden="true">○</span> : null}
          </button>
        );
      })}
    </div>
  );
};

export default Board;
