// function ButtonClick() {
//   const handleClick = () => console.log("hi");
//   const clickParameter = (name, age) => console.log({ name, age });
//   return (
//     <button onClick={() => clickParameter("bala", 25)}>Please stop 🤞</button>
//   );
// }

// export default ButtonClick;

function ButtonClick() {
  //   let count = 0;

  //   const clickParam = (name) => {
  //     if (count < 3) {
  //       console.log(`Hi ${name} to clicked ${count} times`);
  //       count++;
  //     } else {
  //       console.log(`Hey ${name} please stop me!`);
  //     }
  //   };

  const eventHandle = (event) => (event.target.textContent = "Hey, 😊");
  const imgHandlerEvent = (event) => (event.target.style.display = "none");

  return (
    <>
      <img
        onClick={imgHandlerEvent}
        src="https://images.pexels.com/photos/18264705/pexels-photo-18264705/free-photo-of-smiling-man-in-headphones-with-microphone-using-a-apple-macbook.jpeg"
        alt="lorem"
        width={150}
        height={150}
      />
      <button onClick={(event) => eventHandle(event)}>Hi, 🤞</button>
    </>
  );
}

export default ButtonClick;
