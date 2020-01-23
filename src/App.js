import React, {useState, useEffect} from "react";
import axios from "axios";
import Image from "./components/Image/Image.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js"


import "./App.css";

function App() {

  const [photos, setPhoto] = useState([]);
  
  useEffect(() => {
    
    axios.get("https://api.nasa.gov/planetary/apod?api_key=OR9YEbKpCeTP1pggazqnzdOPu30w8EFeWyn48AMM")

    .then(response => {
      console.log("app works", response);
      setPhoto(response.data);
    })

    .catch(error => {
      console.log("oops, ", error);
    })
    
  }, []);

  

return (
  <div className="App">
    <Header/>
    <Image photos={photos.url}/>
    <Footer date={photos.date} title={photos.title}/>

  </div>
);
}

export default App;