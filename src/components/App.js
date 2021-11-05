import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";


function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  useEffect(()=>{
   fetchData()
  },[]
    )
    function fetchData(){
      filters.type === 'all' ?
      fetch('http://localhost:3000/pets')
      .then(res=> res.json())
      .then(data=>setPets(data))
      :
      fetch(`http://localhost:3000/pets?type=${filters.type}`)
      .then(res=> res.json())
      .then(data=>setPets(data))
    }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters filters={filters} setFilters={setFilters} fetchData={fetchData}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets= {pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
