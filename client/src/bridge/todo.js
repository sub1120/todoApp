import axios from "axios";

export const fetchTodos = async (order, searchTitle) => {
  try {
    const res = await axios.get(
      `/api/v1/todo?sort=${order !== null ? order : ""}&q=${
        searchTitle !== null ? searchTitle : ""
      }`
    );
    const todoList = res.data.data;

    return todoList;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const fetchTodo = async (todoId) => {
  try {
    const res = await axios.get(`/todo/${todoId}`);

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
    const res = await axios.post("/api/v1/todo", data);
    const todo = res.data.data;

    return todo;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const deleteTodo = async (todoId) => {
  try {
    const res = await axios.delete(`/api/v1/todo/${todoId}`);

    const todo = res.data.data;

    return todo;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const editTitle = async (todoId, title) => {
  try {
    const data = {
      title,
    };
    const res = await axios.put(`/api/v1/todo/${todoId}`, data);
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
    const res = await axios.put(`/api/v1/todo/${todoId}/task`, data);
    const todo = res.data.data;
    return todo;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const deleteTask = async (todoId, taskId) => {
  try {
    const res = await axios.delete(`/api/v1/todo/${todoId}/task/${taskId}`);
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

    const res = await axios.put(`/api/v1/todo/${todoId}/task/${taskId}`, data);
    const todo = res.data.data;

    return todo;
  } catch (error) {
    console.log(error);
  }

  return null;
};
