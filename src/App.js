import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import CardList from "./components/CardList";

function App() {
  const [citiesList, setCitiesList] = useState(["New York", "Minsk", "Gomel"]);

  return (
    <div className="main">
      <Input setCitiesList={setCitiesList} />
      <CardList citiesList={citiesList}/>
    </div>
  );
}

export default App;
