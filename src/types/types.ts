export type Todo = {
  id: string;
  content: string;
  isDone: boolean;
};

export type HandlerInputText = (
  event: React.ChangeEvent<HTMLInputElement>,
) => void;

export type HandlerFormSubmit = (
  event: React.SubmitEvent<HTMLFormElement>,
) => void;
