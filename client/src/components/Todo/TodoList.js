import axios from "axios";

const TodoList = ({ todos, appDispatch }) => {
  const onClickHandler = async (e) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/todo/${e.target.id}`
      );

      const todo = res.data.data;

      appDispatch({
        type: "setSelectedTodoId",
        id: todo._id,
      });
    } catch (error) {
      console.log(error);
    }
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
