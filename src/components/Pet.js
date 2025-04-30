import React from "react";

function Pet({ pet, onAdoptPet }) {
  const genderSymbol = pet.gender === "male" ? "♂" : "♀";

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">
          {pet.name} <span>{genderSymbol}</span>
        </h5>
        <p className="card-text">
          <strong>Type:</strong> {pet.type} <br />
          <strong>Age:</strong> {pet.age} <br />
          <strong>Weight:</strong> {pet.weight} kg
        </p>
      </div>
      <div className="card-footer bg-transparent">
        {pet.isAdopted ? (
          <button className="btn btn-secondary w-100" disabled>
            Already adopted
          </button>
        ) : (
          <button
            className="btn btn-success w-100"
            onClick={() => onAdoptPet(pet.id)}
          >
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;
