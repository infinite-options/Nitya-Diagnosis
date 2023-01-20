import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const initialList = [
  {
    id: "a",
    name: "Robin",
  },
  {
    id: "b",
    name: "Dennis",
  },
];

const otherList = [];

function App() {
  // const [list, setList] = useState(initialList);
  const [list, setList] = useState(otherList);
  console.log(list);
  const [name, setName] = React.useState("");

  // get input
  function handleChange(event) {
    // track input field's state
    setName(event.target.value);
  }
  // add input
  function handleAdd() {
    // add item
    const newList = list.concat({ name, id: uuidv4() });
    setList(newList);

    setName("");
  }

  return (
    <div>
      <div>
        {/* get input */}
        <input type="text" value={name} placeholder="enter name" onChange={handleChange} />
        {/* add input */}
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
