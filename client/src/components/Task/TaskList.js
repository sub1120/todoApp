import Task from "./Task";
import React, { useState } from "react";

const TaskList = ({ tasks }) => {
  const [iseditMode, setEditMode] = useState(false);

  const editHandler = (event) => {
    setEditMode(true);
  };

  const cancelHandler = (event) => {
    setEditMode(false);
  };

  const saveHandler = (event) => {
    setEditMode(false);
  };

  const deleteHandler = (event) => {};

  return (
    <div className="border-slate-200 border-2 rounded-lg h-full">
      <ul className="table-auto border-collapse w-full">
        <li className="p-2">Tasks</li>
        {tasks.map((task) => (
          <li className="border-slate-300 border-t-2 flex">
            <div className="flex-auto mr-2">
              <Task
                taskName={task.name}
                iseditMode={iseditMode}
                disabled={iseditMode ? false : true}
              />
            </div>
            <div className="mx-2">
              <button
                className={`w-fit h-full text-blue-800 rounded-md`}
                onClick={iseditMode ? saveHandler : editHandler}
              >
                {iseditMode ? "Save" : "Edit"}
              </button>
            </div>
            <div className="mx-2">
              <button
                className={`w-fit h-full text-red-800 rounded-md`}
                onClick={iseditMode ? cancelHandler : deleteHandler}
              >
                {iseditMode ? "Cancel" : "Delete"}
              </button>
            </div>
          </li>
        ))}

        <li className="border-slate-200 border-t-2 text-slate-800"></li>
      </ul>
    </div>
  );
};

export default TaskList;
