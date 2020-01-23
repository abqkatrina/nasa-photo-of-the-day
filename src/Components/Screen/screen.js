//THIS THE THE SCREEN JS PAGE FOR THE NASA PHOTO OF THE DAY PROJECT
import React, {useState, useEffect} from "react";
import axios from "axios";
import "./screen.css";

const Screen() = {

    const [photo, setPhoto] = useState({response.data}) 
    
  useEffect(() => {

    axios
    .get("https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0");

    .then(response =>{
      console.log(response);
      setPhoto(response.data.photo);
      })
      
    .catch(error => {console.log("oops, ", error)})

     }, [] )

    return(
        <div className="container">
            <button className="leftButton" onClick="{}"><</button>
            <div className="screen" src=""></div>
            <button className="leftButton" onClick="{}">></button>
        </div>
    )
}

export default Screen;