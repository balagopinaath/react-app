import { useState } from "react";

function ArrayState() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Graps"]);

  function handleAddFood() {
    const newElement = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFruits((f) => [...f, newElement]);
  }

  function handleRemoveFood(index) {
    setFruits(fruits.filter((_, i) => i !== index));
    console.log(fruits);
  }

  return (
    <div>
      <h1>List of Fruits</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} onClick={() => onclick(handleRemoveFood(index))}>
            {fruit}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter the input fruit" />
      <button onClick={handleAddFood}>Add to basket</button>
    </div>
  );
}

export default ArrayState;
