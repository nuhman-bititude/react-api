import axios from "./api";

const fetchAll = () => axios.get("/books");

const fetchOne = (data) => axios.get(`/book/${data.id}`, data);

const createBook = (data) => axios.post("/book/create", data);

const deleteBook = (data) => axios.post(`/book/delete/${data.id}`, data);

const updateBook = (data) => axios.post(`/book/update/${data.id}`, data);

export { fetchAll, createBook, deleteBook, updateBook, fetchOne };
