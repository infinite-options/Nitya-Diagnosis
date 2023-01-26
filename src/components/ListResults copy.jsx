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

  cast.forEach((element) => {
    // console.log("Print element: ", element.disease_uid);
    if (!uniqueDiseaseList.includes(element.disease_uid)) {
      //   uniqueDiseaseList = newList.concat(element.disease_uid);
      uniqueDiseaseList = uniqueDiseaseList.concat(element.disease_uid);
      //   console.log("Unique List: ", uniqueDiseaseList);
    }
  });
  console.log("Unique List outside of Loop: ", uniqueDiseaseList);

  // FOR EACH UNIQUE LIST PRINT OUT THE SYMPTOMS

  return (
    <div>
      {uniqueDiseaseList.map((disease) => {
        return (
          <table>
            {/* <tbody border="1" color="black"> */}
            <tr>
              <th>Disease Name</th>
              <th>Symptom Name</th>
            </tr>
            <tr>
              <td>Pittaja</td>
              <td>
                alasyam <br></br>antar daha<br></br>gaurava
              </td>
            </tr>
            <tr>
              <td>Jwara mukti lakshana</td>
              <td>
                hikka <br></br>hrudi vyatha<br></br>kantha oshtha mukha nasanam pakah
              </td>
            </tr>
            <tr>
              {disease === cast.disease_uid ? (
                <div>
                  {cast.disease_uid}
                  <br></br>
                  {cast.disease_name}
                </div>
              ) : (
                ""
              )}
              <td>
                {cast.map((element) => {
                  return disease === element.disease_uid ? (
                    <div>
                      {element.disease_uid}
                      <br></br>
                      {element.disease_name}
                    </div>
                  ) : (
                    ""
                  );
                })}
              </td>
              <td>
                {cast.map((element) => {
                  return disease === element.disease_uid ? (
                    <div>
                      {element.ds_symptom_uid}
                      <br></br>
                      {element.symptom_name}
                    </div>
                  ) : (
                    ""
                  );
                })}
              </td>
            </tr>
            {/* </tbody> */}
          </table>
        );
      })}
    </div>
  );
}
