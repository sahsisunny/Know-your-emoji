import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";

const emojiDictionary = require("./emojiDict.json");
var list = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState("We have 1807 emoji");
  const [randomEmojis, setRandomEmojis] = useState([]);

  useEffect(() => {
    getRandomEmojis();
  }, []);

  // For Random emoji
  function getRandomEmojis() {
    let randomEmoji = [];
    for (var i = 0; i < 24; i++) {
      var randomIndex = Math.floor(Math.random() * list.length);
      randomEmoji.push(list[randomIndex]);
    }
    setRandomEmojis(randomEmoji);
    // return randomEmojis;
  }

  // Validation
  function validateInput(event) {
    var input = event.target.value;
    if (input === "") {
      setMeaning("We know 1807 emojies");
    } else if (input in emojiDictionary) {
      setMeaningFunction(input);
    } else {
      setMeaning("Enter valid and one emoji at a time");
    }

  }

  // For User input
  function setMeaningFunction(input) {
    var userInputText = input;
    var meaning = emojiDictionary[userInputText].name;
    for (var i = 0; i < list.length; i++) {
      if (list[i] === userInputText) {
        setMeaning(meaning);
        break;
      } else {
        setMeaning("We don't have this emoji");
      }
    }
  }

  // For Clicking on emoji
  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji].name);
    document.querySelector(".inputEmoji").value = emoji;
  }

  return (
    <div className="App">
      <h1> inside outt!</h1>
      <div className="container">
        <div className="inputArea">
          <input
            className="inputEmoji"
            type="text"
            onChange={validateInput}
            placeholder="?"
          />
          <button onClick={() => document.querySelector(".inputEmoji").value = ""} className="clear">❌</button>
        </div>
        <p>{meaning}</p>
      </div>

      <div className="listemoji">
        {randomEmojis.map((emoji) => {
          return (
            <span
              className="emoji-icon"
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
