import UseFetchCustomHook from "./UseFetchCustomHook";

function UsingCustomHook() {
  const [data] = UseFetchCustomHook(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <>
      <h3>Fetching data with custom Hook -UseFetch</h3>
      {data &&
        data.map((item, index) => {
          return index <= 5 && <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}

export default UsingCustomHook;
