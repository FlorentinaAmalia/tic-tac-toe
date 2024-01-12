import { useState } from "react";
import "./App.css";
import Player from "../components/Player.jsx";
import GameBoard from "../components/GameBoard.jsx";
import ShowWinner from "../components/ShowWinner.jsx";

import { winningSymbol } from "./WinningCombinations.js";
function App() {
  // list of made moves
  const [moves, setMoves] = useState([]);
  const [winner, setWinner] = useState(null);
  const [activePlayer, setActivePlayer] = useState("X");
  const [playerNames, setPlayerNames] = useState({
    player1: "Player 1",
    player2: "Player 2",
  });
  const changePlayer = () => {
    setActivePlayer((prevState) => (prevState === "X" ? "O" : "X"));
  };

  const changePlayerName = (player, element) => {
    setPlayerNames((prev) => {
      return { ...prev, [player]: element };
    });
  };

  const reset = () => {
    setMoves([]);
    setWinner(null);
    setActivePlayer("X");
  };

  const resetAll = () => {
    reset();
    setPlayerNames({ player1: "Player 1", player2: "Player 2" });
  };

  const handleMove = (rowIdx, colIdx) => {
    const newState = moves.map((el) => ({ ...el }));
    const moveAlreadyMade = newState.some((el) => {
      return el.row === rowIdx && el.col === colIdx;
    });

    const movesNew = [
      { row: rowIdx, col: colIdx, player: activePlayer },
      ...newState,
    ];
    if (!moveAlreadyMade) {
      const isWinner = checkWin([
        { row: rowIdx, col: colIdx, player: activePlayer },
        ...newState,
      ]);
      if (isWinner) {
        setWinner(isWinner === "X" ? playerNames.player1 : playerNames.player2);
      }
      setMoves((prevState) => {
        return [
          { row: rowIdx, col: colIdx, player: activePlayer },
          ...prevState,
        ];
      });
      if (movesNew.length === 9) {
        setWinner("Draw");
      }
      changePlayer();
    }
  };

  const checkWin = (moves) => {
    const playerX = moves
      .filter((el) => el.player === "X")
      .map((el) => ({ row: el.row, col: el.col }));
    const playerO = moves
      .filter((el) => el.player === "O")
      .map((el) => ({ row: el.row, col: el.col }));

    const xWon = winningSymbol(playerX, "X");
    const oWon = winningSymbol(playerO, "O");
    return xWon ? xWon : oWon ? oWon : null;
  };

  return (
    <div className={"game-container"}>
      <div className={"players"}>
        <div className={"player"}>
          <Player
            // defaultName={"Player 1"}
            name={playerNames.player1}
            symbol={"X"}
            isActive={activePlayer === "X"}
            gameOver={winner}
            onChangeName={(element) => changePlayerName("player1", element)}
          />
        </div>
        <div className={"player"}>
          <Player
            // defaultName={"Player 2"}
            name={playerNames.player2}
            symbol={"O"}
            isActive={activePlayer === "O"}
            gameOver={winner}
            onChangeName={(element) => changePlayerName("player2", element)}
          />
        </div>
      </div>
      <div className={"container-GameBoard"}>
        <GameBoard
          activeSymbol={activePlayer}
          takeMove={handleMove}
          takenMoves={moves}
        />
        <ShowWinner winnerName={winner} reset={reset} resetAll={resetAll} />
      </div>
      {/*<Log moves={moves} />*/}
    </div>
  );
}

export default App;
