import Todo from "./Todo";

const TodoList = ({ todos, setSelectedTodo }) => {
  const selectHandler = (event) => {
    setSelectedTodo(event.target.id);
  };

  return (
    <div className="border-slate-200 border-2 rounded-lg h-full">
      <ul className="table-auto border-collapse w-full">
        <li className="text-slate-800 p-2">Todos</li>
        {todos.map((todo, i) => (
          <div
            className="border-slate-200 border-t-2 text-slate-800 active:bg-blue-600 active:text-white cursor-pointer px-4 py-2"
            key={i}
            id={todo._id}
            onClick={selectHandler}
          >
            <Todo title={todo.title} />
          </div>
        ))}
        <li className="border-slate-200 border-t-2 text-slate-800"></li>
      </ul>
    </div>
  );
};

export default TodoList;
