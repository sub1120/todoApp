import LoginUser from "../components/Form/LoginUser";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-72">
        <h1 className="text-3xl">Login</h1>
        <LoginUser />
      </div>
    </div>
  );
};

export default Login;
