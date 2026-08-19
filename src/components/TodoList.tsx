import { useState } from "react";
import type { HandlerFormSubmit, HandlerInputText, Todo } from "../types/types";
import Input from "./Input";
import { nanoid } from "nanoid";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputText: HandlerInputText = (event) => {
    setInputValue(event.target.value);
  };

  const addNewTodo: HandlerFormSubmit = (event) => {
    event.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: nanoid(), content: inputValue, isDone: false },
    ]);
    setInputValue("");
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <p>Todo lista, która sprawi mi mnóstwo radości 😀</p>
      <h3>Dodaj zadanie</h3>
      <Input
        onChange={handleInputText}
        onSubmit={addNewTodo}
        inputValue={inputValue}
      />
      <h3>Lista zadań (łącznie: {todos.length}, do zrobienia:)</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.content}{" "}
            <button onClick={() => deleteTodo(todo.id)}>usuń</button>
          </li>
        ))}
      </ul>
    </>
  );
}
