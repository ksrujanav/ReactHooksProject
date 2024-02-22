import { useState } from "react";

const UseStateExample = () => {
  let [counter, setCounter] = useState(0);
  const [color, setColor] = useState("green");
  let [book, setBook] = useState({
    title: "The monk",
    year: "2021",
    author: "author1",
  });
  let incrementCounter = () => {
    setCounter(counter + 1);
  };
  let decrementCounter = () => {
    counter !== 0 && setCounter(counter - 1);
  };
  let handleBook = () => {
    setBook((prevState) => {
      return { ...prevState, year: 2023 };
    });
  };
  return (
    <div>
      <h2>UseState Example: state as a number</h2>
      <h3>Counter Value: {counter}</h3>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={decrementCounter}>Decrement Counter</button>
      <button
        style={{ backgroundColor: color, color: "white" }}
        onClick={() => setColor("red")}
      >
        Click to change background color
      </button>
      <p>
        Book Details are: {book.title} published in {book.year} written by{" "}
        {book.author}.
      </p>
      <button onClick={handleBook}>Click to change book year</button>
    </div>
  );
};
export default UseStateExample;
