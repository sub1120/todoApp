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

export default todoReducer;
