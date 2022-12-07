import React, { useState } from "react";
import { Form } from "react-router-dom";

const Task = ({ taskId, taskName }) => {
  const [iseditMode, setEditMode] = useState(false);

  return (
    <React.Fragment>
      <Form
        method="post"
        action={iseditMode ? `task/${taskId}/edit` : `task/${taskId}/delete`}
      >
        <div className="flex">
          <div className="flex-auto mr-2">
            <input
              className={`w-full h-full p-2 focus:outline-none ${
                iseditMode ? "bg-white-400" : "bg-slate-200"
              }`}
              disabled={iseditMode ? false : true}
              placeholder="Task Name"
              defaultValue={taskName}
              name="taskName"
            ></input>
          </div>

          {iseditMode && (
            <React.Fragment>
              <div className="mx-2">
                <button
                  className={`w-fit h-full text-blue-800 rounded-md`}
                  onClick={(e) => setEditMode(false)}
                >
                  Save
                </button>
              </div>

              <div className="mx-2">
                <button
                  className={`w-fit h-full text-red-800 rounded-md`}
                  onClick={(e) => setEditMode(false)}
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </React.Fragment>
          )}

          {!iseditMode && (
            <React.Fragment>
              <div className="mx-2">
                <button
                  className={`w-fit h-full text-blue-800 rounded-md`}
                  onClick={(e) => setEditMode(true)}
                  type="button"
                >
                  Edit
                </button>
              </div>

              <div className="mx-2">
                <button className={`w-fit h-full text-red-800 rounded-md`}>
                  Delete
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </Form>
    </React.Fragment>
  );
};

export default Task;
