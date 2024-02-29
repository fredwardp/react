import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const counterDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <section className="counter">
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={counterDown}>-</button>
      <button onClick={() => location.reload(true / false)}>refresh</button>
    </section>
  );
};

export default Counter;
