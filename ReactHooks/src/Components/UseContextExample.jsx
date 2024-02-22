// React Context is a way to manage state globally.
// To avoid prop drilling, and lifting the state up to the top most component Context is used.

import { useState, createContext, useContext } from "react";
const myContext = createContext();
function UseContextExample() {
  const [user, setUser] = useState("user1");
  return (
    <myContext.Provider value={user}>
      <div>
        Context API --- Without Prop Drilling
        <p>Parent Component {user}</p>
        <Child1 user={user} />
      </div>
    </myContext.Provider>
  );
}
function Child1() {
  return (
    <>
      <p>First Child Component</p>
      <Child2 />
    </>
  );
}
function Child2() {
  return (
    <>
      <p>Second Child Component</p>
      <Child3 />
    </>
  );
}
function Child3() {
  const user = useContext(myContext);
  return (
    <>
      <p>Third Child Component</p>
      <p>The user name from parent component is: {user}</p>
      <p>_________________________________________</p>
    </>
  );
}

export default UseContextExample;
