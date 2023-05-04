import { Todo } from "../interfaces/interface";

type Props = {
  todo: Todo;
  onRemoveTodo: (value: string) => void;
};

const TodoListItem = ({ todo, onRemoveTodo }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{todo.taskName}</span>
        <span>{todo.deadline}</span>
      </div>
      <button onClick={() => onRemoveTodo(todo.taskName)}>X</button>
    </div>
  );
};

export default TodoListItem;
