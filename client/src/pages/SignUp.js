import CreateUser from "../components/Form/CreateUser";

const SignUp = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-72">
        <h1 className="text-3xl">Sign Up</h1>
        <CreateUser />
      </div>
    </div>
  );
};

export default SignUp;
