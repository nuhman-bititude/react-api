import axios from "./api";

const fetchAll = () =>
  axios.get("/authors", {
    headers: { Authorization: localStorage.getItem("token") },
  });
const fetchOne = (data) =>
  axios.get(`/author/${data.id}`, data, {
    headers: { Authorization: localStorage.getItem("token") },
  });
const createAuthor = (data) =>
  axios.post("/author/create", data, {
    headers: { Authorization: localStorage.getItem("token") },
  });
const deleteAuthor = (data) =>
  axios.post(`/author/delete/${data.id}`, data, {
    headers: { Authorization: localStorage.getItem("token") },
  });
const updateAuthor = (data) =>
  axios.post(`/author/update/${data.id}`, data, {
    headers: { Authorization: localStorage.getItem("token") },
  });

export { fetchAll, createAuthor, deleteAuthor, updateAuthor, fetchOne };
