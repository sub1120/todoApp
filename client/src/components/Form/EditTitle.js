import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Button";

const EditTitle = ({ selectedTodo, appDispatch }) => {
  const [title, setTitle] = useState(selectedTodo.title);
  const [iseditMode, setEditMode] = useState(false);

  useEffect(() => {
    setTitle(selectedTodo.title);
  }, [selectedTodo]);

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const data = {
        title,
      };
      const res = await axios.put(
        `http://localhost:4000/api/v1/todo/${selectedTodo.id}`,
        data
      );
      const todo = res.data.data;

      appDispatch({
        type: "updateTodo",
        id: todo._id,
        todo: todo,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setEditMode(false);
    }
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmitHandler}>
        <div className="sm:flex sm:space-x-4">
          <div className="my-2 sm:flex-auto">
            <input
              className={`p-3 w-full h-14 border-2 ${
                iseditMode ? "bg-white-400" : "bg-slate-300"
              } rounded-md focus:outline-none`}
              placeholder="Title"
              value={title}
              disabled={!iseditMode}
              onChange={titleHandler}
            ></input>
          </div>
          {!iseditMode && (
            <div className="my-2 sm:flex-auto">
              <Button
                title="Edit Title"
                onClick={(e) => setEditMode(true)}
                bgColor="bg-blue-600 hover:bg-blue-800 active:bg-blue-600"
                type="button"
              ></Button>
            </div>
          )}
          {iseditMode && (
            <div className="my-2 sm:flex-auto">
              <Button
                title="Save"
                bgColor="bg-blue-600 hover:bg-blue-800 active:bg-blue-600"
                type="submit"
              ></Button>
            </div>
          )}
          {iseditMode && (
            <div className="my-2 sm:flex-auto">
              <Button
                title={"Cancel"}
                onClick={(e) => setEditMode(false)}
                bgColor="bg-red-600 hover:bg-red-800 active:bg-red-600"
                type="button"
              ></Button>
            </div>
          )}
        </div>
      </form>
    </React.Fragment>
  );
};

export default EditTitle;
