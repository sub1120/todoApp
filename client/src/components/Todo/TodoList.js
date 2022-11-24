import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div className="border-slate-200 border-2 rounded-lg h-full">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="text-slate-800">
            <th className="p-2">Todos</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, i) => (
            <tr className="border-slate-200 border-t-2 text-slate-800" key={i}>
              <td className="px-4 py-2">
                <Todo title={todo.title} />
              </td>
            </tr>
          ))}
          <tr className="border-slate-200 border-t-2 text-slate-800"></tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
