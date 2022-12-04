import axios from "axios";

export const fetchTodos = async () => {
  try {
    const res = await axios.get("http://localhost:4000/api/v1/todo");
    const todoList = res.data.data;

    return todoList;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const fetchTodo = async (todoId) => {
  try {
    const res = await axios.get(`http://localhost:4000/api/v1/todo/${todoId}`);

    const todo = res.data.data;

    return todo;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const createTodo = async (title) => {
  try {
    const data = {
      title,
      userId: 123,
    };
    const res = await axios.post("http://localhost:4000/api/v1/todo", data);
    const todo = res.data.data;

    return todo;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const deleteTodo = async (todoId) => {
  try {
    const res = await axios.delete(
      `http://localhost:4000/api/v1/todo/${todoId}`
    );

    const todo = res.data.data;

    return todo;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const editTitle = async (todoId, newTitle) => {
  try {
    const data = {
      title: newTitle,
    };
    const res = await axios.put(
      `http://localhost:4000/api/v1/todo/${todoId}`,
      data
    );
    const todo = res.data.data;
    return todo;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const addTask = async (todoId, taskName) => {
  try {
    const data = {
      taskName,
    };
    const res = await axios.put(
      `http://localhost:4000/api/v1/todo/${todoId}/task`,
      data
    );
    const todo = res.data.data;
    return todo;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const deleteTask = async (todoId, taskId) => {
  try {
    const res = await axios.delete(
      `http://localhost:4000/api/v1/todo/${todoId}/task/${taskId}`
    );
    const todo = res.data.data;

    return todo;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const editTaskName = async (todoId, taskId, newTaskName) => {
  try {
    const data = {
      taskName: newTaskName,
    };

    const res = await axios.put(
      `http://localhost:4000/api/v1/todo/${todoId}/task/${taskId}`,
      data
    );
    const todo = res.data.data;

    return todo;
  } catch (error) {
    console.log(error);
  }

  return null;
};
