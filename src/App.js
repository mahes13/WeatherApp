import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
         Developed by {" "}
        <a target="_blank" rel="noreferrer" href="https://mahes13.github.io/portfoliocm/">
        Mahesh {" "}
        </a> 
      </div>
    </React.Fragment>
  );
}

export default App;
