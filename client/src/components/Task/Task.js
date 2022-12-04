import React, { useEffect, useState } from "react";
import { deleteTask, editTaskName } from "../../bridge/todo";

const Task = ({ selectedTask, selectedTodo, appDispatch }) => {
  const [iseditMode, setEditMode] = useState(false);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    setTaskName(selectedTask.name);
  }, [selectedTask]);

  const saveHandler = async (event) => {
    const todo = await editTaskName(selectedTodo.id, selectedTask.id, taskName);

    if (!todo) {
      return;
    }

    appDispatch({
      type: "updateTodo",
      id: todo._id,
      todo: todo,
    });

    setEditMode(false);
  };

  const deleteHandler = async (event) => {
    const todo = await deleteTask(selectedTodo.id, selectedTask.id);

    if (!todo) {
      return;
    }

    appDispatch({
      type: "updateTodo",
      id: todo._id,
      todo: todo,
    });
  };

  const onChangeHandler = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="flex-auto mr-2">
        <input
          className={`w-full h-full p-2 focus:outline-none ${
            iseditMode ? "bg-white-400" : "bg-slate-200"
          }`}
          disabled={iseditMode ? false : true}
          placeholder="Task Name"
          value={taskName}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div className="mx-2">
        <button
          className={`w-fit h-full text-blue-800 rounded-md`}
          onClick={iseditMode ? saveHandler : (e) => setEditMode(true)}
        >
          {iseditMode ? "Save" : "Edit"}
        </button>
      </div>
      <div className="mx-2">
        <button
          className={`w-fit h-full text-red-800 rounded-md`}
          onClick={iseditMode ? (e) => setEditMode(false) : deleteHandler}
        >
          {iseditMode ? "Cancel" : "Delete"}
        </button>
      </div>
    </React.Fragment>
  );
};

export default Task;
