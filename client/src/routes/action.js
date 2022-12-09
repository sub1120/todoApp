import { Account, Client, ID } from "appwrite";
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

export const createUserAction = async ({ params, request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");

  try {
    const client = new Client()
      .setEndpoint(
        "https://8080-appwrite-integrationfor-5909t3u9vwa.ws-us78.gitpod.io/v1"
      )
      .setProject("63899ef6418947ff2d89");

    const account = new Account(client);
    const user = await account.create(ID.unique(), email, password, username);
    await account.createEmailSession(email, password);

    if (user) {
      return redirect(`/dashboard`);
    } else {
      return redirect(`/signup`);
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const loginUserAction = async ({ params, request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const client = new Client()
      .setEndpoint(
        "https://8080-appwrite-integrationfor-5909t3u9vwa.ws-us77.gitpod.io/v1"
      )
      .setProject("63899ef6418947ff2d89");

    const account = new Account(client);
    await account.createEmailSession(email, password);
    const user = await account.get();

    if (user) {
      return redirect(`/dashboard`);
    } else {
      return redirect(`/signup`);
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
