import { useState } from "react";

function ChangeEvents() {
  // String
  const [name, setName] = useState("");
  function onChangeEventHandler(e) {
    setName(e.target.value);
  }

  //   Number
  const [qty, setQty] = useState(0);
  function onChangeEventHandlerNumber(e) {
    setQty(e.target.value);
  }

  //   set Options
  const [payment, setPayment] = useState("");
  function onChangeEventHandlerPay(e) {
    setPayment(e.target.value);
  }

  //   set Options
  const [home, setHome] = useState("");
  function onChangeEventHandlerRadio(e) {
    setHome(e.target.value);
  }

  return (
    <div className="">
      <input type="text" onChange={onChangeEventHandler} value={name} />
      <p>Entered Text: {name}</p>

      <hr />
      <input type="number" onChange={onChangeEventHandlerNumber} value={qty} />
      <p>Entered Text: {qty}</p>

      <hr />
      <select value={payment} onChange={onChangeEventHandlerPay}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
      </select>
      <p>{payment}</p>

      <hr />
      <label>
        <input
          type="radio"
          value="Home"
          checked={home === "Home"}
          onChange={onChangeEventHandlerRadio}
        />
        Home
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Office"
          checked={home === "Office"}
          onChange={onChangeEventHandlerRadio}
        />
        Office
      </label>
      <p>{home}</p>
    </div>
  );
}

export default ChangeEvents;
