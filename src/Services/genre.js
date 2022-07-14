import axios from "./api";

const fetchAll = () =>
  axios.get("/genres", {
    headers: { Authorization: localStorage.getItem("token") },
  });

const fetchOne = (data) =>
  axios.get(`/genre/${data.id}`, data, {
    headers: { Authorization: localStorage.getItem("token") },
  });

const createGenre = (data) =>
  axios.post("/genre/create", data, {
    headers: { Authorization: localStorage.getItem("token") },
  });

const deleteGenre = (data) =>
  axios.post(`/genre/delete/${data.id}`, data, {
    headers: { Authorization: localStorage.getItem("token") },
  });

const updateGenre = (data) =>
  axios.post(`/genre/update/${data.id}`, data, {
    headers: { Authorization: localStorage.getItem("token") },
  });

export { fetchAll, createGenre, deleteGenre, updateGenre, fetchOne };
