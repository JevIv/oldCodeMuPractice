import React, { useState } from "react";

export default function Array3() {
  let id = Math.random();
  const initNotes = [
    {
      id: id,
      prop1: "value1",
      prop2: "value2",
      prop3: "value3"
    },
    {
      id: id,
      prop1: "value1.2",
      prop2: "value2.2",
      prop3: "value3.2"
    },
    {
      id: id,
      prop1: "value1.3",
      prop2: "value2.3",
      prop3: "value3.3"
    }
  ];

  const [notes, setNotes] = useState(initNotes);
  const [editID, setEditID] = useState(null);

  const result = notes.map((note) => {
    return (
      <p key={note.id}>
        <span>{note.prop1}</span>,<span> {note.prop2}</span>,
        <span> {note.prop3}</span>,
        <button
          onClick={() => {
            setEditID(note.id);
          }}>
          edit
        </button>
      </p>
    );
  });

  function getValue(prop) {
    return notes.reduce(
      (res, note) => (note.id === editID ? note[prop] : res),
      ""
    );
  }

  function changeItem(prop, event) {
    setNotes(
      notes.map((note) =>
        note.id === editID
          ? { ...note, [prop]: event.currentTarget.value }
          : note
      )
    );
  }

  return (
    <div>
      {result}
      <input
        value={getValue("prop1")}
        onChange={(event) => changeItem("prop1", event)}
      />
      <input
        value={getValue("prop2")}
        onChange={(event) => changeItem("prop1", event)}
      />
      <input
        value={getValue("prop3")}
        onChange={(event) => changeItem("prop1", event)}
      />
      <br />
      <button onClick={() => setEditID(null)}>save</button>
    </div>
  );
}
