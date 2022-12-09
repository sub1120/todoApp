import { Form } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-72">
        <h1 className="text-3xl">Sign Up</h1>
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
      </div>
    </div>
  );
};

export default SignUp;
