import React, { useState } from "react";

export default function Array3() {
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

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  function remItem(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }
  let id = Math.random();

  function addItem() {
    let obj = {
      id: id,
      prop1: value1,
      prop2: value2,
      prop3: value3
    };
    setNotes([...notes, obj]);
    setValue1("");
    setValue2("");
    setValue3("");
  }

  const result = notes.map((note) => {
    return (
      <p key={note.id}>
        <span>{note.prop1}</span>,<span> {note.prop2}</span>,
        <span> {note.prop3}</span>,
        <button onClick={() => remItem(note.id)}>remove</button>
      </p>
    );
  });

  return (
    <div>
      {result}
      <br />
      <input
        value={value1}
        onChange={(event) => setValue1(event.currentTarget.value)}
      />
      <input
        value={value2}
        onChange={(event) => setValue2(event.currentTarget.value)}
      />
      <input
        value={value3}
        onChange={(event) => {
          setValue3(event.currentTarget.value);
          event.currentTarget.value = "";
        }}
      />
      <button onClick={addItem}>save</button>
    </div>
  );
}
