import "./ShowWinner.css";

export default function ShowWinner({ winnerName, reset, resetAll }) {
  const handleClick = () => {
    reset();
  };

  const handleClickResAll = () => {
    resetAll();
  };

  return (
    <div
      className={"ShowWinner"}
      style={{ display: winnerName !== null ? "block" : "none" }}
    >
      <div>
        {winnerName === "Draw" ? <p>Draw!</p> : <p>Winner is {winnerName}</p>}
        <button onClick={handleClick}>Reset current game</button>
        <button onClick={handleClickResAll}>Reset</button>
      </div>
    </div>
  );
}
