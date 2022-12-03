import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EditTodoPanel from "./components/Panel/EditTodoPanel";
import SignUp from "./pages/SignUp";
import { Client, Account } from "appwrite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    loader: async () => {
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
    },
  },
  {
    path: "/login",
    element: <Login />,
    loader: async () => {
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
    },
  },
  {
    path: "/signup",
    element: <SignUp />,
    loader: async () => {
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
    },
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "todo/:todoId",
        element: <EditTodoPanel />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
