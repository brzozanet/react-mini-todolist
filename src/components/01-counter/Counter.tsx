import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const updateCounter = (value: number) => {
    setCounter((prevState) => prevState + value);
  };

  return (
    <>
      <h2>Projekt 1: Licznik ze stanem (React + TypeScript)</h2>
      <button onClick={() => updateCounter(-1)}>-</button> {counter}{" "}
      <button onClick={() => updateCounter(1)}>+</button>{" "}
      <button onClick={() => setCounter(0)}>wyzeruj</button>
    </>
  );
}
