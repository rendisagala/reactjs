import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [getNavbarValue, setNavbarValue] = useState("");
  const changeNavbar = () => {
    setNavbarValue("Contact");
  };

  return (
    <div className="App">
      <Navbar navValue={getNavbarValue} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => changeNavbar()}>CLICK ME!</button>
      </header>
    </div>
  );
}

export default App;
