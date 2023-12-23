import propsTypes from "prop-types";

function UserGreeting(props) {
  if (props.isLogin) {
    return (
      <>
        <h2>Welcome, {props.userName}</h2>
      </>
    );
  }
  return <h2>Please Login</h2>;
}

UserGreeting.prototype = {
  isLogin: propsTypes.bool,
  userName: propsTypes.string,
};

UserGreeting.defaultProps = {
  isLogin: false,
  userName: "Guest",
};

export default UserGreeting;
