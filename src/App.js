import React, { useState } from "react";
import "./App.css";


const url = "https://emoji-api.com/emojis?search="
const keys = [
  "&access_key=a6f8c4e3c19de6224d1eeb0286ca1ddb9df196cb",
  "&access_key=3940544330a8fcd4870c768b5286c07269345fc1",
  "&access_key=f1191bb976d9354b9a167aa978b31161cc1fdf4e"
];


function App() {
  const [meaning, setMeaning] = useState([]);

  // For User input
  function inputHandler(event) {
    const userInput = event.target.value;
    const completeUrl = url + userInput + keys[0];
    const completeUrl1 = url + userInput + keys[1];
    const fun1 = async () => {
      const res = await fetch(completeUrl);
      const data = await res.json();
      setMeaning(data);
    };

    const fun2 = async () => {
      const res = await fetch(completeUrl1);
      const data = await res.json();
      setMeaning(data);
    };
    try {
      fun1();
    }
    catch (err) {
      fun2();
    }
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
      <div className="outputArea">
        <table>
          <tbody>
            <tr>
              <td>Emoji</td>
              <td>Meaning</td>
            </tr>
          </tbody>
          {meaning.map((emoji,) => {
            return (
              <tr>
                <td key={emoji.toString()}>{emoji.character}</td>
                <td key={emoji.toString()}>{emoji.unicodeName}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
