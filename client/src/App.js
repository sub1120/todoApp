import EditTodoPanel from "./components/Panel/EditTodoPanel";
import CreateTodoPanel from "./components/Panel/CreateTodoPanel";
import { useState, useReducer, useEffect } from "react";
import axios from "axios";

const initialAppState = {
  todos: [],
  selectedTodo: null,
};

const todoListReducer = (state, action) => {
  switch (action.type) {
    case "addTodo": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            title: action.title,
          },
        ],
      };
    }
    case "deleteTodo": {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
        selectedTodo: null,
      };
    }
    case "select": {
      return {
        ...state,
        selectedTodo: {
          id: action.todo._id,
          title: action.todo.title,
          tasks: action.todo.tasks.map((task) => {
            return {
              id: task._id,
              name: task.name,
            };
          }),
        },
      };
    }
    case "init": {
      return {
        todos: action.todos.map((todo) => {
          return {
            id: todo._id,
            title: todo.title,
          };
        }),
        selectedTodo: null,
      };
    }
    default:
      return state;
  }
};

function App() {
  const [appState, dispatch] = useReducer(todoListReducer, initialAppState);

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
