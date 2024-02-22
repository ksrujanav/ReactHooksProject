import UseStateExample from "./Components/UseStateExample";
import UseEffectExample from "./Components/UseEffectExample";
import PropDrillingExample from "./Components/PropDrillingExample";
import UseContextExample from "./Components/UseContextExample";
import UseRefExample from "./Components/UseRefExample";
import UseReducerExample from "./Components/UseReducerExample";
import UseMemoExample from "./Components/UseMemoExample";
import UseMemoExample1 from "./Components/UseMemoExample1";
import UseCallbackExample from "./Components/UseCallbackExample";
import UseFetchCustomHook from "./Components/UseFetchCustomHook";
import UsingCustomHook from "./Components/UsingCustomHook";
function App() {
  return (
    <>
      <h1>React Hooks</h1>
      <UseStateExample />
      <UseEffectExample />
      <PropDrillingExample />
      <UseContextExample />
      {/* <UseRefExample /> */}
      <UseReducerExample />
      {/* <UseMemoExample /> */}
      <UseMemoExample1 />
      <UseCallbackExample />
      <UsingCustomHook />
    </>
  );
}

export default App;
