export default function Input(props: { value; onChange; onSubmit }) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={props.value}
          onChange={props.onChange}
        />
        <button>dodaj</button>
      </form>
    </>
  );
}
