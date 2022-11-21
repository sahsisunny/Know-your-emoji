import React, { useState } from "react";
import "./App.css";


const url = "https://emoji-api.com/emojis?search="
const key = "&access_key=a6f8c4e3c19de6224d1eeb0286ca1ddb9df196cb";
function App() {
  const [meaning, setMeaning] = useState("");
  const [meaning2, setMeaning2] = useState("");
  const [meaning3, setMeaning3] = useState("");
  const [meaning4, setMeaning4] = useState("");
  const [meaning5, setMeaning5] = useState("");
  const [meaning6, setMeaning6] = useState("");
  const [meaning7, setMeaning7] = useState("");
  const [meaning8, setMeaning8] = useState("");
  const [meaning9, setMeaning9] = useState("");
  const [meaning10, setMeaning10] = useState("");

  // For User input
  function inputHandler(event) {
    const userInput = event.target.value;
    const completeUrl = url + userInput + key;
    fetch(completeUrl)
      .then((response) => response.json())
      .then((json) => {
        if (json.length === 0) {
          setMeaning("Sorry we don't have this in our database");
        } else {
          setMeaning(json[0].character + " - " + json[0].unicodeName);
          setMeaning2(json[1].character + " - " + json[1].unicodeName);
          setMeaning3(json[2].character + " - " + json[2].unicodeName);
          setMeaning4(json[3].character + " - " + json[3].unicodeName);
          setMeaning5(json[4].character + " - " + json[4].unicodeName);
          setMeaning6(json[5].character + " - " + json[5].unicodeName);
          setMeaning7(json[6].character + " - " + json[6].unicodeName);
          setMeaning8(json[7].character + " - " + json[7].unicodeName);
          setMeaning9(json[8].character + " - " + json[8].unicodeName);
          setMeaning10(json[9].character + " - " + json[9].unicodeName);
        }
      });
  }


  return (
    <div className="App">
      <h1>Emoji Search Engine</h1>
      <div className="container">
        <div className="inputArea">
          <input
            className="inputEmoji"
            type="text"
            onChange={inputHandler}
            placeholder="?"
          />
          <button onClick={() => document.querySelector(".inputEmoji").value = ""} className="clear">❌</button>
        </div>
      </div>
      <p>{meaning}</p>
      <p>{meaning2}</p>
      <p>{meaning3}</p>
      <p>{meaning4}</p>
      <p>{meaning5}</p>
      <p>{meaning6}</p>
      <p>{meaning7}</p>
      <p>{meaning8}</p>
      <p>{meaning9}</p>
      <p>{meaning10}</p>
    </div>
  );
}

export default App;
