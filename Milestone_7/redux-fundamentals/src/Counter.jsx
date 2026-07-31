import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, selectCount } from "./counterSlice";

function Counter() {
  const count = useSelector(selectCount); // No state.counter.value here, we use the selector function
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
