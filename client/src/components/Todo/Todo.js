import React from "react";
import { NavLink } from "react-router-dom";

const Todo = ({ todoId, title, modifiedDate }) => {
  return (
    <NavLink
      className={({ isActive, isPending }) => {
        const base = "block flex justify-between w-full p-2";
        return isActive
          ? `${base} bg-blue-600 text-white`
          : isPending
          ? `${base} bg-slate-600 text-white`
          : base;
      }}
      to={`todo/${todoId}`}
    >
      <div className="p-1">{title}</div>
      <div className="bg-emerald-600 text-white p-1 rounded">
        {modifiedDate}
      </div>
    </NavLink>
  );
};

export default Todo;
