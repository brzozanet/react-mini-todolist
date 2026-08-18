export default function Input(props: { onChange; onSubmit; inputValue }) {
  return (
    <>
      <form action="" onSubmit={props.onSubmit}>
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
