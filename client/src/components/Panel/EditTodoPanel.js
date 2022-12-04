import React from "react";
import CreateTask from "../Form/CreateTask";
import TaskList from "../Task/TaskList";
import EditTitle from "../Form/EditTitle";
import { deleteTodo } from "../../bridge/todo";

const EditTodoPanel = ({ selectedTodo, appDispatch }) => {
  const deleteHandler = async (event) => {
    const todo = await deleteTodo(selectedTodo.id);

    if (!todo) {
      return;
    }

    appDispatch({
      type: "deleteTodo",
      id: todo._id,
    });
  };

  return (
    <React.Fragment>
      <div className="flex justify-between my-2">
        <div className="text-xl font-bold">Todo Info</div>
        <div>
          <button
            className={`w-24 h-10 bg-red-600 hover:bg-red-800 active:bg-red-600 text-white rounded-md`}
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
      </div>

      <div>
        <EditTitle
          appDispatch={appDispatch}
          selectedTodo={selectedTodo}
        ></EditTitle>
      </div>

      <TaskList
        appDispatch={appDispatch}
        selectedTodo={selectedTodo}
      ></TaskList>

      <CreateTask
        appDispatch={appDispatch}
        selectedTodo={selectedTodo}
      ></CreateTask>
    </React.Fragment>
  );
};

export default EditTodoPanel;
