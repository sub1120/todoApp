import { Form } from "react-router-dom";

const LogoutUser = () => {
  return (
    <Form method="post" action="/logout">
      <button className="text-white bg-emerald-600 p-2 rounded">Logout</button>
    </Form>
  );
};

export default LogoutUser;
