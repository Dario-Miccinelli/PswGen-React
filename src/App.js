import "./App.css";

import React, { useEffect, useState } from "react";

import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./char";

function App() {
  // dichiarazione variabili

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  // EFFECT
  useEffect(() => {
    document.addEventListener("keydown", detectedKeyDown);
  });
  const detectedKeyDown = (e) => {
    if (e.key === "Enter") {
      handleGeneratePassword();
    }
  };

  // funzione generate psw
  const handleGeneratePassword = (e) => {
    let charList = "";
    if (includeLowercase) {
      charList = charList + lowerCaseLetters;
    }
    if (includeNumbers) {
      charList = charList + numbers;
    }
    if (includeSymbols) {
      charList = charList + specialCharacters;
    }
    if (includeUppercase) {
      charList = charList + upperCaseLetters;
    }

    if (length > 20) {
      setLength(20);

      charList = "";
    }

    if (length < 6) {
      setLength(6);

      charList = "";
    }

    setPassword(createPassword(charList));
  };

  // funzione che crea la psw
  const createPassword = (charList) => {
    let password = "";
    const charListVal = charList.length;

    for (let i = 0; i < length; i++) {
      const charIndex = Math.round(Math.random() * charListVal);
      password = password + charList.charAt(charIndex);
    }

    return password;
  };

  const handleChange = (event) => {
    setLength(event.target.value);
  };

  // JSX PART
  return (
    <div className="App pt-5">
      <div className="css-3d-text">PASSWORD</div>
      <div className="css-3d-text_2">GENERATOR</div>

      {/* inizio app content  */}

      {/* blink div */}
      <div className="error_div blink-1">
        {includeSymbols === false &&
          includeLowercase === false &&
          includeNumbers === false &&
          includeUppercase === false && (
            <p className="p-1 bg-danger text-white rounded">
              <i className="fa-solid fa-circle-left fa-sm p-2"></i>
              Select at least one option!
            </p>
          )}
      </div>

      <div className="error_div_2 blink-1">
        {length < 4 && (
          <p className="p-1 bg-danger text-white rounded">
            <i className="fa-solid fa-circle-left fa-sm p-2"></i>
            Value can't be less than 4
          </p>
        )}
        {length > 20 && (
          <p className="p-1 bg-danger text-white rounded">
            <i className="fa-solid fa-circle-left fa-sm p-2"></i>
            Value can't be higher than 20
          </p>
        )}
      </div>

      {/* app content div */}
      <div className="app-content  m-auto mt-5 pt-1 m-auto">
        <div className="ms-5 ps-3 mt-3 pt-4">
          {/* div contenitore favicon */}
          <div className="w-75 d-flex justify-content-between psw-container">
            <h6 className="m-auto">{password}</h6>

            {/* favico */}
            <span className="p-1">
              <i className="far fa-clipboard ms-2 text-white btn p-1 m-auto rounded d-flex p-2"></i>
            </span>
          </div>

          {/* div pass length */}
          <div className="option w-75 d-flex mb-2 justify-content-between mt-4 pt-2">
            <label className="ps-2">Password length</label>

            <input
              value={length}
              type="number"
              id="length"
              min="6"
              max="20"
              className="border-0 rounded text-center"
              onChange={handleChange}
              onKeyDown={(evt) =>
                ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
              }
            />
          </div>

          <div>
            <input
              type="range"
              id="myRange"
              className="ms-2 slider"
              value={length}
              min="6"
              max="20"
              onChange={handleChange}
            />
          </div>

          {/* div symbols */}
          <div className="w-75 d-flex justify-content-between">
            <label className=" ps-2">
              Include <strong>symbols</strong>
            </label>
            <input
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              type="checkbox"
              id="symbols"
              className="form-check-input rounded"
            ></input>
          </div>

          {/* div uppercase */}
          <div className="w-75 d-flex justify-content-between">
            <label className="ps-2">
              Include <strong>uppercase</strong>
            </label>
            <input
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              type="checkbox"
              id="uppercase"
              className="form-check-input rounded"
            ></input>
          </div>

          {/* div lowercase */}
          <div className="w-75  d-flex justify-content-between">
            <label className="ps-2">
              Include <strong>lowercase</strong>
            </label>
            <input
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              type="checkbox"
              id="lowercase checked"
              className="form-check-input rounded checkbox"
            ></input>
          </div>

          {/* div numbers */}
          <div className="w-75  d-flex justify-content-between">
            <label className="ps-2">
              Include <strong>numbers</strong>
            </label>
            <input
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              type="checkbox"
              id="numbers"
              className="form-check-input rounded"
            ></input>
          </div>

          {/* bottone generate */}
          <button
            className="mt-4 pt-1 w-75 btn text-white rounded-3 shadow"
            id="generate"
            onClick={handleGeneratePassword}
          >
            GENERATE PASSWORD
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
