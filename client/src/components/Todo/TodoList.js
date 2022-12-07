import { Link, NavLink } from "react-router-dom";

const TodoList = ({ todos }) => {
  return (
    <div className="border-slate-200 border-2 rounded-lg h-full">
      <ul className="table-auto border-collapse w-full">
        <li className="text-slate-800 p-2">Todos</li>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="border-slate-200 border-t-2 text-slate-800 cursor-pointer"
          >
            <NavLink
              className={({ isActive, isPending }) => {
                const base = "block w-full px-4 py-2";
                return isActive
                  ? `${base} bg-blue-600 text-white`
                  : isPending
                  ? `${base} bg-slate-600 text-white`
                  : base;
              }}
              to={`todo/${todo.id}`}
            >
              {todo.title}
            </NavLink>
          </li>
        ))}
        <li className="border-slate-200 border-t-2 text-slate-800"></li>
      </ul>
    </div>
  );
};

export default TodoList;
