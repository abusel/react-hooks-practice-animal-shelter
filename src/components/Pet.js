import React, {useState} from "react";

function Pet({ pet }) {
  const [adopted, setAdopted] = useState(pet.isAdopted)
  function persistAdopt(){
    
  }
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>{pet.age} years old</p>
          <p>{pet.weight} {pet.weight === 1 ? 'lb' : 'lbs'}</p>
        </div>
      </div>
      <div className="extra content">
        {adopted ? 
        <button className="ui disabled button">Already adopted</button> 
        :
        <button className="ui primary button" onClick= {()=> setAdopted(true)}>Adopt pet</button>
        }
      </div>
    </div>
  );
}

export default Pet;
