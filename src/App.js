import React from "react";

import ToggleBtn from "./components/ToggleBtn";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="toggle-container">
      <ToggleBtn/>
      </div>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
