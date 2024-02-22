import { useRef } from "react";

function UseRefExample() {
  const myRef = useRef();
  const focusInput = () => {
    myRef.current.focus();
  };
  return (
    <div>
      UseRefExample
      <input type="text" value="input" ref={myRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefExample;
