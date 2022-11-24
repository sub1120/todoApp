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
            <td className="p-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
