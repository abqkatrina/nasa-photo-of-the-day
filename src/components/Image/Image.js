import React from "react";
import "./Image.css";

const Image = props => {

console.log("image works", props);

const potd = props.photos;


return (
  <div className="container">
    <img alt="PotD" src={(potd)} className="photo"/>
  </div>
)
}

export default Image;
