<<<<<<< HEAD
import React, {useState, useEffect} from "react";
import axios from "axios";
import Image from "./components/Image/Image.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js"
=======
//THIS THE THE APP JS PAGE FOR THE NASA PHOTO OF THE DAY PROJECT
import React { useState, useEffect} from "react";
import axios from "axios";
import Header from "./Components/Header/header";
import Screen from "./Components/Screen/screen";
import Footer from "./Components/Footer/footer";
>>>>>>> e274e1a42197ba9a4d034dd5891d60b6e1ff649f
import "./App.css";

function App() {

<<<<<<< HEAD
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
=======
return (
  <div className="App">
    <Header />
    <Screen data={response.api_key} />
    <Footer data={response} />
>>>>>>> e274e1a42197ba9a4d034dd5891d60b6e1ff649f
  </div>
);
}

export default App;