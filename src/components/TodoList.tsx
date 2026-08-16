import { useState } from "react";
import type { Todo } from "../types/types";
import Input from "./Input";
import { nanoid } from "nanoid";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const createNewTodo = (event) => {
    event.PreventDefault();
    const todo: Todo = {
      id: nanoid(),
      content: inputValue,
      isDone: false,
    };
    console.log("newTodo:", todo);
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  console.log("inputValue:", inputValue);
  console.log("todos:", todos);

  return (
    <>
      <p>Tu będzie todolista, która da mi mnóstwo satysfakcji 😀</p>
      <Input
        value={inputValue}
        onChange={handleInputValue}
        onSubmit={createNewTodo}
      />
      <ul>
        {todos.map((todo) => (
          <li>{todo.content}</li>
        ))}
      </ul>
    </>
  );
}
