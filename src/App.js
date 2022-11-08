import React from "react";
import { GrammarlyEditorPlugin, Grammarly } from "@grammarly/editor-sdk-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Grammarly>
        <GrammarlyEditorPlugin
          contenteditable="true"
          clientId="client_HGu1p4bnjopAHi1vpAgB1x"
        >
          <textarea />
        </GrammarlyEditorPlugin>
        <grammarly-button></grammarly-button>
      </Grammarly>
    </div>
  );
}

export default App;
