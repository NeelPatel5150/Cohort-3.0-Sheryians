import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./features/counterSlice";

const App = () => {
  let dispatch = useDispatch();
  const counter  = useSelector((store) => store.counter.count);
  console.log(counter);
  
  
  
  return (
    <div>
      <h1 className="text-3xl text-center">My Count is {counter}</h1>

      <button
        className="bg-amber-700 text-white px-4 py-2 rounded-md m-4 cursor-pointer "
        onClick={() => dispatch(increment("Neel"))}>
        Increment
      </button>

      <button
        className="bg-amber-700 text-white px-4 py-2 rounded-md m-4 cursor-pointer"
        onClick={() => dispatch({ type: "counter/decrement" })}
      >
        Decrement
      </button>
      
    </div>
  );
};

export default App;

