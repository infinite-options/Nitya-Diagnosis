import React, { useState } from "react";
import ListSymptoms from "./ListSymptoms";
import "./style.css";

export default function ListResults({ cast, onChoice, list, type }) {
  console.log("In List Results ----------------------------");
  console.log("Cast in List Results: ", cast);
  console.log("Selected Members: ", list);
  console.log("Disease or Symptom: ", type);

  //   let [uniqueDiseaseList, setUniqueDiseaseList] = useState([]);
  //   let createUniqueList = [];
  //   console.log("create Unique List: ", createUniqueList);

  const [diseaseList, setDiseaseList] = useState([]);
  const [selectedSymptom, setSelectedSymptom] = useState("");
  let newList = [];
  let uniqueDiseaseList = [];
  let uniqueSymptomList = [];

  function fetchDiseases() {
    fetch("https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/diseases")
      .then((response) => response.json())
      .then((data) => {
        setDiseaseList(data.result);
        console.log("in fetchDiseases: ", diseaseList);
      });
  }

  // CREATE UNIQUE LIST OF DISEASES

  // cast.forEach((element) => {
  //   // console.log("Print element: ", element.disease_uid);
  //   // console.log("Unique List Before: ", uniqueDiseaseList);
  //   if (!uniqueDiseaseList.includes(element.disease_uid)) {
  //     //   uniqueDiseaseList = newList.concat(element.disease_uid);
  //     uniqueDiseaseList = uniqueDiseaseList.concat(element.disease_uid);
  //     // uniqueDiseaseList = uniqueDiseaseList.concat(element);

  //     // console.log("Unique List After: ", uniqueDiseaseList);
  //   }
  // });
  // console.log("Unique List outside of Loop: ", uniqueDiseaseList);

  // FOR EACH UNIQUE LIST PRINT OUT THE SYMPTOMS

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Selected Symptoms</th>
          </tr>
          <tr>
            <ListSymptoms symptoms={list} />
          </tr>
          {/* <tr>{resultsList}</tr> */}
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <th>Disease Name</th>
            <th>Symptom Name</th>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
          </tr>
          {cast.map((element) => {
            return (
              <tr>
                <td>
                  {element.disease_uid} <br></br> hello<br></br> {element.disease_name}
                </td>
                <td>
                  {/* {console.log("IN Array: ", element.sym_uid_name, typeof element.sym_uid_name)} */}
                  {JSON.parse(element.sym_uid_name).map((sym) => {
                    return (
                      <tr>
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
