const Todo = ({ title, selectHandler }) => {
  return (
    <div className="border-slate-200 border-t-2 text-slate-800 active:bg-blue-600 active:text-white cursor-pointer px-4 py-2">
      {title}
    </div>
  );
};

export default Todo;
