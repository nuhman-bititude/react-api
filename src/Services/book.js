import axios from "./api";

const fetchAll = () =>
  axios.get("/books", {
    headers: { Authorization: localStorage.getItem("token") },
  });

const fetchOne = (data) =>
  axios.get(`/book/${data.id}`, data, {
    headers: { Authorization: localStorage.getItem("token") },
  });

const createBook = (data) =>
  axios.post("/book/create", data, {
    headers: { Authorization: localStorage.getItem("token") },
  });

const deleteBook = (data) =>
  axios.post(`/book/delete/${data.id}`, data, {
    headers: { Authorization: localStorage.getItem("token") },
  });

const updateBook = (data) =>
  axios.post(`/book/update/${data.id}`, data, {
    headers: { Authorization: localStorage.getItem("token") },
  });

export { fetchAll, createBook, deleteBook, updateBook, fetchOne };
