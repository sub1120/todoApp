import { NavLink } from "react-router-dom";

const Todo = ({ todoId, title }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) => {
        const base = "block w-full px-4 py-2";
        return isActive
          ? `${base} bg-blue-600 text-white`
          : isPending
          ? `${base} bg-slate-600 text-white`
          : base;
      }}
      to={`todo/${todoId}`}
    >
      {title}
    </NavLink>
  );
};

export default Todo;
