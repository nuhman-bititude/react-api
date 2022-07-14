import axios from "./api";

const fetchAll = () => axios.get("/bookinstances");
const fetchOne = (data) => axios.get(`/bookinstance/${data.id}`, data);
const createBookInstance = (data) => axios.post("/bookinstance/create", data);
const deleteBookInstance = (data) =>
  axios.post(`/bookinstance/delete/${data.id}`, data);
const updateBookInstance = (data) =>
  axios.post(`/bookinstance/update/${data.id}`, data);

export {
  fetchAll,
  createBookInstance,
  deleteBookInstance,
  updateBookInstance,
  fetchOne,
};
