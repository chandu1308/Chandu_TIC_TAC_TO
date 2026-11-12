const Board = ({ gameState, onCellClicked, isGameEnded }) => {
  return (
    <>
      <p>
        Current Player: <b>{gameState.currentPlayer}</b>
      </p>
      <div
        style={{
          display: "inline-grid",
          gridTemplateRows: "1fr 1fr 1fr",
          gridTemplateColumns: "1fr 1fr 1fr",
          pointerEvents: isGameEnded ? "none" : "auto",
        }}
      >
        {gameState.cells.map((cell, i) => (
          <div
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid #000",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              onCellClicked(i);
            }}
            key={i.toString()}
          >
            {cell}
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
