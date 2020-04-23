import React from "react";
import "./App.css";
import gemIcon from "./images/gemsicons/addons/gems_add_136.png";
import pathIcon from "./images/strategygameicons/SGI_86.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gemIcon} />
        <img src={pathIcon} />
        <p>
          Edit! <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
