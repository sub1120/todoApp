const todoReducer = (state, action) => {
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
        selectedTodoId: null,
      };
    }
    case "setSelectedTodoId": {
      return {
        ...state,
        selectedTodoId: action.id,
      };
    }
    case "updateTodo": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.id
            ? {
                ...todo,
                title: action.todo.title,
                tasks: action.todo.tasks.map((task) => {
                  return {
                    id: task._id,
                    name: task.name,
                  };
                }),
              }
            : todo;
        }),
      };
    }
    case "loadTodos": {
      return {
        todos: action.todos.map((todo) => {
          return {
            id: todo._id,
            title: todo.title,
            tasks: todo.tasks.map((task) => {
              return {
                id: task._id,
                name: task.name,
              };
            }),
          };
        }),
        selectedTodoId: action.id,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
