import { useState } from "react";
import "./Player.css";
export default function Player({ defaultName, symbol, isActive }) {
  const [name, setName] = useState(defaultName);
  const [isEditing, setIsEditing] = useState(false);

  const handleOnCLick = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleOnChange = (event) => {
    setName((prevName) => event.target.value);
  };

  return (
    <div
      className={"Player"}
      style={{ backgroundColor: isActive ? "gray" : "" }}
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
      <button onClick={handleOnCLick}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
}
