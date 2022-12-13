import { createBrowserRouter, redirect } from "react-router-dom";

//import pages and components
import Dashboard from "../pages/Dashboard";
import EditTodoPanel from "../components/Panel/EditTodoPanel";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

//import loaders
import {
  loginLoader,
  signupLoader,
  todoListLoader,
  todoLoader,
} from "./loader";

//import actions
import {
  addTaskAction,
  createTodoAction,
  createUserAction,
  deleteTaskAction,
  deleteTodoAction,
  editTaskNameAction,
  editTitleAction,
  loginUserAction,
  logoutUserAction,
} from "./action";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return redirect("/dashboard");
    },
  },
  {
    path: "/login",
    element: <Login />,
    loader: loginLoader,
    action: loginUserAction,
  },
  {
    path: "/logout",
    action: logoutUserAction,
  },
  {
    path: "/signup",
    element: <SignUp />,
    loader: signupLoader,
    action: createUserAction,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: todoListLoader,
    children: [
      {
        path: "new",
        action: createTodoAction,
      },
      {
        path: "todo/:todoId",
        element: <EditTodoPanel />,
        loader: todoLoader,
      },
      {
        path: "todo/:todoId/delete",
        action: deleteTodoAction,
      },
      {
        path: "todo/:todoId/edit",
        action: editTitleAction,
      },
      {
        path: "todo/:todoId/new",
        action: addTaskAction,
      },
      {
        path: "todo/:todoId/task/:taskId/delete",
        action: deleteTaskAction,
      },
      {
        path: "todo/:todoId/task/:taskId/edit",
        action: editTaskNameAction,
      },
    ],
  },
]);

export default router;
