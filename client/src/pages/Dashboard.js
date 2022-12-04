import axios from "axios";
import React, { useReducer, useState, useEffect } from "react";

import todoReducer from "../todoReducer";
import EditTodoPanel from "../components/Panel/EditTodoPanel";
import CreateTodoPanel from "../components/Panel/CreateTodoPanel";

const initialTodoState = {
  todos: [],
  selectedTodoId: null,
};

const Dashboard = ({ user, setUser }) => {
  const [todoData, dispatch] = useReducer(todoReducer, initialTodoState);
  const [isLoading, setIsLoading] = useState(true);

  const loadTodos = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("http://localhost:4000/api/v1/todo");
      const todoList = res.data.data;
      const initialSelectedTodo = todoList[0]._id;
      dispatch({
        type: "loadTodos",
        todos: todoList,
        selectedTodoId: initialSelectedTodo, //todo id
      });
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

  const selectedTodo = todoData.todos.find(
    (todo) => todo.id === todoData.selectedTodoId
  );

  return (
    <div className="m-5 flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
      <div className="flex flex-col h-screen lg:basis-1/2">
        <CreateTodoPanel
          todos={todoData.todos}
          selectedTodo={todoData.selectedTodo}
          appDispatch={dispatch}
        ></CreateTodoPanel>
      </div>
      <div className="flex flex-col h-screen border-2 p-6 rounded-md lg:basis-1/2">
        {todoData.selectedTodoId && (
          <EditTodoPanel
            selectedTodo={selectedTodo}
            key={selectedTodo}
            appDispatch={dispatch}
          ></EditTodoPanel>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
