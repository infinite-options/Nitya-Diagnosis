import React from "react";

export default function ListResults({ cast, onChoice, list, type }) {
  console.log("In List Results");
  console.log("Cast in Results Members: ", cast);
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

      {type === "results" &&
        cast.map((member) => (
          <div
            style={{ color: "red" }}
            onClick={() => {
              onChoice(member);
            }}
            key={member.disease_uid}
          >
            {list.length > 0 ? (
              <p style={{ color: list.some((e) => e === member.disease_uid) ? "red" : "green" }}>
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
    </div>
  );
}
