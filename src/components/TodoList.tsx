import { useState } from "react";
import type { Todo } from "../types/types";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <p>Todo lista, która sprawi mi mnóstwo radości 😀</p>
      <h3>Dodaj zadanie</h3>
      <h3>Lista zadań (łącznie: {todos.length}, do zrobienia:)</h3>
      <ul>
        {todos.map((todo) => (
          <li>{todo.content}</li>
        ))}
      </ul>
    </>
  );
}
