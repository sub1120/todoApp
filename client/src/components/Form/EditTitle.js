import React, { useState } from "react";
import { Form } from "react-router-dom";

const EditTitle = ({ selectedTodo }) => {
  const [iseditMode, setEditMode] = useState(false);

  return (
    <Form method="post" action="edit">
      <div className="sm:flex sm:space-x-4">
        <div className="my-2 sm:flex-auto">
          <input
            className={`p-3 w-full h-14 border-2 ${
              iseditMode ? "bg-white-400" : "bg-slate-300"
            } rounded-md focus:outline-none`}
            placeholder="Title"
            name="title"
            disabled={!iseditMode}
            defaultValue={selectedTodo.title}
            key={selectedTodo.id}
          ></input>
        </div>
        {!iseditMode && (
          <div className="my-2 sm:flex-auto">
            <button
              onClick={(e) => setEditMode(true)}
              className="w-full h-14 text-white rounded-md bg-blue-600 hover:bg-blue-800 active:bg-blue-600 cursor-pointer"
              type="button"
            >
              Edit Title
            </button>
          </div>
        )}
        {iseditMode && (
          <React.Fragment>
            <div className="my-2 sm:flex-auto">
              <button
                onClick={(e) => setEditMode(false)}
                className="w-full h-14 text-white rounded-md bg-blue-600 hover:bg-blue-800 active:bg-blue-600 cursor-pointer"
                type="submit"
              >
                Save
              </button>
            </div>
            <div className="my-2 sm:flex-auto">
              <button
                onClick={(e) => setEditMode(false)}
                className="w-full h-14 text-white rounded-md bg-red-600 hover:bg-red-800 active:bg-blue-600 cursor-pointer"
                type="button"
              >
                Cancel
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </Form>
  );
};

export default EditTitle;
