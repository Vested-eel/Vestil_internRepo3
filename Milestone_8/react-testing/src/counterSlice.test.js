import reducer, { increment, decrement } from "./counterSlice";

test("increment increases value by 1", () => {
  const initialState = { value: 0 };
  const newState = reducer(initialState, increment());
  expect(newState.value).toBe(1);
});

test("decrement decreases value by 1", () => {
  const initialState = { value: 2 };
  const newState = reducer(initialState, decrement());
  expect(newState.value).toBe(1);
});
