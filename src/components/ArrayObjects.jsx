/* eslint-disable no-const-assign */
import { useState } from "react";

function ArrayObjects() {
  const [car, setCar] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  function handleYear(e) {
    setYear(e.target.value);
  }
  function handleBrand(e) {
    setBrand(e.target.value);
  }
  function handleModel(e) {
    setModel(e.target.value);
  }

  function addItem() {
    const newCar = { year: year, brand: brand, model: model };
    setCar((c) => [...c, newCar]);
    setYear(new Date().getFullYear());
    setBrand("");
    setModel("");
  }
  function removeItem(index) {
    setCar((c) => c.filter((_, i) => i !== index));
  }

  return (
    <div className="" style={{ textAlign: "center" }}>
      <h1>List of Car Objects</h1>
      <ul>
        {car.map((element, index) => (
          <li
            key={index}
            onClick={() => {
              removeItem(index);
            }}
          >
            {element.year}, {element.brand}, {element.model}
          </li>
        ))}
      </ul>
      <input type="number" value={year} onChange={handleYear} />
      <br />
      <input type="text" value={brand} onChange={handleBrand} />
      <br />
      <input type="text" value={model} onChange={handleModel} />
      <br />
      <button onClick={addItem}>add to list </button>
    </div>
  );
}

export default ArrayObjects;
