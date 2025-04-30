import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Filter Pets</h5>
        <div className="row g-3 align-items-center">
          <div className="col-md-4">
            <select
              className="form-select"
              onChange={(e) => onChangeType(e.target.value)}
            >
              <option value="all">All</option>
              <option value="cat">Cats</option>
              <option value="dog">Dogs</option>
              <option value="micropig">Micropigs</option>
            </select>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" onClick={onFindPetsClick}>
              Find Pets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
