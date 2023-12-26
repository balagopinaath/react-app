import "./index.css";
import Card from "./components/Card";
import Button from "./components/button/Button";
import Student from "./components/Student";
import UserGreeting from "./components/UserGreeting";
import List from "./assets/List";
import ReUseList from "./components/ReuseList";
import ButtonClick from "./components/ButtonClick";
import CounterState from "./components/CounterState";
import ChangeEvents from "./components/ChangeEvents";
import ObjectState from "./components/ObjectState";
import ArrayState from "./components/ArrayState";
import ArrayObjects from "./components/ArrayObjects";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 45 },
    { id: 3, name: "coconut", calories: 105 },
    { id: 4, name: "pine apple", calories: 159 },
    { id: 5, name: "orange", calories: 37 },
  ];
  const vegetables = [
    { id: 1, name: "Beetroot", calories: 95 },
    { id: 2, name: "Carrot", calories: 45 },
    { id: 3, name: "White radish", calories: 105 },
    { id: 4, name: "Celeriac", calories: 159 },
    { id: 5, name: "Sugar beet", calories: 37 },
  ];
  return (
    <>
      <ArrayObjects />
      <ArrayState />
      <ObjectState />
      <ButtonClick />
      <Card />
      <ChangeEvents />
      <CounterState />
      <Student name="Bala" age={23} isMarried={false} />
      <Student name="Gopinaath" age={28} isMarried={true} />
      <Student />
      <UserGreeting isLogin={true} userName="Bala" />
      <UserGreeting isLogin={false} userName="Gopi" />
      <UserGreeting isLogin={true} />
      <Button />
      <List />
      <hr></hr>
      {fruits.length > 0 && <ReUseList items={fruits} category="Fruits" />}
      {vegetables.length > 0 ? (
        <ReUseList items={vegetables} category="Vegetables" />
      ) : null}
    </>
  );
}
export default App;
