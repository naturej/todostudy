import { createContext, useContext, useReducer } from "react";

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

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [action.payload, ...state];
    case "UPDATE_TODO":
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, content: action.payload.content }
          : todo;
      });
    case "COMPLETE_TODO":
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, state: !todo.state }
          : todo;
      });
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

const TodoStoreProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(todoReducer, initialValue);
  return (
    <TodoStore.Provider value={{ todoList, dispatch }}>
      {children}
    </TodoStore.Provider>
  );
};

export default TodoStoreProvider;
