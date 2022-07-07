import axios from "./api";

const signUpUser = (data) => axios.post(`/user/signup`, data);
const loginUser = (data) => axios.post("/login", data);
export { signUpUser, loginUser };
