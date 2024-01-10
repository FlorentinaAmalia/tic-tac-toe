import { useState } from "react";
import "./GameBoard.css";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ takenMoves = [], takeMove }) {
  // const [board, setBoard] = useState(defaultBoard);

  // it will change every time takenMoves is changing, that is managed by useState.
  const gameBoard = initialBoard;
  for (let move of takenMoves) {
    gameBoard[move.row][move.col] = move.player;
  }

  const handleClick = (rowIdx, colIdx) => {
    // setBoard((prevState) => {
    //   const currentState = prevState.map((row) => [...row]);
    //   currentState[rowIdx][colIdx] = activeSymbol;
    //   return currentState;
    // });
    takeMove(rowIdx, colIdx);
    // changePlayer();
  };

  return (
    <div className={"GameBoard"}>
      {gameBoard.map((row, rowIdx) =>
        row.map((el, elIdx) => (
          <div
            onClick={() => handleClick(rowIdx, elIdx)}
            key={`${rowIdx}.${elIdx}`}
          >
            {gameBoard[rowIdx][elIdx] ? (
              <p>{gameBoard[rowIdx][elIdx]}</p>
            ) : (
              <p> </p>
            )}
          </div>
        )),
      )}
    </div>
  );
}
