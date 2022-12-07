import { Form } from "react-router-dom";

const DeleteTodo = () => {
  return (
    <Form method="post" action="delete">
      <div>
        <button
          className={`w-24 h-10 bg-red-600 hover:bg-red-800 active:bg-red-600 text-white rounded-md`}
        >
          Delete
        </button>
      </div>
    </Form>
  );
};

export default DeleteTodo;
