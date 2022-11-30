import Task from "./Task";
import React from "react";

const TaskList = ({ selectedTodo, appDispatch }) => {
  return (
    <div className="border-slate-200 border-2 rounded-lg h-full">
      <ul className="table-auto border-collapse w-full">
        <li className="p-2">Tasks</li>
        {selectedTodo.tasks.map((task) => (
          <li className="border-slate-300 border-t-2 flex" key={task.id}>
            <Task
              selectedTask={task}
              appDispatch={appDispatch}
              selectedTodo={selectedTodo}
            />
          </li>
        ))}

        <li className="border-slate-200 border-t-2 text-slate-800"></li>
      </ul>
    </div>
  );
};

export default TaskList;
