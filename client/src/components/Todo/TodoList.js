import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div className="border-slate-200 border-2 rounded-lg h-full">
      <ul className="table-auto border-collapse">
        <li className="text-slate-800 p-2">Todos</li>
        {todos.map((todo) => (
          <li key={todo.id} className="border-slate-200 border-t-2">
            <Todo todoId={todo.id} title={todo.title}></Todo>
          </li>
        ))}
        <li className="border-slate-200 border-t-2 text-slate-800"></li>
      </ul>
    </div>
  );
};

export default TodoList;
