import React, { useEffect, useState } from "react";
import Button from "../Button";
import { Form } from "react-router-dom";

const EditTitle = ({ selectedTodo }) => {
  const [iseditMode, setEditMode] = useState(false);

  console.log(selectedTodo);

  useEffect(() => {
    setEditMode(false);
  }, [selectedTodo]);

  return (
    <React.Fragment>
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
              <Button
                title="Edit Title"
                onClick={(e) => setEditMode(true)}
                bgColor="bg-blue-600 hover:bg-blue-800 active:bg-blue-600"
                type="button"
              ></Button>
            </div>
          )}
          {iseditMode && (
            <div className="my-2 sm:flex-auto">
              <Button
                title="Save"
                bgColor="bg-blue-600 hover:bg-blue-800 active:bg-blue-600"
                type="submit"
              ></Button>
            </div>
          )}
          {iseditMode && (
            <div className="my-2 sm:flex-auto">
              <Button
                title={"Cancel"}
                onClick={(e) => setEditMode(false)}
                bgColor="bg-red-600 hover:bg-red-800 active:bg-red-600"
                type="button"
              ></Button>
            </div>
          )}
        </div>
      </Form>
    </React.Fragment>
  );
};

export default EditTitle;
