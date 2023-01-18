import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

// FUNCTIONS

function App() {
  return (
    <div className="NityaSite">
      <table id="myTable">
        <tr>
          <td colspan="2">
            <img src="NityaFB@2x.png" className="Nitya-logo" alt="logo" />
          </td>
        </tr>
        <tr align="center" border="1" bgcolor="green">
          <td>
            <button>See Symptoms</button>
          </td>
          <td>
            <button>See Diseases</button>
          </td>
        </tr>
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
