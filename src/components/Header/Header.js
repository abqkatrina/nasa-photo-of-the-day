import React, {useState} from "react";
import "./Header.css";

const Header = props => {
    
    return(
        <div className="container">
            <img alt="rotating space probe" src={"https://upload.wikimedia.org/wikipedia/commons/0/0a/Space_Probe_icon.svg"} className="App-logo"/>
            <h1>NASA Photo of the Day</h1>
        </div>
    )

}

export default Header;