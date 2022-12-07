import { redirect } from "react-router-dom";
import { fetchTodo, fetchTodos } from "../bridge/todo";
import { Client, Account } from "appwrite";

export const rootLoader = () => {
  redirect("/dashboard");
};

export const todoListLoader = async ({ params }) => {
  const data = await fetchTodos();

  const updatedData = data
    ? data.map((todo) => {
        return {
          id: todo._id,
          title: todo.title,
          tasks: todo.tasks.map((task) => {
            return {
              id: task._id,
              name: task.name,
            };
          }),
        };
      })
    : [];

  return updatedData;
};

export const todoLoader = async ({ params }) => {
  const data = await fetchTodo(params.todoId);
  return data;
};

export const signupLoader = async () => {
  const client = new Client()
    .setEndpoint(
      "https://8080-appwrite-integrationfor-5909t3u9vwa.ws-us77.gitpod.io/v1"
    )
    .setProject("63899ef6418947ff2d89");

  const account = new Account(client);
  const user = account.get();

  if (user) {
    return redirect("/dashboard");
  }
};

export const loginLoader = async () => {
  const client = new Client()
    .setEndpoint(
      "https://8080-appwrite-integrationfor-5909t3u9vwa.ws-us77.gitpod.io/v1"
    )
    .setProject("63899ef6418947ff2d89");

  const account = new Account(client);
  const user = account.get();

  if (!user) {
    return redirect("/login");
  } else {
    return redirect("/dashboard");
  }
};
