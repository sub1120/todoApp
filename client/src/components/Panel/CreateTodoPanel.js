import React from "react";
import TodoList from "../Todo/TodoList";
import CreateTodo from "../Form/CreateTodo";

const CreateTodoPanel = ({ todos, appDispatch }) => {
  return (
    <React.Fragment>
      <CreateTodo appDispatch={appDispatch}></CreateTodo>
      <TodoList todos={todos} appDispatch={appDispatch}></TodoList>
    </React.Fragment>
  );
};

export default CreateTodoPanel;
