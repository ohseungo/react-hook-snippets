import React, { useState } from "react";
import "./App.css";
import useBrowserEvent from "./hooks/useBrowserEvent";
import useInput from "./hooks/useInput";

function App() {
  const maxLenLimitValidator = (value: string) => value.length <= 10;
  const { value: inputValue, onChange } = useInput(
    "hello",
    maxLenLimitValidator
  );

  const [keyPressed, setKeyPressed] = useState("");
  const onKeyPress = (e: KeyboardEvent) => {
    setKeyPressed(e.key);
  };
  useBrowserEvent("keyup", onKeyPress);
  return (
    <div className="App">
      <h1>Hook Test</h1>
      <div id="use-input">
        <h2>1. Input with custom validator</h2>
        <label>
          length less than 10
          <input name="hookInput" value={inputValue} onChange={onChange} />
        </label>
      </div>
      <div id="use-browser-event">
        <h2>2. Pressed keyboard key will appear</h2>
        <h3>{keyPressed}</h3>
      </div>
    </div>
  );
}

export default App;
