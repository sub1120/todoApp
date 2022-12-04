import { Client, Account } from "appwrite";
import { useState } from "react";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };
  const onPasswordChange = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const client = new Client()
        .setEndpoint(
          "https://8080-appwrite-integrationfor-5909t3u9vwa.ws-us77.gitpod.io/v1"
        )
        .setProject("63899ef6418947ff2d89");

      const { email, password } = formData;
      const account = new Account(client);
      await account.createEmailSession(email, password);
      const user = await account.get();

      setUser(user);
      console.log("User Login successfully", user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-72">
        <h1 className="text-3xl">Login</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="my-2">
            <input
              className="p-3 w-full h-12 border-2 border-slate-300 rounded-md focus:outline-none"
              placeholder="Email"
              value={formData.email}
              onChange={onEmailChange}
            ></input>
          </div>
          <div className="my-2">
            <input
              className="p-3 w-full h-12 border-2 border-slate-300 rounded-md focus:outline-none"
              placeholder="Password"
              value={formData.password}
              onChange={onPasswordChange}
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
