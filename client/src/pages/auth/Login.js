const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-72">
        <h1 className="text-3xl">Login</h1>
        <form method="post" action="/login">
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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
