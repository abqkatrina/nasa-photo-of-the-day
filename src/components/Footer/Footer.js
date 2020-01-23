import React from "react";
import "./Footer.css";

const Footer = props => {
  
return (
  <div className="footer">
    <p>Date: {props.date}</p>
    <p>{props.title}</p>
  </div>
)
}

export default Footer;