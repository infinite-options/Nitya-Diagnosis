import React from "react";

// WHY DO I GET THE DATA IN cast.cast instead of cast?

// WITHOUT THE {} YOU HAVE TO USED cast.cast
// export default function ListMembers(cast, onChoice) {
export default function ListMembers({ cast, onChoice, list, type }) {
  console.log("In List Members");
  console.log("Cast in List Members: ", cast);
  console.log("Selected Members: ", list, list.length);
  console.log("Type: ", type);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
        gap: `1rem`,
        marginBottom: "1rem",
      }}
    >
      {cast.map((member) => (
        <div
          style={{ color: "red" }}
          onClick={() => {
            onChoice(member);
          }}
          key={member.disease_uid}
        >
          {/* CONLSOLE LOG STATEMENTS TO SEE WHAT IS BEING MAPPED */}
          {/* {console.log("inside Map Cast", member.disease_uid, typeof member.disease_uid)} */}

          {/* NOT SURE HOW 'SOME' WORKS */}
          {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some */}
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
          {/* {console.log("inside ListCast: ", member)} */}
        </div>
      ))}
    </div>
  );
}
