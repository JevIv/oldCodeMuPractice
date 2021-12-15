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

  const [obj, setObj] = useState(getInitObj());

  function remItem(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function getInitObj() {
    return {
      id: id,
      prop1: "",
      prop2: "",
      prop3: ""
    };
  }

  function addItem() {
    setNotes([...notes, obj]);
    setObj(getInitObj());
  }

  function changeProp(prop, event) {
    setObj({ ...obj, [prop]: event.currentTarget.value });
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
        value={obj.prop1}
        onChange={(event) => changeProp("prop1", event)}
      />
      <input
        value={obj.prop2}
        onChange={(event) => changeProp("prop2", event)}
      />
      <input
        value={obj.prop3}
        onChange={(event) => {
          changeProp("prop3", event);
          event.currentTarget.value = "";
        }}
      />
      <button onClick={addItem}>save</button>
    </div>
  );
}
