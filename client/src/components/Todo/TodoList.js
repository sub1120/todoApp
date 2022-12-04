import { fetchTodo } from "../../bridge/todo";

const TodoList = ({ todos, appDispatch }) => {
  const onClickHandler = async (e) => {
    const todo = await fetchTodo(e.target.id);

    if (!todo) {
      return;
    }

    appDispatch({
      type: "setSelectedTodoId",
      id: todo._id,
    });
  };

  return (
    <div className="border-slate-200 border-2 rounded-lg h-full">
      <ul className="table-auto border-collapse w-full">
        <li className="text-slate-800 p-2">Todos</li>
        {todos.map((todo) => (
          <li
            onClick={onClickHandler}
            id={todo.id}
            key={todo.id}
            className="border-slate-200 border-t-2 text-slate-800 active:bg-blue-600 active:text-white cursor-pointer px-4 py-2"
          >
            {todo.title}
          </li>
        ))}
        <li className="border-slate-200 border-t-2 text-slate-800"></li>
      </ul>
    </div>
  );
};

export default TodoList;
