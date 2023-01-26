import React from "react";

export default function ListMembers({ cast, onChoice, list, type }) {
  console.log("In List Members ---------------------------------------------");
  console.log("Cast in List Members: ", cast);
  console.log("Selected Members: ", list);
  console.log("Disease or Symptom: ", type);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
        gap: `1rem`,
        marginBottom: "1rem",
      }}
    >
      {/* {console.log("inside ListMember")}

      {console.log("inside List", list)}
      {console.log("inside Cast", cast)} */}

      {type === "disease" &&
        cast.map((member) => (
          <div
            style={{ color: "red" }}
            onClick={() => {
              onChoice(member);
            }}
            key={member.disease_uid}
          >
            {list.length > 0 ? (
              <p style={{ color: list.disease_uid.some((e) => e === member.disease_uid) ? "red" : "green" }}>
                {/* <p style={{ color: "red" }}> */}
                {member.disease_uid}
                <br></br>
                {member.disease_name}
              </p>
            ) : (
              <p style={{ color: "blue" }}>
                {member.disease_uid}
                <br></br>
                {member.disease_name}
              </p>
            )}
          </div>
        ))}

      {type === "symptom" &&
        cast.map((member) => (
          <div
            style={{ color: "red" }}
            onClick={() => {
              onChoice(member);
            }}
            key={member.symptom_uid}
          >
            {list.length > 0 ? (
              // console.log("Inside symptom clicked ", list.length),
              // console.log(list),
              // console.log(list[0].symptom_uid, member.symptom_uid, typeof member.symptom_uid),
              // list.forEach((element) => console.log(element)),
              // list.forEach((element) => console.log(Object.values(element).includes("550-000002"))),
              // list.forEach((element) => console.log(Object.values(element).includes(member.symptom_uid))),
              // console.log(Object.values(list.symptom_uid).includes("550-000002")),
              // console.log(Object.values(list.symptom_uid).includes(member.symptom_uid)),
              // console.log(list, member.symptom_uid),
              // <p style={{ color: list.symptom_uid.some((e) => e === member.symptom_uid) ? "red" : "green" }}>
              <p style={{ color: list.forEach((element) => Object.values(element).includes(member.symptom_uid)) ? "red" : "green" }}>
                {/* <p style={{ color: "red" }}> */}
                {member.symptom_uid}
                <br></br>
                {member.symptom_name}
              </p>
            ) : (
              <p style={{ color: "blue" }}>
                {member.symptom_uid}
                <br></br>
                {member.symptom_name}
              </p>
            )}
          </div>
        ))}

      {type === "results" &&
        cast.map((member) => (
          <div
            style={{ color: "red" }}
            onClick={() => {
              onChoice(member);
            }}
            key={member.ds_uid}
          >
            {list.length > 0 ? (
              (console.log("Inside result clicked ", list.length),
              (
                <p style={{ color: list.some((e) => e === member.ds_uid) ? "red" : "green" }}>
                  {/* <p style={{ color: "red" }}> */}
                  {member.ds_uid}
                  <br></br>
                  {member.disease_uid}
                  <br></br>
                  {member.disease_name}
                  <br></br>
                  {member.symptom_uid}
                  <br></br>
                  {member.symptom_name}
                </p>
              ))
            ) : (
              <p style={{ color: "blue" }}>
                {member.ds_uid}
                <br></br>
                {member.disease_uid}
                <br></br>
                {member.disease_name}
                <br></br>
                {member.symptom_uid}
                <br></br>
                {member.symptom_name}
              </p>
            )}
          </div>
        ))}
    </div>
  );
}
