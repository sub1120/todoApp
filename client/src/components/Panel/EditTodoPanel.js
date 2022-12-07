import React from "react";
import CreateTask from "../Form/CreateTask";
import TaskList from "../Task/TaskList";
import EditTitle from "../Form/EditTitle";
import { Form, useLoaderData } from "react-router-dom";

const EditTodoPanel = () => {
  const selectedTodo = useLoaderData();

  return (
    <React.Fragment>
      <div className="flex justify-between my-2">
        <div className="text-xl font-bold">Todo Info</div>
        <Form method="post" action="delete">
          <div>
            <button
              className={`w-24 h-10 bg-red-600 hover:bg-red-800 active:bg-red-600 text-white rounded-md`}
            >
              Delete
            </button>
          </div>
        </Form>
      </div>
      <div>
        <EditTitle
          key={selectedTodo.id}
          selectedTodo={selectedTodo}
        ></EditTitle>
      </div>
      <TaskList key={selectedTodo.id} selectedTodo={selectedTodo}></TaskList>
      <CreateTask selectedTodo={selectedTodo}></CreateTask>
    </React.Fragment>
  );
};

export default EditTodoPanel;
