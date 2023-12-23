import "./index.css";
import Card from "./components/Card";
import Button from "./components/button/Button";
import Student from "./components/Student";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <>
      <Card />
      <Student name="Bala" age={23} isMarried={false} />
      <Student name="Gopinaath" age={28} isMarried={true} />
      <Student />
      <UserGreeting isLogin={true} userName="Bala" />
      <UserGreeting isLogin={false} userName="Gopi" />
      <UserGreeting isLogin={true} />
      <Button />
    </>
  );
}
export default App;
