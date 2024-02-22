import { useState, useMemo } from "react";

export default function UseMemoExample1() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");

  // const displayName = ChildComponent(name);
  const displayName = useMemo(() => ChildComponent(name), [name]);

  const onClick = () => setNumber((number) => number + 1);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <p>_________________________________________</p>
      <h3>Use Memo Example</h3>
      <p>Number is {number}</p>
      <button onClick={onClick}>Increment</button>
      <br /> <br />
      <input type="text" value={name} onChange={handleChange}></input>
      <p>Display Name is {displayName}</p>
      <p>_________________________________________</p>
    </div>
  );
}

function ChildComponent(name) {
  console.log("printing name");
  if (name === "React") return name;
}
