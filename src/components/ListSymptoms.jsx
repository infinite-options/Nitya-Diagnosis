import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ListSymptoms({ symptoms }) {
  console.log("In List Symptoms ----------------------------");
  console.log("Selected Members: ", symptoms);
  console.log("Selected Members One: ", symptoms[0]);

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

  //  symptoms.foreEach((element) => console.log("in For Each: ", element));

  function fetchSymptoms(symptom_uid) {
    console.log("in fetchSymptoms POST - selectionList:", symptom_uid);
    // const response = await fetch("cast.json");
    axios.post("https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/symptoms", { symptom_uid }).then((response) => {
      console.log("Selected Symptoms: ", response.data.result);
      setSymptomList(response.data.result);
      setResultsList(response.data.result);
      setResultsList(Object.values(response.data.result));
      console.log("in ListSymptoms findAllDiseases ", Object.values(response.data.result));
    });
  }

  // THIS WILL AUTOMATICALLY LOAD THE DATA WHEN THE PROGRAM STARTS
  useEffect(() => {
    fetchSymptoms(symptoms);
  }, []);

  //   console.log("Fetch Symptom Response: ", fetchSymptoms(symptoms));
  //   console.log("Fetch Symptom Response Symptom: ", symptomList);
  //   console.log("Fetch Symptom Response Result: ", resultsList);

  return (
    <table>
      <tr>
        <th>Symptom UID</th>

        <th>Symptom Name</th>
      </tr>
      {resultsList.map((element) => {
        return (
          <tr>
            <td>{element.symptom_uid}</td>
            <td>{element.symptom_name}</td>
          </tr>
        );
      })}
    </table>
  );
}
