import { axiosInstance } from "./core";

const TODO_PATH = "/todo";

const TodoApi = {
  getTodo() {
    return axiosInstance.get(TODO_PATH);
  },

  addTodo(title, content) {
    return axiosInstance.post(TODO_PATH, { title, content });
  },

  updateTodo(id, content, state) {
    return axiosInstance.put(`${TODO_PATH}/${id}`, { content, state });
  },

  deleteTodo(id) {
    return axiosInstance.delete(`${TODO_PATH}/${id}`);
  },
};

export default TodoApi;
