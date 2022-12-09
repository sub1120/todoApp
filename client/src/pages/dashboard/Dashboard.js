import React from "react";
import CreateTodo from "../../components/Form/CreateTodo";
import TodoList from "../../components/Todo/TodoList";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const { todoData, order, user } = useLoaderData();

  return (
    <React.Fragment>
      <div className="p-5 flex justify-between border-b-2">
        <div className="text-2xl font-bold">Welcome Dear {user.name}</div>
        <div>
          <Link className="text-white bg-emerald-600 p-2 rounded" to="/logout">
            Logout
          </Link>
        </div>
      </div>
      <div className="m-5 flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
        <div className="flex flex-col h-screen lg:basis-1/2">
          <CreateTodo></CreateTodo>
          <TodoList todos={todoData} order={order}></TodoList>
        </div>
        <div
          id="details"
          className="flex flex-col h-screen border-2 p-6 rounded-md lg:basis-1/2"
        >
          <Outlet></Outlet>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
