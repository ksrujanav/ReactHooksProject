import { useReducer } from "react";

const initialState = {
  title: "Initial Value",
  color: "#7b9ec2",
  count: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        color: "red",
        title: "Count incremented",
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
        color: "green",
        title: "Count decremented",
      };
    default:
      return state;
  }
};

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p style={{ backgroundColor: state.color, color: "white" }}>
        The current state is {state.count}. {state.title}
      </p>
    </div>
  );
}

export default UseReducerExample;
