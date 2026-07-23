import React, { useCallback, useMemo } from "react";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  const [count, setCount] = React.useState(0);

  let greet = useCallback(() => {
    console.log("greet function");
  }, []);

  let calculation = useMemo(() => {
    console.log("Calculation runnig...");

    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum += i;
    }
    return sum;
  }, []);
  console.log("App rendereding...");
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-6xl text-red-500">Memoization Example</h1>
      <h2 className="text-4xl text-blue-500">Count: {count}</h2>
      <h2 className="text-4xl text-green-500">Calculation: {calculation}</h2>
      <button
        className="bg-black text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>

      <Home greet={greet} />
      <About greet={greet} />
    </div>
  );
};

export default App;
