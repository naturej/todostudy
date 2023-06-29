import { useTodoStore } from "context/todo";
import OneTodo from "./one-todo";

const TodoList = () => {
  const { todoList } = useTodoStore();

  return (
    <ul>
      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <li key={todo.id}>
            <OneTodo todo={todo} />
          </li>
        ))
      ) : (
        <li>할 일이 없습니다</li>
      )}
    </ul>
  );
};

export default TodoList;
