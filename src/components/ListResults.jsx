import React, { useState } from "react";

export default function ListResults({ cast, onChoice, list, type }) {
  console.log("In List Results");
  console.log("Cast in List Results: ", cast);
  console.log("Selected Members: ", list);
  console.log("Disease or Symptom: ", type);

  //   let [uniqueDiseaseList, setUniqueDiseaseList] = useState([]);
  //   let createUniqueList = [];
  //   console.log("create Unique List: ", createUniqueList);

  let newList = [];
  let uniqueDiseaseList = [];
  let uniqueSymptomList = [];

  // CREATE UNIQUE LIST OF DISEASES

  cast.forEach((element) => {
    console.log("Print element: ", element.disease_uid);
    if (!uniqueDiseaseList.includes(element.disease_uid)) {
      //   uniqueDiseaseList = newList.concat(element.disease_uid);
      uniqueDiseaseList = uniqueDiseaseList.concat(element.disease_uid);
      //   console.log("Unique List: ", uniqueDiseaseList);
    }

    console.log("Unique List inside of Loop: ", uniqueDiseaseList);

    // console.log("Unique List creation: ", createUniqueList);
    // if (!uniqueDiseaseList.includes(element.disease_uid)) {
    //   const createUniqueList = list.concat(element.disease_uid);
    //   setUniqueDiseaseList(createUniqueList);
    //   console.log("Here is the New List: ", createUniqueList);
    // }
  });

  console.log("Unique List outside of Loop: ", uniqueDiseaseList);

  // FOR EACH UNIQUE LIST PRINT OUT THE SYMPTOMS

  uniqueDiseaseList.forEach((disease) => {
    console.log("Print disease: ", disease);
    cast.forEach((element) => {
      console.log("Print element: ", element.disease_uid);
      if (disease === element.disease_uid) {
        //   uniqueDiseaseList = newList.concat(element.disease_uid);
        newList = newList.concat(element);
        //   console.log("Unique List: ", uniqueDiseaseList);
      }

      console.log("Symptoms for Disease: ", disease, newList);
    });
  });

  return <div>uniqueDiseaseList</div>;
}
