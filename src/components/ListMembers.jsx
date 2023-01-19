import React from "react";

export default function ListMembers(list) {
  console.log("In List Members");
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
        gap: `1rem`,
        marginBottom: "1rem",
      }}
    >
      {list.map((member) => (
        // <a onClick={() => { onChoice(member) }} key={member.id} data-tooltip={member.name}>
        //   <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
        // </a>
        <a
          //   onClick={() => {
          //     onChoice(member);
          //   }}
          key={member.symptom_uid}
        >
          <p>
            {member.symptom_uid}
            <br></br>
            {member.symptom_name}
          </p>
          {console.log("inside ListCast: ", member)}
        </a>
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
