import { Form } from "react-router-dom";

const CreateTodo = () => {
  return (
    <Form method="post" action="new">
      <div className="sm:flex sm:space-x-4">
        <div className="my-2 sm:flex-auto sm:basis-4/6">
          <input
            className="p-3 w-full h-14 border-2 border-slate-300 rounded-md focus:outline-none"
            placeholder="Title"
            name="title"
            defaultValue=""
          ></input>
        </div>
        <div className="my-2 sm:flex-auto sm:basis-2/6">
          <button className="w-full h-14 bg-blue-600 hover:bg-blue-800 active:bg-blue-600 text-white rounded-md">
            Create Todo
          </button>
        </div>
      </div>
    </Form>
  );
};

export default CreateTodo;
