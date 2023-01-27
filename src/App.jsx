import React, { useState, useEffect, useRef } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
// import logo from "./logo.svg";
import "./App.css";
import ListMembers from "./components/ListMembers";
import ListResults from "./components/ListResults";

function App() {
  // VARIABLES
  // const [list, setList] = useState([]);
  // const [spinner, setSpinner] = useState(false);
  // console.log("inside fetchDiseases: ", spinner);

  const [symptomList, setSymptomList] = useState([]);
  const [diseaseList, setDiseaseList] = useState([]);

  const clicked = false;
  // const [clicked, setClicked] = useState(false);
  const [symptomClicked, setSymptomClicked] = useState(false);
  const [diseaseClicked, setDiseaseClicked] = useState(false);
  console.log("Button Status: Symptom: ", symptomClicked, "Disease: ", diseaseClicked);

  let [selectionList, setSelectionList] = useState([]);
  let [selection, setSelection] = useState(null);
  let [resultsList, setResultsList] = useState([]);

  // FUNCTIONS -------------------------------------

  // USE EFFECT TO CALL VARIABLES.  IS IT CORRECT PRACTICE TO INITIALIZE THE VARIABLES?  WHY ASYNC?
  function findAllDiseases(symptom_uid) {
    console.log("in findAllDiseases - selectionList:", symptom_uid);
    // const response = await fetch("cast.json");
    axios.post("https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/dsfroms", { symptom_uid }).then((response) => {
      console.log("All Diseases with Symptoms: ", response.data.result);
      setSymptomList(response.data.result);
      setResultsList(response.data.result);
      console.log("in findAllDiseases ", resultsList);
    });
  }

  function fetchSymptoms() {
    fetch("https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/symptoms")
      .then((response) => response.json())
      .then((data) => {
        setSymptomList(data.result);
        console.log("in fetchSymptoms ", symptomList);
      });
  }

  // console.log("Initial Symptoms 2: ", symptomList);

  function fetchDiseases() {
    fetch("https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/diseases")
      .then((response) => response.json())
      .then((data) => {
        setDiseaseList(data.result);
        console.log("in fetchDiseases: ", diseaseList);
      });
  }

  // function findAllDiseases(selectionList) {
  //   console.log("Input Symptoms: ", selectionList);
  //   let diseaseResultList = [];
  //   // const response = await fetch("cast.json");
  //   selectionList.forEach((element) => {
  //     console.log("Print element: ", element);
  //     fetch("https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/ds")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("All Diseases with Symptoms: ", data.result);
  //         setDiseaseList(data.result);
  //         diseaseResultList = diseaseResultList.concat(data.result);
  //         console.log("in findAllDiseases: ", diseaseResultList);
  //         setResultsList(diseaseResultList);
  //         console.log("After findAllDiseases: ", resultsList);
  //       });
  //   });
  // }

  function findDiseases(selectionList) {
    console.log("Input Symptoms: ", selectionList);
    let diseaseResultList = [];
    // const response = await fetch("cast.json");
    selectionList.forEach((element) => {
      console.log("Print element: ", element);
      fetch(`https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/dfroms/${element}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Data Result: ", data.result);
          setDiseaseList(data.result);
          diseaseResultList = diseaseResultList.concat(data.result);
          console.log("in findDiseases: ", diseaseResultList);
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
    console.log("In Pick Symptom selection.symptom_name", selection.symptom_uid);
    console.log("Passed in List", list);

    console.log(list.includes(selection.symptom_uid));
    if (!list.includes(selection.symptom_uid)) {
      const newList = list.concat(selection.symptom_uid);
      setSelectionList(newList);
      console.log("Here is the New List: ", newList);
    }
    console.log("Here is the Current List: ", selectionList);
    setSelection(null);
  }

  function pickDisease(selection, list) {
    console.log("In Pick Disease selection", selection);
    console.log("In Pick Disease selection.disease_name", selection.disease_uid);
    console.log("Passed in List", list);

    console.log(list.includes(selection.disease_uid));
    if (!list.includes(selection.disease_uid)) {
      const newList = list.concat(selection.disease_uid);
      setSelectionList(newList);
      console.log("Here is the New List: ", newList);
    }
    console.log("Here is the Current List: ", selectionList);
    setSelection(null);
  }

  function pickResult(selection, list) {
    console.log("In Pick Disease selection", selection);
    console.log("In Pick Disease selection.result_name", selection.ds_uid);
    console.log("Passed in List", list);

    console.log(list.includes(selection.ds_uid));
    if (!list.includes(selection.ds_uid)) {
      const newList = list.concat(selection.ds_uid);
      setSelectionList(newList);
      console.log("Here is the New List: ", newList);
    }
    console.log("Here is the Current List: ", selectionList);
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
                  setSelectionList([]);
                  setDiseaseClicked(!clicked);
                  setSymptomClicked(false);
                }}
              >
                See Diseases
              </button>
            </td>
          </tr>
          {/* <tr align="center" border="1" bgcolor="green">
            <td colSpan="2">
              <button
                onClick={() => {
                  findDiseases(selectionList);
                  setSymptomClicked(false);
                  setDiseaseClicked(false);
                  setSelectionList([]);
                }}
              >
                See Results
              </button>
            </td>
          </tr> */}
          <tr align="center" border="1" bgcolor="green">
            <td colSpan="2">
              {/* These seem to be equivalent */}
              {/* <button onClick={testFunctionCall}>See Symptoms1</button> */}
              {/* <button onClick={() => {testFunctionCall();}}> See Symptoms1 </button> */}
              <button
                onClick={() => {
                  findAllDiseases(selectionList);
                  setSymptomClicked(false);
                  setDiseaseClicked(false);
                  // setSelectionList([]);
                }}
              >
                See New Results From New Query
              </button>
            </td>
          </tr>
          {/* <tr align="center" border="1" bgcolor="green">
            <td colSpan="2">
              <button
                onClick={() => {
                  // testJSON();
                  findDiseases(selectionList);
                  setSymptomClicked(false);
                  setDiseaseClicked(false);
                  setSelectionList([]);
                }}
              >
                Test JSON
              </button>
            </td>
          </tr> */}
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
      {/* Result Clicked */}
      {console.log("Result List to Pass: ", resultsList)}
      {console.log("Currently Selected: ", selectionList)}
      {resultsList && (
        <div>
          <ListResults
            cast={resultsList}
            onChoice={(selection) => {
              console.log("These are the Results chosen: ", selection);
              setSelection(selection);
            }}
            list={selectionList}
            type="results"
          />
        </div>
      )}
      {/* Confirm that what was selected can be accessed */}
      {console.log("Newly Selected: ", selection)}
      {console.log("Current List: ", selectionList)}
      {console.log("Disease Selected: ", diseaseClicked)}
      {/* {selection && pickDisease(selection.disease_name, selectionList)} */}
      {/* {selection && diseaseClicked ? pickDisease(selection, selectionList) : pickSymptom(selection, selectionList)}
      {console.log("Updated List: ", selectionList)} */}
      {selection && symptomClicked && pickSymptom(selection, selectionList)}
      {console.log("Updated List: ", selectionList)}
      {selection && diseaseClicked && pickDisease(selection, selectionList)}
      {console.log("Updated List: ", selectionList)}
      {selection && !diseaseClicked && !symptomClicked && pickResult(selection, selectionList)}
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
