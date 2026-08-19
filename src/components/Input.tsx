import type { HandlerFormSubmit, HandlerInputText } from "../types/types";

export default function Input(props: {
  onChange: HandlerInputText;
  onSubmit: HandlerFormSubmit;
  inputValue: string;
}) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        {/* <input
          type="text"
          name="todo"
          id="todo"
          onChange={(e) => console.log(e.target.value)}
          /> */}
        <input
          type="text"
          name="todo"
          id="todo"
          onChange={props.onChange}
          value={props.inputValue}
        />
        <button type="submit" disabled={!props.inputValue}>
          dodaj zadanie
        </button>
      </form>
    </>
  );
}
