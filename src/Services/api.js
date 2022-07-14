import axios from "axios";

const instance = axios.create({
  baseURL: "https://local-library-task-api.herokuapp.com",
  // baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
