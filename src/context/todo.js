import { createContext, useContext, useState } from "react";

const initialValue = [
  {
    id: 1,
    title: "할일1",
    content: "내용1",
    state: false,
  },
  {
    id: 2,
    title: "할일2",
    content: "내용2",
    state: false,
  },
  {
    id: 3,
    title: "할일3",
    content: "내용3",
    state: true,
  },
];

const TodoStore = createContext();
export const useTodoStore = () => useContext(TodoStore);

const TodoStoreProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initialValue);
  return (
    <TodoStore.Provider value={[todoList, setTodoList]}>
      {children}
    </TodoStore.Provider>
  );
};

export default TodoStoreProvider;
