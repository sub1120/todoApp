import React, { useEffect, useState } from "react";
import axios from "axios";

const Task = ({ selectedTask, selectedTodo, appDispatch }) => {
  const [iseditMode, setEditMode] = useState(false);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    setTaskName(selectedTask.name);
  }, [selectedTask]);

  const editHandler = (event) => {
    setEditMode(true);
  };

  const cancelHandler = (event) => {
    setEditMode(false);
  };

  const saveHandler = async (event) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/editTaskName/${selectedTodo.id}/task/${selectedTask.id}`,
        { taskName }
      );
      const todo = res.data.data;

      appDispatch({
        type: "updateTodo",
        id: todo._id,
        todo: todo,
      });
    } catch (error) {
      console.log(error);
    }
    setEditMode(false);
  };

  const deleteHandler = async (event) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/deleteTask/${selectedTodo.id}/task/${selectedTask.id}`
      );
      const todo = res.data.data;

      appDispatch({
        type: "updateTodo",
        id: todo._id,
        todo: todo,
      });
    } catch (error) {
      console.log(error);
    }
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
