import React from "react";
import Button from "../Button";
import TodoInput from "../Input/TodoInput";
import TodoList from "../Todo/TodoList";

const CreateTodoPanel = (props) => {
  return (
    <React.Fragment>
      <div className="sm:flex sm:space-x-4">
        <div className="my-2 sm:flex-auto sm:basis-4/6">
          <TodoInput placeholder="Title"></TodoInput>
        </div>
        <div className="my-2 sm:flex-auto sm:basis-2/6">
          <Button
            title="Create Todo"
            bgColor="bg-blue-600 hover:bg-blue-800 active:bg-blue-600"
          ></Button>
        </div>
      </div>
      <TodoList></TodoList>
    </React.Fragment>
  );
};

export default CreateTodoPanel;
