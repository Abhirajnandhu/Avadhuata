import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const registerUser = (userData) => API.post("/users/register", userData);
export const loginUser = (userData) => API.post("/users/login", userData);
// api to get particular user
// export const getSingleUser = (id) => API.get(`/users/${id}`);

export const addExpense = (expenseData) =>
  API.post("/expenses/add", expenseData, {
    headers: { token: localStorage.getItem("token") },
  });
// export const getExpenses = (userId) => API.get(`/expense/list/${userId}`);
export const getExpenses = () =>
  API.get("/expenses", {
    headers: { token: localStorage.getItem("token") },
  });
