import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };
  // const NumbersBtn = (e) => {
  //   if (result) {
  //     setResult("");
  //   } else {
  //     handleClick(e);
  //   }
  // };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
    // setResult(eval(result).toString());
    eval(result).toString() === "NaN"
      ? setResult("undefined")
      : setResult(eval(result).toString());
  };

  return (
    <div className="calc">
      <input type="text" class="calc-numbers" value={result} />
      <button onClick={clear} className="span" id="clear">
        AC
      </button>
      <button onClick={backspace} id="backspace">
        DEL
      </button>
      <button name="/" onClick={handleClick}>
        /
      </button>
      <button name="1" onClick={handleClick}>
        1
      </button>
      <button name="2" onClick={handleClick}>
        2
      </button>
      <button name="3" onClick={handleClick}>
        3
      </button>
      <button name="*" onClick={handleClick}>
        *
      </button>
      <button name="4" onClick={handleClick}>
        4
      </button>
      <button name="5" onClick={handleClick}>
        5
      </button>
      <button name="6" onClick={handleClick}>
        6
      </button>
      <button name="+" onClick={handleClick}>
        +
      </button>
      <button name="7" onClick={handleClick}>
        7
      </button>
      <button name="8" onClick={handleClick}>
        8
      </button>
      <button name="9" onClick={handleClick}>
        9
      </button>
      <button name="-" onClick={handleClick}>
        -
      </button>
      <button name="." onClick={handleClick}>
        .
      </button>
      <button name="0" onClick={handleClick}>
        0
      </button>
      <button onClick={calculate} className="span">
        =
      </button>
    </div>
  );
}

export default App;
