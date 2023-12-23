import ProtoTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Married: {props.isMarried ? "Yes" : "No"}</p>
    </div>
  );
}

Student.protoTypes = {
  name: ProtoTypes.string,
  age: ProtoTypes.number,
  isMarried: ProtoTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isMarried: false,
};

export default Student;
