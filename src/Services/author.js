import axios from "./api";

const fetchAll = () => axios.get("/authors");
const fetchOne = (data) => axios.get(`/author/${data.id}`, data);
const createAuthor = (data) => axios.post("/author/create", data);
const deleteAuthor = (data) => axios.post(`/author/delete/${data.id}`, data);
const updateAuthor = (data) => axios.post(`/author/update/${data.id}`, data);

export { fetchAll, createAuthor, deleteAuthor, updateAuthor, fetchOne };
