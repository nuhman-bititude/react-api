import axios from "./api";

const fetchAll = () =>
  axios.get("/bookinstances", {
    headers: { Authorization: localStorage.getItem("token") },
  });
const fetchOne = (data) =>
  axios.get(`/bookinstance/${data.id}`, data, {
    headers: { Authorization: localStorage.getItem("token") },
  });
const createBookInstance = (data) =>
  axios.post("/bookinstance/create", data, {
    headers: { Authorization: localStorage.getItem("token") },
  });
const deleteBookInstance = (data) =>
  axios.post(`/bookinstance/delete/${data.id}`, data, {
    headers: { Authorization: localStorage.getItem("token") },
  });
const updateBookInstance = (data) =>
  axios.post(`/bookinstance/update/${data.id}`, data, {
    headers: { Authorization: localStorage.getItem("token") },
  });

export {
  fetchAll,
  createBookInstance,
  deleteBookInstance,
  updateBookInstance,
  fetchOne,
};
