import propTypes from "prop-types";

function ReUseList(props) {
  const itemList = props.items;
  const category = props.category;

  const itemLists = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;<em>{item.calories}</em>
    </li>
  ));

  return (
    <>
      <h1 className="list-category">{category}</h1>
      <ol className="list-item">{itemLists}</ol>
    </>
  );
}

ReUseList.propTypes = {
  category: propTypes.string,
  item: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      calories: propTypes.number,
    })
  ),
};

ReUseList.defaultProps = {
  category: "Nothing",
  items: [],
};

export default ReUseList;
