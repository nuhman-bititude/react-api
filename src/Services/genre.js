import axios from "./api";

const fetchAll = () => axios.get("/genres");
const fetchOne = (data) => axios.get(`/genre/${data.id}`, data);
const createGenre = (data) => axios.post("/genre/create", data);
const deleteGenre = (data) => axios.post(`/genre/delete/${data.id}`, data);
const updateGenre = (data) => axios.post(`/genre/update/${data.id}`, data);

export { fetchAll, createGenre, deleteGenre, updateGenre, fetchOne };
