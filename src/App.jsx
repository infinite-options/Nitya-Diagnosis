import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListMembers from "./components/ListMembers";
import CheckFunction from "./components/CheckFunction";
import SelectionList from "./components/SelectionList";

function App() {
  // VARIABLES
  const type = "symptom";
  const [list, setList] = useState([]);
  const [symptomList, setSymptomList] = useState([]);
  const [diseaseList, setDiseaseList] = useState([]);
  // console.log("Here is the List initially: ", list); //Why do I need this statement to trigger diseases and symptoms?
  // console.log("Initial Symptoms: ", symptomList); //Why don't these load at the same time?
  // console.log("Initial Diseases: ", diseaseList);
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

  function addSymptom(selection, list) {
    console.log("In addSymptom, Selection:", selection);
    console.log("In addSymptom, List:", list);

    const newList = list.concat(selection.symptom_uid);
    console.log("Here is the New Symptom List: ", newList);

    setSelectionList(newList);
    setSelection(null);
  }

  function addDisease(selection, list) {
    console.log("In addDisease, Selection:", selection);
    console.log("In addDisease, List:", list);

    const newList = list.concat(selection.disease_uid);
    console.log("Here is the New Disease List: ", newList);

    setSelectionList(newList);
    setSelection(null);
  }

  // PASS A JSON OBJECT INTO AN ENDPOINT
  // {disease_uid: []}
  // {disease_uid : ['1', '2', '3' ]}

  // const x = {disease_uid: newList}
  // OUTPUT
  // Could I do the onClick with a ternary?

  // HOW DO I MOVE THIS TO A SEPARATE FILE
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
      {/* {console.log("Disease List to Pass: ", diseaseList)}
      {console.log("Currently Selected: ", selectionList)} */}
      {symptomClicked && (
        <ListMembers
          cast={symptomList}
          onChoice={(selection) => {
            console.log("This is what was chosen: ", selection);
            setSelection(selection);
          }}
          list={selectionList}
          type="symptom"
        />
      )}
      {/* Disease Clicked */}
      {/* {console.log("Disease List to Pass: ", diseaseList)}
      {console.log("Currently Selected: ", selectionList)} */}
      {diseaseClicked && (
        <ListMembers
          cast={diseaseList}
          onChoice={(selection) => {
            console.log("This is what was chosen: ", selection);
            setSelection(selection);
          }}
          list={selectionList}
          type="disease"
        />
      )}
      {/* CONFIRM WAS WAS SELECTED CAN BE ACCESSED */}
      {/* {console.log("Newly Selected: ", selection)} */}
      {/* {console.log("Current List: ", selectionList)} */}
      {/* IF SOMETHING HAS BEEN SELECTED, ADD IT TO THE SELECTION LIST */}
      {selection && type === "symptom" ? addSymptom(selection, selectionList) : addDisease(selection, selectionList)}}
      {/* IF SOMETHING HAS BEEN SELECTED, ADD IT TO THE SELECTION LIST */}
      {/* {selection && addDisease(selection, selectionList)} */}
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
