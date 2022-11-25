import React from "react";
import TaskList from "../Task/TaskList";
import AddButton from "../AddButton";
import TaskInput from "../Input/TaskInput";
import EditTodo from "../Form/EditTodo";

const EditTodoPanel = ({ todos, selectedTodo }) => {
  const todo = todos.find((todo) => todo._id === selectedTodo);

  return (
    <React.Fragment>
      <div className="text-xl font-bold">Todo Info</div>
      <EditTodo currentTitle={todo.title}></EditTodo>
      <TaskList tasks={todo.tasks}></TaskList>

      <div className="sm:flex sm:space-x-4">
        <div className="my-2 sm:flex-auto">
          <TaskInput placeholder="Task Name"></TaskInput>
        </div>
        <div className="my-2">
          <AddButton bgColor="bg-blue-600 hover:bg-blue-800 active:bg-blue-600"></AddButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditTodoPanel;
