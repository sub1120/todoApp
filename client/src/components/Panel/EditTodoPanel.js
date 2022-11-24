import React, { useState } from "react";
import TaskList from "../Task/TaskList";
import Button from "../Button";
import TextInput from "../TextInput";

const EditTodoPanel = () => {
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
    <React.Fragment>
      <div className="text-xl font-bold">Todo Info</div>
      <div className="sm:flex sm:space-x-4">
        <div className="my-2 sm:flex-auto sm:basis-2/4">
          <TextInput
            placeholder="Title"
            disabled={iseditMode ? false : true}
            bgColor={iseditMode ? "bg-white-400" : "bg-slate-200"}
          ></TextInput>
        </div>
        <div className="my-2 sm:flex-auto sm:basis-1/4">
          <Button
            title={iseditMode ? "Save Title" : "Edit Title"}
            onClick={iseditMode ? saveHandler : editHandler}
            bgColor="bg-blue-600 hover:bg-blue-800"
          ></Button>
        </div>
        <div className="my-2 sm:flex-auto sm:basis-1/4">
          <Button
            title={iseditMode ? "Cancel" : "Delete Todo"}
            onClick={iseditMode ? cancelHandler : deleteHandler}
            bgColor="bg-red-600 hover:bg-red-800"
          ></Button>
        </div>
      </div>

      <TaskList></TaskList>

      <div className="sm:flex sm:space-x-4">
        <div className="my-2 sm:flex-auto sm:basis-4/6">
          <TextInput placeholder="Task Name"></TextInput>
        </div>
        <div className="my-2 sm:flex-auto sm:basis-2/6">
          <Button
            title="Add Task"
            bgColor="bg-blue-600 hover:bg-blue-800"
          ></Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditTodoPanel;
