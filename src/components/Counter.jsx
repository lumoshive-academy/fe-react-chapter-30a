import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  // Mengambil state count dari redux
  const count = useSelector((state) => state.count);

  // Mendapatkan fungsi dispatch dari redux
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default Counter;
