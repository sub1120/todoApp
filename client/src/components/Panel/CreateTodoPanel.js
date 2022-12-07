import React from "react";
import TodoList from "../Todo/TodoList";
import CreateTodo from "../Form/CreateTodo";

const CreateTodoPanel = ({ todos }) => {
  return (
    <React.Fragment>
      <CreateTodo></CreateTodo>
      <TodoList todos={todos}></TodoList>
    </React.Fragment>
  );
};

export default CreateTodoPanel;
