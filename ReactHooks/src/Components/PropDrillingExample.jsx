import { useState } from "react";

function PropDrillingExample() {
  const [user, setUser] = useState("user1");
  return (
    <div>
      With Prop Drilling
      <p>_________________________________________</p>
      <p>Parent Component {user}</p>
      <Child1 user={user} />
    </div>
  );
}
function Child1({ user }) {
  return (
    <>
      <p>First Child Component</p>
      <Child2 user={user} />
    </>
  );
}
function Child2({ user }) {
  return (
    <>
      <p>Second Child Component</p>
      <Child3 user={user} />
    </>
  );
}
function Child3({ user }) {
  return (
    <>
      <p>Third Child Component</p>
      <p>The user name from parent component is: {user}</p>
      <p>_________________________________________</p>
    </>
  );
}

export default PropDrillingExample;
