import { redirect } from "react-router-dom";
import { fetchTodo, fetchTodos } from "../bridge/todo";
import { getUser } from "../bridge/user";

export const rootLoader = () => {
  redirect("/dashboard");
};

export const todoListLoader = async ({ params, request }) => {
  const user = await getUser();

  if (!user) {
    return redirect("/login");
  }

  const url = new URL(request.url);
  const order = url.searchParams.get("sort");
  const searchTitle = url.searchParams.get("q");
  const data = await fetchTodos(order, searchTitle);

  const updatedData = data
    ? data.map((todo) => {
        return {
          id: todo._id,
          title: todo.title,
          tasks:
            todo.tasks.length !== 0
              ? todo.tasks.map((task) => {
                  return {
                    id: task._id,
                    name: task.name,
                  };
                })
              : [],
          modifiedDate: todo.modifiedDate
            ? todo.modifiedDate
            : todo.createdDate,
        };
      })
    : [];

  return { todoData: updatedData, order: order, user: user };
};

export const todoLoader = async ({ params }) => {
  const data = await fetchTodo(params.todoId);
  const updatedData = data
    ? {
        id: data._id,
        title: data.title,
        tasks:
          data.tasks.length !== 0
            ? data.tasks.map((task) => {
                return {
                  id: task._id,
                  name: task.name,
                };
              })
            : [],
      }
    : null;

  return updatedData;
};

export const signupLoader = async () => {
  const user = await getUser();

  if (user) {
    return redirect("/dashboard");
  }

  return null;
};

export const loginLoader = async () => {
  const user = await getUser();

  if (user) {
    return redirect("/dashboard");
  }

  return null;
};
