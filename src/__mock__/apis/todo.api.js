import { rest } from "msw";
import { todoMock } from "../datas/todo.data";

export const getTodo = rest.get("/todo", async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(todoMock));
});

export const addTodo = rest.post("/todo", async (req, res, ctx) => {
  const { title, content } = await req.json();
  const newTodo = {
    id: Math.floor(Math.random() * 100000),
    title,
    content,
    state: false,
  };
  return res(ctx.status(200), ctx.json(newTodo));
});

export const updateTodo = rest.put("/todo/:id", async (req, res, ctx) => {
  const { id } = req.params;
  const { state, content } = await req.json();
  const todo = {
    id: parseInt(id),
    content,
    state,
  };
  return res(ctx.status(200), ctx.json(todo));
});

export const deleteTodo = rest.delete("/todo/:id", async (req, res, ctx) => {
  const { id } = req.params;
  return res(ctx.status(200), ctx.json(parseInt(id)));
});
