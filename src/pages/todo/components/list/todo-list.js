import { useDispatch, useSelector } from "react-redux";
import OneTodo from "./one-todo";
import { useEffect } from "react";
import { getTodo } from "reducer/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const { loading: getTodoLoading } = useSelector(
    (state) => state.todo.getTodoState
  );
  const { loading: addTodoLoading } = useSelector(
    (state) => state.todo.addTodoState
  );

  const getTodoList = () => {
    dispatch(getTodo());
  };

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <>
      {getTodoLoading || addTodoLoading ? (
        <div>loading...</div>
      ) : (
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
      )}
    </>
  );
};

export default TodoList;
