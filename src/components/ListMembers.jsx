import React from "react";

// WHY DO I GET THE DATA IN cast.cast instead of cast?

// WITHOUT THE {} YOU HAVE TO USED cast.cast
// export default function ListMembers(cast, onChoice) {
export default function ListMembers({ cast, onChoice }) {
  console.log("In List Members");
  console.log(cast);
  // console.log(cast.cast);
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
      {cast.map((member) => (
        // <a onClick={() => { onChoice(member) }} key={member.id} data-tooltip={member.name}>
        //   <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
        // </a>
        <div
          onClick={() => {
            onChoice(member);
          }}
          key={member.disease_uid}
        >
          <p>
            {member.disease_uid}
            <br></br>
            {member.disease_name}
          </p>
          {/* {console.log("inside ListCast: ", member)} */}
        </div>
      ))}
    </div>
  );
}

// export default ({ list, onChoice }) => {
//   console.log("In ListCast");
//   console.log(cast);
//   console.log("After cast");
//   console.log(onChoice);
//   console.log("After onChoice");

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
//         gap: `1rem`,
//         marginBottom: "1rem",
//       }}
//     >
//       {cast.map((member) => (
//         // <a onClick={() => { onChoice(member) }} key={member.id} data-tooltip={member.name}>
//         //   <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
//         // </a>
//         <a
//           onClick={() => {
//             onChoice(member);
//           }}
//           key={member.symptom_uid}
//         >
//           <p>
//             {member.symptom_uid}
//             <br></br>
//             {member.symptom_name}
//           </p>
//           {console.log("inside ListCast: ", member)}
//         </a>
//       ))}
//     </div>
//   );
// };
