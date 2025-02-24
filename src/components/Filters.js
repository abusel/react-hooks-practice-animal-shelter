import React from "react";

function Filters({filters, setFilters, fetchData}) {
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" value={filters.type} onChange={(e)=>{
          setFilters({type: e.target.value})
          console.log(filters)
        }}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={fetchData}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
