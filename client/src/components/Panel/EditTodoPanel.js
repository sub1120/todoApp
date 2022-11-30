import React from "react";
import CreateTask from "../Form/CreateTask";
import TaskList from "../Task/TaskList";
import EditTodo from "../Form/EditTodo";
import axios from "axios";

const EditTodoPanel = ({ selectedTodo, appDispatch }) => {
  const deleteHandler = async (event) => {
    try {
      const res = await axios.post(
        `http://localhost:4000/deleteTodo/${selectedTodo.id}`
      );

      const delTodo = res.data.data;
      appDispatch({
        type: "deleteTodo",
        id: delTodo._id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="flex justify-between">
        <div className="text-xl font-bold">Todo Info</div>
        <div className="self-end">
          <button
            className={`w-24 h-10 bg-red-600 hover:bg-red-800 active:bg-red-600 text-white rounded-md`}
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
      </div>
      <EditTodo
        appDispatch={appDispatch}
        selectedTodo={selectedTodo}
      ></EditTodo>
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
