import { useState, useMemo } from "react";

export default function UseMemoExample() {
  const [number, setNumber] = useState("");
  const [inc, setInc] = useState(0);

  const factorial = useMemo(() => calcFactorial(number), [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      <input type="number" value={number} onChange={onChange} />
      <p>Factorial of above number is {factorial}</p>
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}

function calcFactorial(n) {
  console.log("Calculating Factorial!!");
  return n <= 0 ? 1 : n * calcFactorial(n - 1);
}
