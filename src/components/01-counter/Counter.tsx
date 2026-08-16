import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  // const handleButtonUp = () => {
  //   setCounter((prevState) => prevState + 1);
  // };

  // const handleButtonDown = () => {
  //   setCounter((prevState) => prevState - 1);
  // };

  // const handleButtonReset = () => {
  //   setCounter(0);
  // };

  const handleConunterButton = (value: number) => {
    setCounter((prevState) => prevState + value);
  };

  return (
    <>
      <h3>Projekt 1: Licznik ze stanem (React + TypeScript)</h3>
      <button onClick={() => handleConunterButton(-1)}>-</button> {counter}{" "}
      <button onClick={() => handleConunterButton(1)}>+</button>{" "}
      <button onClick={() => setCounter(0)}>wyzeruj</button>
    </>
  );
}
