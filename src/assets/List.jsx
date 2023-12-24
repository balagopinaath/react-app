function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 45 },
    { id: 3, name: "coconut", calories: 105 },
    { id: 4, name: "pine apple", calories: 159 },
    { id: 5, name: "orange", calories: 37 },
  ];

  //   sorting of an array Alphabetical (String)
  //   fruits.sort((a, b) => a.name.localeCompare(b.name));

  //   sorting of an array Alphabetical in reverse order (String)
  //   fruits.sort((a, b) => b.name.localeCompare(a.name));

  //   sorting in number
  fruits.sort((a, b) => a.calories - b.calories);

  const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  //   eslint-disable-next-line react/jsx-key
  const fruitsItem = lowCalFruits.map((lowCalFruit) => (
    <li key={lowCalFruit.id}>
      {lowCalFruit.name}: &nbsp;<em>{lowCalFruit.calories}</em>
    </li>
  ));

  return <ol>{fruitsItem}</ol>;
}

export default List;
