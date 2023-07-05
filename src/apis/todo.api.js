import { axiosInstance } from "./core";

const TodoApi = {
  getTodo() {
    return axiosInstance.get("/todo");
  },

  addTodo(title, content) {
    return axiosInstance.post("/todo", { title, content });
  },

  updateTodo(id, content, state) {
    return axiosInstance.put(`/todo/${id}`, { content, state });
  },

  deleteTodo(id) {
    return axiosInstance.delete(`/todo/${id}`);
  },
};

export default TodoApi;
