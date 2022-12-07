import React from "react";
import CreateTodoPanel from "../../components/Panel/CreateTodoPanel";
import TodoList from "../../components/Todo/TodoList";
import { Outlet, useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const todoData = useLoaderData();

  return (
    <div className="m-5 flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
      <div className="flex flex-col h-screen lg:basis-1/2">
        <CreateTodoPanel></CreateTodoPanel>
        <TodoList todos={todoData}></TodoList>
      </div>
      <div className="flex flex-col h-screen border-2 p-6 rounded-md lg:basis-1/2">
        <div id="details">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
