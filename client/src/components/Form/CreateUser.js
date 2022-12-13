import { Form } from "react-router-dom";

const CreateUser = () => {
  return (
    <Form method="post" action="/signup">
      <div className="my-2">
        <input
          className="p-3 w-full h-12 border-2 border-slate-300 rounded-md focus:outline-none"
          placeholder="Username"
          defaultValue=""
          name="username"
        ></input>
      </div>
      <div className="my-2">
        <input
          className="p-3 w-full h-12 border-2 border-slate-300 rounded-md focus:outline-none"
          placeholder="Email"
          defaultValue=""
          name="email"
        ></input>
      </div>
      <div className="my-2">
        <input
          className="p-3 w-full h-12 border-2 border-slate-300 rounded-md focus:outline-none"
          placeholder="Password"
          defaultValue=""
          name="password"
        ></input>
      </div>
      <div className="my-2">
        <button
          className={`w-full h-14 bg-blue-600 hover:bg-blue-800 active:bg-blue-600 text-white rounded-md`}
        >
          Submit
        </button>
      </div>
    </Form>
  );
};

export default CreateUser;
