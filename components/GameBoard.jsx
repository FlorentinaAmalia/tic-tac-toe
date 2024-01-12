import { useState } from "react";
import "./GameBoard.css";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ takenMoves = [], takeMove }) {
  let gameBoard = initialBoard.map((el) => [...el]);
  for (let move of takenMoves) {
    gameBoard[move.row][move.col] = move.player;
  }
  const handleClick = (rowIdx, colIdx) => {
    takeMove(rowIdx, colIdx);
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
