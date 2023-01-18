import React, { useEffect, useState } from "react";
import ListCast from "./components/ListCast";
import Modals from "./components/Modals";

function App() {
  const name = "StarGazers";
  // VARIABLE DECLARATION
  const [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);

  async function fetchCast() {
    // const response = await fetch("cast.json");
    const response = await fetch("https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/symptoms")
      // fetch("http://example.com/movies.json")
      .then((response) => response.json())
      // .do(value => console.log("response: ", value))
      // .then((response) => {
      //   response.json();
      //   console.log("response1: ", response);
      // })
      .then((data) => {
        console.log("datab: ", data);
        setCast(data.result);
        console.log("dataa: ", data);
      });
    console.log("hello");
    console.log("response: ", response); // THIS AT LEAST SHOWS UP BECAUSE RESPONSE IS DEFINED
    // console.log("data: ", data); // DOESN'T WORK BECUASE DATA IS OUTSIDE OF SCOPE
    console.log("cast: ", cast);
    console.log("cast 0: ", cast[0]);
    // .then((data) => {
    //   console.log(data.result), setCast(data.result);
    // });
  }

  useEffect(() => {
    fetchCast();
  }, []);

  return (
    <div className="container">
      <hgroup>
        <img src="images/NityaFB@2x.png" alt="Nitya Ayurveda Picture" />
        <h1>Diagnostic Tool</h1>
        <p>Select the symptoms exhibited</p>
        <ListCast
          cast={cast}
          onChoice={(info) => {
            console.log("This is what was chosen: ", info);
            setMemberInfo(info);
          }}
        />
        {console.log("Test!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")}
        {memberInfo && (
          <Modals
            member={memberInfo}
            handleClose={() => {
              setMemberInfo(null);
            }}
          />
        )}
      </hgroup>
    </div>
  );
}
export default App;
