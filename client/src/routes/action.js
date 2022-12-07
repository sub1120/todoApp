import { redirect } from "react-router-dom";
import {
  addTask,
  createTodo,
  deleteTask,
  deleteTodo,
  editTaskName,
  editTitle,
} from "../bridge/todo";

export const createTodoAction = async ({ params, request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const todo = await createTodo(title);
  return redirect(`/dashboard/todo/${todo._id}`);
};

export const deleteTodoAction = async ({ params, request }) => {
  await deleteTodo(params.todoId);
  return redirect("/dashboard");
};

export const editTitleAction = async ({ params, request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const todo = await editTitle(params.todoId, title);
  return redirect(`/dashboard/todo/${todo._id}`);
};

export const addTaskAction = async ({ params, request }) => {
  const formData = await request.formData();
  const taskName = formData.get("taskName");
  const todo = await addTask(params.todoId, taskName);
  return redirect(`/dashboard/todo/${todo._id}`);
};

export const deleteTaskAction = async ({ params, request }) => {
  const todo = await deleteTask(params.todoId, params.taskId);
  return redirect(`/dashboard/todo/${todo._id}`);
};

export const editTaskNameAction = async ({ params, request }) => {
  const formData = await request.formData();
  const taskName = formData.get("taskName");
  const todo = await editTaskName(params.todoId, params.taskId, taskName);
  return redirect(`/dashboard/todo/${todo._id}`);
};
