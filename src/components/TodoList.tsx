import { useState } from "react";
import Input from "./Input";
import type { Todo } from "../types/types";
import { nanoid } from "nanoid";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addNewTodo = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: nanoid(), content: inputValue, isDone: false },
      ];
    });
    setInputValue("");
  };

  return (
    <>
      <p>Todo lista, która sprawi mi mnóstwo radości 😀</p>
      <h3>Dodaj notatkę</h3>
      <Input
        onChange={handleInputValue}
        onSubmit={addNewTodo}
        inputValue={inputValue}
      />
      <h3>Lista notatek</h3>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.content}</li>;
        })}
      </ul>
    </>
  );
}
