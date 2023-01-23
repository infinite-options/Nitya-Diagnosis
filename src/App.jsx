import React, { useState, useEffect, useRef } from "react";
// import logo from "./logo.svg";
import "./App.css";
import ListMembers from "./components/ListMembers";

function App() {
  // VARIABLES
  // const [list, setList] = useState([]);
  const [symptomList, setSymptomList] = useState([]);
  const [diseaseList, setDiseaseList] = useState([]);
  const [resultsList, setResultsList] = useState([]);
  const [newList, setNewList] = useState([]);

  const clicked = false;

  // const [clicked, setClicked] = useState(false);
  const [symptomClicked, setSymptomClicked] = useState(false);
  const [diseaseClicked, setDiseaseClicked] = useState(false);
  console.log("IN APP-----------------------------------");
  console.log("Button Status: Symptom: ", symptomClicked, "Disease: ", diseaseClicked);

  let [selectionList, setSelectionList] = useState([]);
  let [selection, setSelection] = useState(null);
  // let [resultsList, setResultsList] = useState([]);

  // FUNCTIONS -------------------------------------

  // USE EFFECT TO CALL VARIABLES.  IS IT CORRECT PRACTICE TO INITIALIZE THE VARIABLES?  WHY ASYNC?
  function fetchSymptoms() {
    // const response = await fetch("cast.json");
    fetch("https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/symptoms")
      .then((response) => response.json())
      .then((data) => {
        setSymptomList(data.result);
        console.log("in fetchSymptoms ", symptomList);
      });
  }

  // console.log("Initial Symptoms 2: ", symptomList);

  function fetchDiseases() {
    // const response = await fetch("cast.json");
    fetch("https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/diseases")
      .then((response) => response.json())
      .then((data) => {
        setDiseaseList(data.result);
        console.log("in fetchDiseases: ", diseaseList);
      });
  }

  function findDiseases(selectionList) {
    console.log("Input Symptoms: ", selectionList);
    let diseaseResultList = [];
    // const response = await fetch("cast.json");
    selectionList.forEach((element) => {
      console.log("Print element: ", element);
      console.log("Test element: ", element);
      fetch(`https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/dfroms/${element}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Data Result: ", data.result);
          setDiseaseList(data.result);
          diseaseResultList = diseaseResultList.concat(data.result);
          console.log("in fetchDiseases: ", diseaseResultList);
          setResultsList(diseaseResultList);
          console.log("After findDiseases: ", resultsList);
        });
    });
  }

  // HOW TO PASS JSON DATA INTO ENDPOINT CALL
  // {disease_uid: []}
  // {disease_uid : ['1', '2', '3' ]}
  // const x = {disease_uid: newList}

  // THIS WILL AUTOMATICALLY LOAD THE DATA WHEN THE PROGRAM STARTS
  // useEffect(() => {
  //   fetchSymptoms();
  //   fetchDiseases();
  // }, []);

  // SELECTION FUNCTIONS

  function pickSymptom(selection, list) {
    console.log("In Pick Symptom selection", selection);
    console.log("In Pick Symptom selection.symptom_uid", selection.symptom_uid);
    console.log("Passed in List", list);

    console.log(list.includes(selection.symptom_uid));
    if (!list.includes(selection.symptom_uid)) {
      console.log("Inside IF statement ");
      setNewList(list.concat(selection.symptom_uid));
      console.log("Here is the New List: ", newList);
      setSelectionList(newList);
      console.log("Here is the New List: ", selectionList);
      console.log("Here is the New List: ", newList);
    }
    console.log("Here is the Symptom Current List: ", selectionList);
    setSelection(null);
  }

  function pickDisease(selection, list) {
    console.log("In Pick Disease selection", selection);
    console.log("In Pick Disease selection.disease_uid", selection.disease_uid);
    console.log("Passed in List", list);

    console.log(list.includes(selection.disease_uid));
    if (!list.includes(selection.disease_uid)) {
      // const newList = list.concat(selection.disease_uid);
      setNewList(list.concat(selection.disease_uid));
      setSelectionList(newList);
      console.log("Here is the New List: ", newList);
    }
    console.log("Here is the Disease Current List: ", selectionList);
    setSelection(null);
  }

  function pickResult(selection, list) {
    console.log("In Pick Result selection", selection);
    console.log("In Pick Result selection.result_uid", selection.ds_uid);
    console.log("Passed in List", list);

    console.log(list.includes(selection.ds_uid));
    if (!list.includes(selection.ds_uid)) {
      // newList = list.concat(selection.ds_uid);
      setNewList(list.concat(selection.ds_uid));
      setSelectionList(newList);
      console.log("Here is the New List: ", newList);
    }
    console.log("Here is the Results Current List: ", selectionList);
    setSelection(null);
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
              <button
                onClick={() => {
                  fetchSymptoms();
                  setResultsList([]);
                  setSelection([]);
                  setSelectionList([]);
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
                  setResultsList([]);
                  setSelection([]);
                  setSelectionList([]);
                  setDiseaseClicked(!clicked);
                  setSymptomClicked(false);
                }}
              >
                See Diseases
              </button>
            </td>
          </tr>
          <tr align="center" border="1" bgcolor="green">
            <td colSpan="2">
              {/* These seem to be equivalent */}
              {/* <button onClick={testFunctionCall}>See Symptoms1</button> */}
              {/* <button onClick={() => {testFunctionCall();}}> See Symptoms1 </button> */}
              <button
                onClick={() => {
                  findDiseases(selectionList);
                  setSelection([]);
                  setSelectionList([]);
                  setSymptomClicked(false);
                  setDiseaseClicked(false);
                }}
              >
                See Results
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Symptom Clicked */}
      {console.log("SEE SYMPTOM BUTTON PRESSED----------------------------------")}
      {console.log("Symptom List to Pass: ", symptomList)}
      {console.log("Currently Selected: ", selectionList)}
      {symptomClicked && (
        <ListMembers
          cast={symptomList}
          onChoice={(selection) => {
            console.log("This is what was chosen: ", selection);
            // console.log("This is what is in cast: ", cast);
            console.log("This is what is in cast & symptomList: ", symptomList);
            setSelection(selection);
          }}
          list={selectionList}
          type={diseaseClicked === true ? "disease" : "symptom"}
        />
      )}

      {/* Disease Clicked */}
      {console.log("SEE DISEASE BUTTON PRESSED----------------------------------")}
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

      {/* Result Clicked */}
      {console.log("SEE RESULT BUTTON PRESSED-----------------------------------")}
      {console.log("Result List to Pass: ", resultsList)}
      {console.log("Currently Selected: ", selectionList)}
      {resultsList && (
        <ListMembers
          cast={resultsList}
          onChoice={(selection) => {
            console.log("These are the Results chosen: ", selection);
            setSelection(selection);
          }}
          list={selectionList}
          type="results"
        />
      )}

      {/* Confirm that what was selected can be accessed */}
      {console.log("CONFIRM WHAT WAS SELECTED CAN BE ACCESSED-----------------------------------")}
      {console.log("Newly Selected: ", selection)}
      {console.log("Current List: ", selectionList)}
      {console.log("Disease Selected: ", diseaseClicked)}

      {/* {selection && pickDisease(selection.disease_name, selectionList)} */}

      {/* {selection && diseaseClicked ? pickDisease(selection, selectionList) : pickSymptom(selection, selectionList)}
      {console.log("Updated List: ", selectionList)} */}

      {console.log("UPDATED selectionList-----------------------------------")}
      {selection && symptomClicked && pickSymptom(selection, selectionList)}
      {console.log("symptomClicked Updated List: ", selectionList)}

      {selection && diseaseClicked && pickDisease(selection, selectionList)}
      {console.log("diseaseClicked Updated List: ", selectionList)}

      {selection && !diseaseClicked && !symptomClicked && pickResult(selection, selectionList)}
      {console.log("resultClicked Updated List: ", selectionList)}

      <img src="NityaFB@2x.png" className="Nitya-logo" alt="logo" />
      <br></br>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  );
}

export default App;
