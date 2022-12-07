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
            <button className="w-8 h-8 p-1 bg-blue-600 hover:bg-blue-800 active:bg-blue-600 text-white rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateTask;
