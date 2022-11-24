import { useState } from "react";
import axios from "axios";
import Button from "../Button";

const CreateTodo = (props) => {
  const [title, setTitle] = useState("");

  const submitFormHandler = async (event) => {
    try {
      event.preventDefault();
      const data = {
        title,
      };
      const todo = await axios.post("http://localhost:4000/createTodo", data);
      console.log(todo);

      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <div className="sm:flex sm:space-x-4">
          <div className="my-2 sm:flex-auto sm:basis-4/6">
            <input
              className={`p-3 w-full h-14 border-2 border-slate-300 rounded-md focus:outline-none`}
              placeholder="Title"
              value={title}
              onChange={titleHandler}
            ></input>
          </div>
          <div className="my-2 sm:flex-auto sm:basis-2/6">
            <Button
              title="Create Todo"
              bgColor="bg-blue-600 hover:bg-blue-800 active:bg-blue-600"
              type="submit"
            ></Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
