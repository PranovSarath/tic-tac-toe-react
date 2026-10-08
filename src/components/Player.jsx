import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleNameChange() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" value={playerName} onChange={handleChange} />
        ) : (
          <>
            <span className="player-name">{playerName}</span>
            <span className="player-symbol">{symbol}</span>
          </>
        )}
      </span>
      <button onClick={handleNameChange}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
