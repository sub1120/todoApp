import React from "react";
import TodoInput from "../Input/TodoInput";
import TodoList from "../Todo/TodoList";

const CreateTodoPanel = ({ todos }) => {
  return (
    <React.Fragment>
      <TodoInput></TodoInput>
      <TodoList todos={todos}></TodoList>
    </React.Fragment>
  );
};

export default CreateTodoPanel;
