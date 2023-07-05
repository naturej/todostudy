import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "apis/core";
import TodoApi from "apis/todo.api";

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
      // state.todoList.unshift(action.payload);
      state.addTodoState.loading = false;
      state.addTodoState.done = true;
      state.addTodoState.err = null;
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.addTodoState.loading = false;
      state.addTodoState.done = true;
      state.addTodoState.err = action.payload;
    });
  },
});

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async ({ title, content }) => {
    const res = await TodoApi.addTodo(title, content);
    return res.data.data;
  }
);

export const getTodo = createAsyncThunk("todo/getTodo", async () => {
  const res = await TodoApi.getTodo();
  return res.data.data;
});

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, content, state }) => {
    const res = await TodoApi.updateTodo(id, content, state);
    return res.data.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async ({ id }) => {
    const res = await TodoApi.deleteTodo(id);
    return res.data.data;
  }
);
