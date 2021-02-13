import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";

function App() {
  const toggleMode = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <div className="App">
        <input type="checkbox" className="checkbox" id="checkbox" onChange={toggleMode} />
        <label for="checkbox" class="label">
          <FaMoon class="fa-moon" />
          <FaSun class="fa-sun" />
          <div class="ball"></div>
        </label>
      </div>
    </>
  );
}

export default App;
