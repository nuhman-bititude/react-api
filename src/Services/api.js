import axios from "axios";

const instance = axios.create({
  baseURL: "https://local-library-task-api.herokuapp.com",
});

export default instance;
