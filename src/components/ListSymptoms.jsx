import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ListSymptoms({ symptoms }) {
  console.log("In List Symptoms ----------------------------");
  console.log("Selected Members: ", symptoms);
  console.log("Selected Members One: ", symptoms[0]);

  const [symptomList, setSymptomList] = useState([]);

  let [resultsList, setResultsList] = useState([]);

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
  }, [symptoms]);

  return resultsList.map((element) => {
    return (
      <tr key={element.symptom_uid}>
        <td>{element.symptom_uid}</td>
        <td>{element.symptom_name}</td>
      </tr>
    );
  });
}
