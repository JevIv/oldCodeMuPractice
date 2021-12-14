import React, { useState } from "react";

export default function Array1() {
  const initNotes = [
    {
      id: 1234,
      prop1: "value1",
      prop2: "value2",
      prop3: "value3"
    },
    {
      id: 4567,
      prop1: "value1.2",
      prop2: "value2.2",
      prop3: "value3.2"
    },
    {
      id: 7890,
      prop1: "value1.3",
      prop2: "value2.3",
      prop3: "value3.3"
    }
  ];

  const [notes, setNotes] = useState(initNotes);
  function remItem(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }
  const result = notes.map((note) => {
    return (
      <p key={note.id}>
        <span>{note.prop1}</span>,<span>{note.prop2}</span>,
        <span>{note.prop3}</span>,
        <button onClick={() => remItem(note.id)}>remove</button>
      </p>
    );
  });

  return <div>{result}</div>;
}
