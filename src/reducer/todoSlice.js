import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  todoList: [],
  getTodoState: {
    loading: false,
    done: false,
    err: null,
  },
  addTodoState: {
    loading: false,
    done: false,
    err: null,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTodo.pending, (state) => {
      state.getTodoState.loading = true;
      state.getTodoState.done = false;
      state.getTodoState.err = null;
    });
    builder.addCase(getTodo.fulfilled, (state, action) => {
      state.todoList = action.payload;
      state.getTodoState.loading = false;
      state.getTodoState.done = true;
      state.getTodoState.err = null;
    });
    builder.addCase(addTodo.pending, (state) => {
      state.addTodoState.loading = true;
      state.addTodoState.done = false;
      state.addTodoState.err = null;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todoList.unshift(action.payload);
      state.addTodoState.loading = false;
      state.addTodoState.done = true;
      state.addTodoState.err = null;
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.addTodoState.loading = false;
      state.addTodoState.done = true;
      state.addTodoState.err = action.payload;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const { id, content, state: todoState } = action.payload;
      const todo = state.todoList.find((todo) => todo.id === id);
      todo.content = content;
      todo.state = todoState;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const deleteIndex = state.todoList.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todoList.splice(deleteIndex, 1);
    });
  },
});

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async ({ title, content }) => {
    const res = await axios.post("/api/todo", { title, content });
    return res.data;
  }
);

export const getTodo = createAsyncThunk("todo/getTodo", async () => {
  const res = await axios.get("/api/todo");
  return res.data;
});

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, content, state }) => {
    const res = await axios.put(`/api/todo/${id}`, { content, state });
    return res.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async ({ id }) => {
    const res = await axios.delete(`/api/todo/${id}`);
    return res.data;
  }
);
