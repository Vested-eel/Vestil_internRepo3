import { useSelector } from "react-redux";
import { selectCount } from "./counterSlice";
import Counter from "./Counter";

function App() {
  const count = useSelector(selectCount);

  return (
    <div>
      <h1>Redux Toolkit Counter</h1>
      <Counter />
      <p>{count > 5 ? "Wow, that's a big number!" : "Keep clicking..."}</p>
    </div>
  );
}

export default App;
