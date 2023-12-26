import { useState } from "react";

function ObjectState() {
  const [car, setCar] = useState({ year: 2024, brand: "audi", model: "a6" });

  function handleYear(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }
  function handleBrand(e) {
    setCar({ ...car, brand: e.target.value });
  }
  function handleModel(e) {
    setCar({ ...car, model: e.target.value });
  }

  return (
    <div>
      <p>
        Your Favourite Car: {car.year}, {car.brand} {car.model}
        <br />
        <input type="number" value={car.year} onChange={handleYear} />
        <br />
        <input type="text" value={car.brand} onChange={handleBrand} />
        <br />
        <input type="text" value={car.model} onChange={handleModel} />
        <br />
      </p>
    </div>
  );
}

export default ObjectState;
