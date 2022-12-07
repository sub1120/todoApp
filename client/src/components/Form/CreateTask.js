import AddButton from "../AddButton";
import { Form } from "react-router-dom";

const CreateTask = () => {
  return (
    <div>
      <Form method="post" action="new">
        <div className="sm:flex sm:space-x-4">
          <div className="my-2 sm:flex-auto">
            <input
              className={`p-3 w-full h-9 border-2 border-slate-300 rounded-md focus:outline-none`}
              placeholder="Task Name"
              defaultValue=""
              name="taskName"
            ></input>
          </div>
          <div className="my-2">
            <AddButton bgColor="bg-blue-600 hover:bg-blue-800 active:bg-blue-600"></AddButton>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateTask;
