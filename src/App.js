import "./App.css";

import React, { useState } from "react";
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
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

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
    if (upperCaseLetters) {
      charList = charList + upperCaseLetters;
    }

    if (length <0) {
      alert('U must insert a value from 4 to 12!!');
    
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
  // JSX PART
  return (
    <div className="App pt-5">
      {/* inizio app content  */}

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
              defaultValue={length}
              type="number"
              id="length"
              min="4"
              max="12"
              onChange={(e) => setLength(e.target.value)}
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
          <div className="w-75 d-flex justify-content-between d-none">
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
