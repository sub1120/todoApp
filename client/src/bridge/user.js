import axios from "axios";

export const login = async (email, password) => {
  try {
    const data = { email, password };
    const res = await axios.post("/api/v1/login", data);
    const user = res.data.user;

    return user;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const register = async (email, password, username) => {
  try {
    const data = { name: username, email, password };
    const res = await axios.post("/api/v1/register", data);
    const user = res.data.user;

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    await axios.post("/api/v1/logout");
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const res = await axios.get("/api/v1/user");
    const user = res.data.user;

    return user;
  } catch (error) {
    console.log(error);
  }

  return null;
};
