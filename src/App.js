//THIS THE THE APP JS PAGE FOR THE NASA PHOTO OF THE DAY PROJECT
import React { useState, useEffect} from "react";
import axios from "axios";
import Header from "./Components/Header/header";
import Screen from "./Components/Screen/screen";
import Footer from "./Components/Footer/footer";
import "./App.css";

function App() {

return (
  <div className="App">
    <Header />
    <Screen data={response.api_key} />
    <Footer data={response} />
  </div>
);
}

export default App;