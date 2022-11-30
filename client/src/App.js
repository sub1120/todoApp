import EditTodoPanel from "./components/Panel/EditTodoPanel";
import CreateTodoPanel from "./components/Panel/CreateTodoPanel";
import todoReducer from "./todoReducer";
import { useState, useReducer, useEffect } from "react";
import axios from "axios";

const initialAppState = {
  todos: [],
  selectedTodo: null,
};

function App() {
  const [appState, dispatch] = useReducer(todoReducer, initialAppState);

  const [isLoading, setIsLoading] = useState(true);

  const loadTodos = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("http://localhost:4000/getTodos");
      const todoList = res.data.data;

      dispatch({ type: "init", todos: todoList, selectedTodo: null });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="m-5 flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
      <div className="flex flex-col h-screen lg:basis-1/2">
        <CreateTodoPanel
          todos={appState.todos}
          selectedTodo={appState.selectedTodo}
          appDispatch={dispatch}
        ></CreateTodoPanel>
      </div>
      <div className="flex flex-col h-screen border-2 p-6 rounded-md lg:basis-1/2">
        {appState.selectedTodo && (
          <EditTodoPanel
            selectedTodo={appState.selectedTodo}
            key={appState.selectedTodo}
            appDispatch={dispatch}
          ></EditTodoPanel>
        )}
      </div>
    </div>
  );
}

export default App;
