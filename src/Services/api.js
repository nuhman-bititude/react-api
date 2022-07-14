import axios from "axios";

const instance = axios.create({
  baseURL: "https://local-library-task-api.herokuapp.com",
  // baseURL: "http://localhost:8000",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      let new_config = { ...config };
      new_config.headers.authorization = token;
      return new_config;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
