import { useState } from "react";
import axios from "axios";
import AddButton from "../AddButton";

const CreateTask = ({ selectedTodo, appDispatch }) => {
  const [taskName, setTaskName] = useState("");

  const submitFormHandler = async (event) => {
    try {
      event.preventDefault();
      const data = {
        taskName,
      };
      const res = await axios.put(
        `http://localhost:4000/addTask/${selectedTodo.id}`,
        data
      );
      const todo = res.data.data;

      appDispatch({
        type: "select",
        todo: todo,
      });

      setTaskName("");
    } catch (error) {
      console.log(error);
    }
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
