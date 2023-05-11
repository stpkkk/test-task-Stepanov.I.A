import React, { useState } from "react";
import "../src/index.css";
import { PlayersForm } from "./components/PlayersForm";
import Table from "./components/Table";

function App() {
  const [participants, setParticipants] = useState([]);

  const addParticipant = participantName => {
    if (participantName) {
      fetch("http://localhost/random-number/")
        .then(response => response.text())
        .then(data => {
          const newParticipant = {
            id: Math.random().toString(36).substr(2, 9),
            name: participantName,
            points: data,
          };
          setParticipants([...participants, newParticipant]);
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Олимпиада</h1>
      </header>
      <PlayersForm addParticipant={addParticipant} />
      {participants.length > 0 && <Table participants={participants} />}
    </div>
  );
}

export default App;
