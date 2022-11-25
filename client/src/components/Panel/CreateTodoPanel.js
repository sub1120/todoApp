import React from "react";
import TodoList from "../Todo/TodoList";
import CreateTodo from "../Form/CreateTodo";

const CreateTodoPanel = ({ todos, setSelectedTodo }) => {
  return (
    <React.Fragment>
      <CreateTodo></CreateTodo>
      <TodoList todos={todos} setSelectedTodo={setSelectedTodo}></TodoList>
    </React.Fragment>
  );
};

export default CreateTodoPanel;
