import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  let incrementCounter = () => {
    setCounter((counter) => counter + 1);
  };
  let decrementCounter = () => {
    counter !== 0 && setCounter((counter) => counter - 1);
  };
  return (
    <>
      <h1>React Hooks</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={incrementCounter}>Increment Counter</button>
      <br />
      <br />
      <button onClick={decrementCounter}>Decrement Counter</button>
    </>
  );
}

export default App;
