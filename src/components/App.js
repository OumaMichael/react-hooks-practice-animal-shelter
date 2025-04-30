import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleChangeType(type) {
    setFilters({ type });
  }

  function handleFindPetsClick() {
    let url = "http://localhost:3001/pets";
    if (filters.type !== "all") {
      url += `?type=${filters.type}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPets(data));
  }

  function handleAdoptPet(id) {
    const updatedPets = pets.map((pet) =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    );
    setPets(updatedPets);
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">🐾 Animal Shelter</h1>
      <Filters
        onChangeType={handleChangeType}
        onFindPetsClick={handleFindPetsClick}
      />
      <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
    </div>
  );
}

export default App;
