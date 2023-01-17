import axios from "axios";

export const login = async (email, password) => {
  try {
    const data = { email, password };
    const res = await axios.post("/api/v1/todo", data);
    const user = res.data.user;

    return user;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const register = async (email, password, username) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {};
