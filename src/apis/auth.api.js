import { axiosInstance } from "./core";

const AuthApi = {
  login(email, password) {
    return axiosInstance.post("/user/login", { email, password });
  },
};

export default AuthApi;
