import { useEffect, useState } from "react";
import "./Player.css";
export default function Player({
  name,
  symbol,
  isActive,
  gameOver,
  onChangeName,
}) {
  // const [name, setName] = useState(defaultName);
  const [isEditing, setIsEditing] = useState(false);

  const handleOnCLick = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleOnChange = (event) => {
    // setName(event.target.value);
    onChangeName(event.target.value);
  };

  useEffect(() => {
    onChangeName(name);
  }, [name]);

  return (
    <div
      className={"Player"}
      style={{
        // backgroundColor: isActive ? "gray" : "",
        border: isActive ? "2px solid #DE6321" : "",
      }}
    >
      <span className={"name"}>
        {isEditing ? (
          <input
            id={"name-input"}
            onChange={handleOnChange}
            type={"text"}
            value={name}
            name={"name"}
          />
        ) : (
          name
        )}
      </span>
      <span className={"symbol"}>{symbol}</span>
      <button onClick={handleOnCLick} disabled={gameOver ? true : false}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}
