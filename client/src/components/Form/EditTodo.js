import { useState } from "react";
import axios from "axios";
import Button from "../Button";

const EditTodo = (props) => {
  const [title, setTitle] = useState("");
  const [iseditMode, setEditMode] = useState(false);

  const editHandler = (event) => {
    setEditMode(true);
  };

  const cancelHandler = (event) => {
    setEditMode(false);
  };

  const saveHandler = (event) => {
    setEditMode(false);
  };

  const deleteHandler = (event) => {};

  const submitFormHandler = async (event) => {
    try {
      event.preventDefault();
      const data = {
        title,
      };
      const todo = await axios.post("http://localhost:4000/editTodo", data);
      console.log(todo);
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
          <div className="my-2 sm:flex-auto sm:basis-2/4">
            <input
              className={`p-3 w-full h-14 border-2 ${
                iseditMode ? "bg-white-400" : "bg-slate-300"
              } rounded-md focus:outline-none`}
              placeholder="Title"
              value={title}
              disabled={iseditMode ? false : true}
              onChange={titleHandler}
            ></input>
          </div>
          <div className="my-2 sm:flex-auto sm:basis-1/4">
            <Button
              title={iseditMode ? "Save" : "Edit Title"}
              onClick={iseditMode ? saveHandler : editHandler}
              bgColor="bg-blue-600 hover:bg-blue-800 active:bg-blue-600"
              type={iseditMode ? "submit" : "button"}
            ></Button>
          </div>
          <div className="my-2 sm:flex-auto sm:basis-1/4">
            <Button
              title={iseditMode ? "Cancel" : "Delete Todo"}
              onClick={iseditMode ? cancelHandler : deleteHandler}
              bgColor="bg-red-600 hover:bg-red-800 active:bg-red-600"
            ></Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
