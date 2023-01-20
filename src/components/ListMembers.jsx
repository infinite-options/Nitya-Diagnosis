import React from "react";

// WHY DO I GET THE DATA IN cast.cast instead of cast?

// WITHOUT THE {} YOU HAVE TO USED cast.cast
// export default function ListMembers(cast, onChoice) {
export default function ListMembers({ cast, onChoice, list }) {
  console.log("In List Members");
  console.log("Cast in List Members: ", cast);
  // console.log(cast.cast);
  console.log("Selected Members: ", list);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
        gap: `1rem`,
        marginBottom: "1rem",
      }}
    >
      {console.log("inside ListMember")}

      {console.log("inside List", list)}
      {console.log("inside Cast", cast)}

      {cast.map((member) => (
        // <a onClick={() => { onChoice(member) }} key={member.id} data-tooltip={member.name}>
        //   <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
        // </a>
        <div
          style={{ color: "red" }}
          onClick={() => {
            onChoice(member);
          }}
          key={member.disease_uid}
        >
          {console.log("List Length: ", list.length)}
          {list.length > 0 && console.log("inside Map List", list, typeof list)}
          {console.log("inside Map Cast", member.disease_uid, typeof member.disease_uid)}

          {/* <p style={{ color: list.some(member.disease_uid) ? "red" : "green" }}> */}
          {/* <p style={{ color: list[0].disease_uid === member.disease_uid ? "red" : "green" }}> */}

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

      <div>"Before List"</div>

      {list.map((listMember) => (
        <div style={{ color: "blue" }}>
          <p>
            Inside List<br></br>
            {listMember}
          </p>
          {/* <p>
            {listMember.disease_uid}
            <br></br>
            {listMember.disease_name}
          </p> */}
          {/* {console.log("inside ListCast: ", member)} */}
        </div>
      ))}
      <div>"After List"</div>
    </div>
  );
}
