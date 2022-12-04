import { useState } from "react";
import { createTodo } from "../../bridge/todo";

const CreateTodo = ({ appDispatch }) => {
  const [title, setTitle] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const todo = await createTodo(title);

    if (!todo) {
      return;
    }

    appDispatch({
      type: "addTodo",
      id: todo._id,
      title: todo.title,
    });
    setTitle("");
  };

  const onChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="sm:flex sm:space-x-4">
          <div className="my-2 sm:flex-auto sm:basis-4/6">
            <input
              className="p-3 w-full h-14 border-2 border-slate-300 rounded-md focus:outline-none"
              placeholder="Title"
              value={title}
              onChange={onChangeHandler}
            ></input>
          </div>
          <div className="my-2 sm:flex-auto sm:basis-2/6">
            <button
              className="w-full h-14 bg-blue-600 hover:bg-blue-800 active:bg-blue-600 text-white rounded-md"
              type="submit"
            >
              Create Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
