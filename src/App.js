import React, { useState, useEffect } from "react";
import { GrammarlyEditorPlugin, Grammarly } from "@grammarly/editor-sdk-react";
import "./App.css";

function App() {
  const [char, setChar] = useState("");

  let remainAll = 120;
  let remain = char.length - remainAll;

  return (
    <div className="App">
      <Grammarly>
        <GrammarlyEditorPlugin
          contenteditable="true"
          clientId="client_HGu1p4bnjopAHi1vpAgB1x"
          config={{ documentDialect: "british" }}
        >
          <textarea
            value={char}
            onChange={(e) => {
              setChar(e.target.value);
            }}
            maxLength={120}
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
