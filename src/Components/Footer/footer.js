//THIS IS THE FOOTER JS PAGE FOR THE NASA PHOTO OF THE DAY PROJECTS
import React, {useState, useEffect} from "react";
import screen from "./Components/Screen";
import "./footer.css";

const Footer() = {
    console.log(props)
    const [date, setDate] = useState({})

    return(
        <div>
            <p>
                `${props.date}``
                {"  "}
                `${props.api_key}``
            </p>   
        </div>
    )
}