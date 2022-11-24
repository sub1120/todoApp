import Task from "./Task";
import { useEffect, useRef } from "react";
import React, { useState } from "react";

const TaskList = () => {
  const [iseditMode, setEditMode] = useState(false);
  const ref = useRef(null);

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

  useEffect(() => {
    ref.current.focus();
  }, [iseditMode]);

  return (
    <div className="border-slate-200 border-2 rounded-lg h-full">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="p-2">Tasks</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-slate-200 border-t-2">
            <td>
              <div className="flex ">
                <div className="flex-auto mr-2">
                  <Task
                    refElement={ref}
                    taskName="Task1"
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
              </div>
            </td>
          </tr>
          <tr className="border-slate-200 border-t-2 text-slate-800"></tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
