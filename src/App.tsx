import { FC, ChangeEvent, useState } from "react";
import { Todo } from "./interfaces/interface";
import TodoListItem from "./components/TodoListItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    }
    if (e.target.name === "deadline") {
      setDeadline(Number(e.target.value));
    }
  };

  const addTodoHandler = (): void => {
    const newTask = { taskName: task, deadline: deadline };

    setTodoList((prevState) => [...prevState, newTask]);
    setTask("");
    setDeadline(0);
  };

  const removeFromTodo = (todo: string): void => {
    setTodoList(todoList.filter((task) => task.taskName !== todo));
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            placeholder="Task..."
            onChange={handleChange}
            value={task}
          />
          <input
            type="number"
            name="deadline"
            placeholder="Deadline (in Days)..."
            onChange={handleChange}
            value={deadline}
          />
        </div>
        <button onClick={addTodoHandler}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((todo: Todo, index: number) => {
          return (
            <TodoListItem
              key={`${todo}-${index}`}
              todo={todo}
              onRemoveTodo={removeFromTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
