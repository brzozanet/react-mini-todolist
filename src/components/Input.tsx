import type { OnChangeHandler, OnSubmitHandler } from "../types/types";

export default function Input(props: {
  onChange: OnChangeHandler;
  onSubmit: OnSubmitHandler;
  inputValue: string;
}) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          onChange={props.onChange}
          value={props.inputValue}
        />
        <button type="submit">dodaj notatkę</button>
      </form>
    </>
  );
}
