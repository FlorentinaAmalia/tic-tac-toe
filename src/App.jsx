import { useEffect, useState } from "react";
import "./App.css";
import Player from "../components/Player.jsx";
import GameBoard from "../components/GameBoard.jsx";
function App() {
  // list of made moves
  const [moves, setMoves] = useState([]);

  const [activePlayer, setActivePlayer] = useState("X");
  const changePlayer = () => {
    setActivePlayer((prevState) => (prevState === "X" ? "O" : "X"));
  };

  const handleMove = (rowIdx, colIdx) => {
    const newState = moves.map((el) => ({ ...el }));
    const moveAlreadyMade = newState.some((el) => {
      return el.row === rowIdx && el.col === colIdx;
    });

    if (!moveAlreadyMade) {
      setMoves((prevState) => {
        return [
          { row: rowIdx, col: colIdx, player: activePlayer },
          ...prevState,
        ];
      });
      changePlayer();
    }
  };

  return (
    <div className={"game-container"}>
      <div className={"players"}>
        <div className={"player"}>
          <Player
            defaultName={"Player 1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
          />
        </div>
        <div className={"player"}>
          <Player
            defaultName={"Player 2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
          />
        </div>
      </div>
      <GameBoard
        activeSymbol={activePlayer}
        takeMove={handleMove}
        takenMoves={moves}
      />
    </div>
  );
}

export default App;
