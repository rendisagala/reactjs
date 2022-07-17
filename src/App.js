import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  const [getNavbarValue, setNavbarValue] = useState("");
  const changeNavbar = () => {
    setNavbarValue("Contact");
  };

  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <Navbar navValue={getNavbarValue} />
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => changeNavbar()}>CLICK ME!</button> <Footer />
      </header>
    </div>
  );
}

export default App;
