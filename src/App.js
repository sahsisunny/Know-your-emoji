import React, { useState, useEffect } from "react";
import "./App.css";

const emojiDictionary = require("./emojiDict.json");
var list = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState("Please enter an emoji above and select it from the list below");
  const [randomEmojis, setRandomEmojis] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getRandomEmojis();
  }, []);

  function getRandomEmojis() {
    let randomEmoji = [];
    for (var i = 0; i < 24; i++) {
      var randomIndex = Math.floor(Math.random() * list.length);
      randomEmoji.push(list[randomIndex]);
    }
    setRandomEmojis(randomEmoji);
  }

  function validateInput(event) {
    var input = event.target.value;
    setValue(input);
    if (input === "") {
      setMeaning("We know 1807 emojies");

    } else if (input in emojiDictionary) {
      setMeaningFunction(input);

    } else if (input.length > 2) {
      let input2 = input.slice(-2);
      if (input2.length === 2 && input2 in emojiDictionary) {
        setMeaningFunction(input2);
        setValue(input2);
      } else {
        setMeaning("Enter only one emoji at a time");
      }
    } else {
      setMeaning("Enter only emoji");
    }
  }

  function setMeaningFunction(input) {
    var userInputEmoji = input;
    var meaning = emojiDictionary[userInputEmoji].name;
    for (var i = 0; i < list.length; i++) {
      if (list[i] === userInputEmoji) {
        setMeaning(meaning);
        break;
      } else {
        setMeaning("We don't have this emoji!");
      }
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji].name);
    setValue(emoji);
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
            onFocus={() => setValue("")}
            placeholder="?"
            value={value}
          />
          <button onClick={() => setValue("")} className="clear">❌</button>
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
