import EditTodoPanel from "./components/Panel/EditTodoPanel";
import CreateTodoPanel from "./components/Panel/CreateTodoPanel";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const loadTodos = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "http://localhost:4000/getTodos",
      });

      setTodos(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTodos();
  });

  return (
    <div className="m-5 flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
      <div className="flex flex-col h-screen lg:basis-1/2">
        <CreateTodoPanel todos={todos}></CreateTodoPanel>
      </div>
      <div className="flex flex-col h-screen border-2 p-6 rounded-md lg:basis-1/2">
        <EditTodoPanel></EditTodoPanel>
      </div>
    </div>
  );
}

export default App;
