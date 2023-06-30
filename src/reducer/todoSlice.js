import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
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
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todoList.unshift(action.payload);
    },
    updateTodo(state, action) {
      const todo = state.todoList.find((todo) => todo.id === action.payload.id);
      todo.content = action.payload.content;
    },
    completeTodo(state, action) {
      const todo = state.todoList.find((todo) => todo.id === action.payload.id);
      todo.state = !todo.state;
    },
    deleteTodo(state, action) {
      const deleteIndex = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todoList.splice(deleteIndex, 1);
    },
  },
});

export const { addTodo, updateTodo, completeTodo, deleteTodo } =
  todoSlice.actions;
