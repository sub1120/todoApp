import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Button";

const EditTodo = ({ currentTitle }) => {
  const [title, setTitle] = useState("");
  const [iseditMode, setEditMode] = useState(false);

  const editHandler = (event) => {
    setEditMode(true);
  };

  const cancelHandler = (event) => {
    setEditMode(false);
  };

  const deleteHandler = (event) => {};

  useEffect(() => {
    setTitle(currentTitle);
  }, [currentTitle]);

  const submitFormHandler = async (event) => {
    try {
      event.preventDefault();
      const data = {
        title,
      };
      const todo = await axios.put("http://localhost:4000/editTitle", data);
      console.log(todo);

      setTitle("");
      setEditMode(false);
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
              value={iseditMode ? title : currentTitle}
              disabled={iseditMode ? false : true}
              onChange={titleHandler}
            ></input>
          </div>
          <div className="my-2 sm:flex-auto sm:basis-1/4">
            {iseditMode && (
              <Button
                title="Save"
                bgColor="bg-blue-600 hover:bg-blue-800 active:bg-blue-600"
                type="submit"
              ></Button>
            )}
            {!iseditMode && (
              <Button
                title="Edit Title"
                onClick={editHandler}
                bgColor="bg-blue-600 hover:bg-blue-800 active:bg-blue-600"
                type="button"
              ></Button>
            )}
          </div>
          <div className="my-2 sm:flex-auto sm:basis-1/4">
            <Button
              title={iseditMode ? "Cancel" : "Delete Todo"}
              onClick={iseditMode ? cancelHandler : deleteHandler}
              bgColor="bg-red-600 hover:bg-red-800 active:bg-red-600"
              type="button"
            ></Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
