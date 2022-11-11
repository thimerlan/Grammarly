import React, { useState, useEffect, useRef } from "react";
import { GrammarlyEditorPlugin, Grammarly } from "@grammarly/editor-sdk-react";
import "./App.css";

function App() {
  const [char, setChar] = useState("");
  const [changeFont, setChangeFont] = useState([]);
  const [changeColor, setChangeColor] = useState(["#ffd100"]);
  let remainAll = 120;
  let remain = char.length - remainAll;
  const txtFocus = useRef();
  useEffect(() => {
    txtFocus.current.focus();
  }, [changeFont]);

  return (
    <div className="App">
      <div className="btns">
        <button
          onClick={() => {
            setChangeFont(changeFont !== "bold" ? "bold" : "");
          }}
          className={changeFont === "bold" ? "active-f bold" : "bold"}
        >
          B
        </button>
        <button
          onClick={() => {
            setChangeFont(changeFont !== "italic" ? "italic" : "");
          }}
          className={changeFont === "italic" ? "active-f italic" : "italic"}
        >
          I
        </button>
        <div className="changeColor">
          <input
            value={changeColor}
            type="color"
            onChange={(e) => {
              setChangeColor(e.target.value);
            }}
          />
        </div>
      </div>

      <Grammarly>
        <GrammarlyEditorPlugin
          contenteditable="true"
          clientId="client_HGu1p4bnjopAHi1vpAgB1x"
        >
          <textarea
            style={{ color: changeColor }}
            ref={txtFocus}
            autoComplete="on"
            value={char}
            onChange={(e) => {
              setChar(e.target.value);
            }}
            maxLength={120}
            id={
              changeFont !== "italic"
                ? changeFont === "bold"
                  ? "txt-bold"
                  : ""
                : changeFont === "italic"
                ? "txt-italic"
                : ""
            }
            className={char.length === 120 ? "d-write" : ""}
          />
        </GrammarlyEditorPlugin>
        <grammarly-button></grammarly-button>
        <div className="letters">
          <p>
            Total character: <span>{char.length}</span>
          </p>
          <p>Remaining: {remain < 0 ? Math.abs(remain) : 0} </p>
        </div>
      </Grammarly>
    </div>
  );
}

export default App;
