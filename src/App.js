import React, { useState } from 'react';
import './App.css';


// const emojiDictionary = require('./emojiDict.json');
const emojiDictionary = require('./emojiDict.json');
var list = Object.keys(emojiDictionary);

function App() {

  // For User input
  const [meaning, setMeaning] = useState("");
  function inputHandler(event) {
    var userInputText = event.target.value;
    var meaning = emojiDictionary[userInputText].name;
    if (meaning === undefined) {
      meaning = "We don't have this in our DATABASE!"
    }
    setMeaning(meaning)
  }

  // For Random emoji
  var randomEmojis = [];
  function getRandomEmojis() {
    for (var i = 0; i < 24; i++) {
      var randomIndex = Math.floor(Math.random() * list.length);
      randomEmojis.push(list[randomIndex]);
    }
    return randomEmojis;
  }
  window.onload = getRandomEmojis();

  // For Clicking on emoji
  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji].name)
    document.querySelector(".inputEmoji").value = emoji;
  }

  return (
    <div className="App">
      <h1> inside outt!</h1>
      <div className='container'>
        <input className='inputEmoji' type="text" onChange={inputHandler} />
        <p>{meaning}</p>
      </div>

      <div className='listemoji'>
        {randomEmojis.map((emoji) => {
          return (
            <span className='emoji-icon' onClick={() => emojiClickHandler(emoji)} key={emoji} >{emoji}</span>
          )
        })}
      </div>
    </div >
  );
}

export default App;
