import React from "react";
import "./Header.css";

const Header = props => {

return (
  <div className="container">
    <img className="App-logo" alt="rotating space probe" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Space_Probe_icon.svg/640px-Space_Probe_icon.svg.png"}/>
    <h2>NASA Photo of the Day React App</h2>
  </div>
);
}

export default Header;