import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Hello from "./Hello";
import Square from "./Square";

function App() {
  const [count, setCount] = useState(0);
  const favNums = [7, 21, 37];
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  const incrementTest = () => {
    setCount((c) => c + 1);
  };
  const incrementM = useMemo(() => setCount((c) => c + 1), [setCount]);
  return (
    <div className="App">
      {/* <Hello increment={increment} /> */}
      <div>count: {count}</div>
      {favNums.map((item) => {
        return <Square increment={incrementM} n={item} key={item} />;
      })}
    </div>
  );
}

export default App;
