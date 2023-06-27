import OneTodo from "./one-todo";

const TodoList = ({ todoList, setTodoList }) => {
  const handelUpdateTodo = (id, content) => {
    // Todo 수정
    const _todoList = [...todoList];
    const editTodo = _todoList.find((todo) => todo.id === id);
    editTodo.content = content;
    setTodoList(_todoList);
  };

  const handleUpdateStateTodo = (id, state) => {
    // Todo 상태 토글
    const _todoList = [...todoList];
    const editTodo = _todoList.find((todo) => todo.id === id);
    editTodo.state = !state;
    setTodoList(_todoList);
  };

  const handleDeleteTodo = (id) => {
    // Todo 삭제
    const _todoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(_todoList);
  };
  return (
    <ul>
      {todoList.length > 0 ? (
        todoList.map((todo) => (
          <li key={todo.id}>
            <OneTodo
              todo={todo}
              handelUpdateTodo={handelUpdateTodo}
              handleUpdateStateTodo={handleUpdateStateTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          </li>
        ))
      ) : (
        <li>할 일이 없습니다</li>
      )}
    </ul>
  );
};

export default TodoList;
