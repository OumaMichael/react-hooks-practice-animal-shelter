import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  return (
    <div className="row">
      {pets.map((pet) => (
        <div className="col-md-4 mb-4" key={pet.id}>
          <Pet pet={pet} onAdoptPet={onAdoptPet} />
        </div>
      ))}
    </div>
  );
}

export default PetBrowser;
