import React, { useState } from "react";
import ListSymptoms from "./ListSymptoms";
import "./style.css";

export default function ListResults({ cast, onChoice, list, type }) {
  console.log("In List Results ----------------------------");
  console.log("Cast in List Results: ", cast);
  console.log("Selected Members: ", list);
  console.log("Disease or Symptom: ", type);

  const [selectedSymptom, setSelectedSymptom] = useState("");

  // function fetchDiseases() {
  //   fetch("https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/diseases")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDiseaseList(data.result);
  //       console.log("in fetchDiseases: ", diseaseList);
  //     });
  // }

  // FOR EACH UNIQUE LIST PRINT OUT THE SYMPTOMS

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Selected Symptoms</th>
          </tr>

          <ListSymptoms symptoms={list} />

          {/* <tr>{resultsList}</tr> */}
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <th>Disease Name</th>
            <th>Symptom Name</th>
          </tr>
          {cast.map((element) => {
            return (
              <tr key={element.disease_uid}>
                <td>
                  {element.disease_uid} <br></br> {element.disease_name}
                </td>
                {JSON.parse(element.sym_uid_name).map((sym) => {
                  return (
                    <tr key={sym.s_uid}>
                      <td>{sym.s_uid}</td>
                      <td
                        style={{ backgroundColor: list.includes(sym.s_uid) ? "red" : sym.s_name === selectedSymptom ? "maroon" : "pink" }}
                        onClick={() => {
                          setSelectedSymptom(sym.s_name);
                        }}
                      >
                        {sym.s_name}
                      </td>
                    </tr>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
