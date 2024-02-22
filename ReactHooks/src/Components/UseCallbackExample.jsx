import { useState, useCallback, useEffect } from "react";

export default function UseCallbackExample() {
  const [num1] = useState(5);
  const [num2] = useState(8);
  // const sum = () => num1 + num2;
  const sum = useCallback(() => num1 + num2, [num1, num2]);

  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log(`New Sum Value:${sum()}`);
  }, [sum]);
  return (
    <div>
      <h3>Use Callback Example</h3>
      <input type="text" value={name} onChange={handleChange}></input>
      <p>Sum is {sum()}</p>
      <p>_________________________________________</p>
    </div>
  );
}
