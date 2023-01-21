import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListMembers from "./components/ListMembers";
import CheckFunction from "./components/CheckFunction";
import SelectionList from "./components/SelectionList";

function App() {
  // VARIABLES
  const [list, setList] = useState([]);
  const [symptomList, setSymptomList] = useState([]);
  const [diseaseList, setDiseaseList] = useState([]);

  const [clicked, setClicked] = useState(false);
  const [symptomClicked, setSymptomClicked] = useState(false);
  const [diseaseClicked, setDiseaseClicked] = useState(false);
  console.log("Button Status: Symptom: ", symptomClicked, "Disease: ", diseaseClicked);

  let [selectionList, setSelectionList] = useState([]);
  let [selection, setSelection] = useState(null);

  // FUNCTIONS -------------------------------------

  // USE EFFECT TO CALL VARIABLES.  IS IT CORRECT PRACTICE TO INITIALIZE THE VARIABLES?  WHY ASYNC?
  function fetchSymptoms() {
    // const response = await fetch("cast.json");
    const response = fetch("https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/symptoms")
      .then((response) => response.json())
      .then((data) => {
        setSymptomList(data.result);
        console.log("in fetchSymptoms ", symptomList);
      });
  }

  // console.log("Initial Symptoms 2: ", symptomList);

  function fetchDiseases() {
    // const response = await fetch("cast.json");
    const response = fetch("https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/diseases")
      .then((response) => response.json())
      .then((data) => {
        setDiseaseList(data.result);
        console.log("in fetchDiseases: ", diseaseList);
      });
  }

  // THIS WILL AUTOMATICALLY LOAD THE DATA WHEN THE PROGRAM STARTS
  // useEffect(() => {
  //   fetchSymptoms();
  //   fetchDiseases();
  // }, []);

  // THIS FUNCTION CAN RETURN VALUES BUT CANNOT RETURN HTML EVEN THOUGH IT CALLS CheckFunction!
  function testFunctionCall() {
    // alert("Hello!");
    console.log("Testing Hello");
    CheckFunction();
    console.log("Testing Hello Again");
    // <ListMembers list={symptomList} />;
  }

  function handleAdd(selection, list) {
    console.log("In Handle Add selection", selection);
    console.log("In Handle Add selection.disease_name", selection.disease_name);
    console.log("Passed in List", list);

    const newList = list.concat(selection.disease_uid);
    console.log("Here is the New List: ", newList);

    // {disease_uid: []}
    // {disease_uid : ['1', '2', '3' ]}

    // const x = {disease_uid: newList}

    console.log("New List", newList[0]);
    // console.log("New List", newList);

    setSelectionList(newList);
    setSelection(null);
  }

  function pickDisease(selection, list) {
    console.log("In Pick Disease selection", selection);
    console.log("In Pick Disease selection.disease_name", selection.disease_name);
    console.log("Passed in List", list);

    const newList = list.concat(selection.disease_uid);
    console.log("Here is the New List: ", newList);

    setSelectionList(newList);
    setSelection(null);
  }

  // HOW TO PASS JSON DATA INTO ENDPOINT CALL
  // {disease_uid: []}
  // {disease_uid : ['1', '2', '3' ]}
  // const x = {disease_uid: newList}

  // OUTPUT
  // Could I do the onClick with a ternary?
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
            <td colSpan="2">
              {/* These seem to be equivalent */}
              {/* <button onClick={testFunctionCall}>See Symptoms1</button> */}
              {/* <button onClick={() => {testFunctionCall();}}> See Symptoms1 </button> */}
              <button
                onClick={() => {
                  testFunctionCall();
                  setSymptomClicked(false);
                  setDiseaseClicked(false);
                }}
              >
                See Symptoms1
              </button>
            </td>
          </tr>
          <tr align="center" border="1" bgcolor="green">
            <td>
              <button
                onClick={() => {
                  fetchSymptoms();
                  setSymptomClicked(!clicked);
                  setDiseaseClicked(false);
                }}
              >
                See Symptoms
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  fetchDiseases();
                  setDiseaseClicked(!clicked);
                  setSymptomClicked(false);
                }}
              >
                See Diseases
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Symptom Clicked */}
      {symptomClicked && (
        <ListMembers
          cast={symptomList}
          onChoice={(selection) => {
            console.log("This is what was chosen: ", selection);
            setSelection(selection);
          }}
          list={selectionList}
          type={diseaseClicked === true ? "disease" : "symptom"}
        />
      )}

      {/* Disease Clicked */}
      {console.log("Disease List to Pass: ", diseaseList)}
      {console.log("Currently Selected: ", selectionList)}
      {diseaseClicked && (
        <ListMembers
          cast={diseaseList}
          onChoice={(selection) => {
            console.log("This is what was chosen: ", selection);
            setSelection(selection);
          }}
          list={selectionList}
          type={diseaseClicked === true ? "disease" : "symptom"}
        />
      )}

      {/* Confirm that what was selected can be accessed */}
      {console.log("Newly Selected: ", selection)}
      {console.log("Current List: ", selectionList)}

      {/* {selection && pickDisease(selection.disease_name, selectionList)} */}
      {selection && pickDisease(selection, selectionList)}
      {console.log("Updated List: ", selectionList)}

      <img src="NityaFB@2x.png" className="Nitya-logo" alt="logo" />
      <br></br>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  );
}

export default App;
