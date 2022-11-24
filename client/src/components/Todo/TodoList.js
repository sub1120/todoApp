import Todo from "./Todo";

const TodoList = () => {
  return (
    <div className="border-slate-200 border-2 rounded-lg h-full">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="text-slate-800">
            <th className="p-2">Todos</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-slate-200 border-t-2 text-slate-800">
            <td className="p-2">
              <Todo title="Todo1" />
            </td>
          </tr>
          <tr className="border-slate-200 border-t-2 text-slate-800">
            <td className="p-2">
              <Todo title="Todo2" />
            </td>
          </tr>
          <tr className="border-slate-200 border-t-2 text-slate-800">
            <td className="p-2">
              <Todo title="Todo3" />
            </td>
          </tr>
          <tr className="border-slate-200 border-t-2 text-slate-800"></tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
