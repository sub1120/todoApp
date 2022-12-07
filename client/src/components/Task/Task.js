import React, { useState } from "react";
import { Form } from "react-router-dom";

const Task = ({ selectedTask }) => {
  const [iseditMode, setEditMode] = useState(false);

  return (
    <React.Fragment>
      <Form
        method="post"
        action={
          iseditMode
            ? `task/${selectedTask._id}/edit`
            : `task/${selectedTask._id}/delete`
        }
      >
        <div className="flex">
          <div className="flex-auto mr-2">
            <input
              className={`w-full h-full p-2 focus:outline-none ${
                iseditMode ? "bg-white-400" : "bg-slate-200"
              }`}
              disabled={iseditMode ? false : true}
              placeholder="Task Name"
              defaultValue={selectedTask.name}
              name="taskName"
            ></input>
          </div>
          {!iseditMode && (
            <div className="mx-2">
              <button
                className={`w-fit h-full text-blue-800 rounded-md`}
                onClick={(e) => setEditMode(true)}
                type="button"
              >
                Edit
              </button>
            </div>
          )}

          {iseditMode && (
            <div className="mx-2">
              <button
                className={`w-fit h-full text-blue-800 rounded-md`}
                onClick={(e) => setEditMode(false)}
              >
                Save
              </button>
            </div>
          )}
          {iseditMode && (
            <div className="mx-2">
              <button
                className={`w-fit h-full text-red-800 rounded-md`}
                onClick={(e) => setEditMode(false)}
                type="button"
              >
                Cancel
              </button>
            </div>
          )}
          {!iseditMode && (
            <div className="mx-2">
              <button className={`w-fit h-full text-red-800 rounded-md`}>
                Delete
              </button>
            </div>
          )}
        </div>
      </Form>
    </React.Fragment>
  );
};

export default Task;
