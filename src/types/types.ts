export type Todo = {
  id: string;
  content: string;
  isDone: boolean;
};

export type OnChangeHandler = (
  event: React.ChangeEvent<HTMLInputElement>,
) => void;

export type OnSubmitHandler = (
  event: React.SubmitEvent<HTMLFormElement>,
) => void;
