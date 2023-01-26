import React, { useState } from "react";
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
      {/* {uniqueDiseaseList.map((disease) => { */}
      <table id="masterTable">
        <td></td>
        <td></td>
      </table>

      <table id="symptomsTable">
        <tr>
          <tbody>
            <td>
              {console.log("here", list)}
              {list.forEach((element) => console.log(Object.values(element)))}
              {list.forEach((element) => console.log(element))}
              {list.forEach((element) => console.log(element.symptom_uid))}
              {list.forEach((symptoms) => {
                return <div>{symptoms.symptom_uid}</div>;
              })}
              {/* {list.map((symptoms) => {
                return <div>{symptoms}</div>;
              })} */}
            </td>
          </tbody>
        </tr>
      </table>

      <table id="resultsTable">
        <tr>
          <th>Disease Name</th>
          <th>Symptom Name</th>
        </tr>
        <tbody>
          {cast.map((element) => {
            return (
              <tr>
                <td>
                  {element.disease_uid} <br></br> hello<br></br> {element.disease_name} {console.log("hello")}
                </td>
                {/* <td>{element.sym_uid_name}</td> */}
                <td>
                  {console.log("IN Array: ", element.sym_uid_name, typeof element.sym_uid_name)}
                  {JSON.parse(element.sym_uid_name).map((sym) => {
                    return (
                      <tr>
                        {console.log("inside sym: ", sym)}
                        <td>{sym.s_uid}</td>
                        <br></br>
                        {console.log("Currently in List: ", list)}
                        <td
                          // style={{ backgroundColor: sym.s_name === "alasya" ? "red" : "pink" }}
                          style={{ backgroundColor: list.includes(sym.s_uid) ? "red" : sym.s_name === selectedSymptom ? "maroon" : "pink" }}
                          // style={{ backgroundColor: list.includes(sym.s_name) ? "red" : sym.s_name === selectedSymptom ? "maroon" : "pink" }}
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
