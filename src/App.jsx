import React, { Component } from "react";
import CountButton from "./Components/CountButton";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app card">
        <h1>Count</h1>
        <CountButton />
      </div>
    );
  }
}

export default App;
