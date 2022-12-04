import { useState } from "react";
import AddButton from "../AddButton";
import { addTask } from "../../bridge/todo";

const CreateTask = ({ selectedTodo, appDispatch }) => {
  const [taskName, setTaskName] = useState("");

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const todo = await addTask(selectedTodo.id, taskName);

    if (!todo) {
      return null;
    }

    appDispatch({
      type: "updateTodo",
      id: todo._id,
      todo: todo,
    });

    setTaskName("");
  };

  const taskHandler = (event) => {
    setTaskName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <div className="sm:flex sm:space-x-4">
          <div className="my-2 sm:flex-auto">
            <input
              className={`p-3 w-full h-9 border-2 border-slate-300 rounded-md focus:outline-none`}
              placeholder="Task Name"
              value={taskName}
              onChange={taskHandler}
            ></input>
          </div>
          <div className="my-2">
            <AddButton bgColor="bg-blue-600 hover:bg-blue-800 active:bg-blue-600"></AddButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
