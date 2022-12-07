import React from "react";
import CreateTask from "../Form/CreateTask";
import TaskList from "../Task/TaskList";
import EditTitle from "../Form/EditTitle";
import { useLoaderData } from "react-router-dom";
import DeleteTodo from "../Form/DeleteTodo";

const EditTodoPanel = () => {
  const selectedTodo = useLoaderData();

  return (
    <React.Fragment>
      <div className="flex justify-between my-2">
        <div className="text-xl font-bold">Todo Info</div>
        <DeleteTodo></DeleteTodo>
      </div>
      <div>
        <EditTitle selectedTodo={selectedTodo}></EditTitle>
      </div>
      <div>
        <TaskList selectedTodo={selectedTodo}></TaskList>
        <CreateTask></CreateTask>
      </div>
    </React.Fragment>
  );
};

export default EditTodoPanel;
