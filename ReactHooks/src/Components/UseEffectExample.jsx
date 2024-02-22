import { useState, useEffect } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);
  let [name, setName] = useState("React");
  /*   useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }); */

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [name]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return clearTimeout(timer);
  }, []);
  
  return (
    <div>
      Rendered this component {count} times.
      <p>Name given is: {name}</p>
      <button onClick={() => setName("React Hooks")}>Change Name</button>
    </div>
  );
}

export default UseEffectExample;
