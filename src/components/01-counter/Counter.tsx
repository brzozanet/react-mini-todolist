import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleButtonUp = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleButtonDown = () => {
    setCounter((prevState) => prevState - 1);
  };

  const handleButtonReset = () => {
    setCounter(0);
  };

  return (
    <>
      <h3>Projekt 1: Licznik ze stanem (React + TypeScript)</h3>
      <button onClick={() => handleButtonDown()}>-</button> {counter}{" "}
      <button onClick={() => handleButtonUp()}>+</button>{" "}
      <button onClick={() => handleButtonReset()}>wyzeruj</button>
    </>
  );
}
