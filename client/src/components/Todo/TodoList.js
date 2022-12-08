import { Form, Link } from "react-router-dom";
import Todo from "./Todo";

const TodoList = ({ todos, order }) => {
  return (
    <div className="border-slate-200 border-2 rounded-lg h-full">
      <ul className="table-auto border-collapse h-full">
        <li className="flex justify-between text-slate-800 p-2">
          <Form id="search-form" role="search">
            <input
              className="p-3 h-9 border-2 border-slate-300 rounded-md focus:outline-none"
              placeholder="search"
              name="q"
              type="search"
              defaultValue=""
              id="q"
            ></input>
          </Form>

          <div className="flex">
            <div>
              <Link
                className="active:text-blue-800"
                to={`?sort=${order === "asce" ? "desc" : "asce"}`}
              >
                Sort
              </Link>
            </div>
            <div className="h-7 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                className={`bi bi-sort-${order === "asce" ? "down" : "up"}`}
                viewBox="0 0 16 16"
              >
                {order === "asce" ? (
                  <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                ) : (
                  <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                )}
              </svg>
            </div>
          </div>
        </li>
        <li className="border-slate-200 border-t-2 text-slate-800"></li>
        {todos.length !== 0 ? (
          todos.map((todo) => (
            <li key={todo.id} className="border-slate-200 border-b-2">
              <Todo
                todoId={todo.id}
                title={todo.title}
                modifiedDate={todo.modifiedDate}
              ></Todo>
            </li>
          ))
        ) : (
          <div className="flex justify-center items-center h-full">
            <h1>No Todo Exists</h1>
          </div>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
