import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // VARIABLES
  const [list, setList] = useState([]);
  console.log("Here is the List initially: ", list);

  // FUNCTIONS
  async function sayHello() {
    alert("Hello!");
    console.log("Testing output");
    //   const response = await fetch("https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/symptoms")
    //     .then((res) => res.json())
    //     .then((data) => setList(data.result));
  }
  // console.log("Here is the List after Symptoms: ", list);

  function sayGoodbye() {
    alert("Goodbye!");
  }

  // OUTPUT
  return (
    <div className="NityaSite">
      <table id="myTable">
        <tbody>
          <tr>
            <td colSpan="2">
              <img src="NityaFB@2x.png" className="Nitya-logo" alt="logo" />
            </td>
          </tr>
          <tr align="center" border="1" bgcolor="green">
            <td>
              <button onClick={sayHello}>See Symptoms</button>
            </td>
            <td>
              <button onClick={sayGoodbye}>See Diseases</button>
            </td>
          </tr>
        </tbody>
      </table>
      <img src="NityaFB@2x.png" className="Nitya-logo" alt="logo" />

      <br></br>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  );
}

export default App;
