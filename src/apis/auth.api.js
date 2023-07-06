import { axiosInstance } from "./core";

const AUTH_PATH = "/user";

const AuthApi = {
  login(email, password) {
    return axiosInstance.post(`${AUTH_PATH}/login`, { email, password });
  },

  join(email, password) {
    return axiosInstance.post(`${AUTH_PATH}/sign`, { email, password });
  },

  logout() {
    return axiosInstance.post(`${AUTH_PATH}/logout`);
  },
};

export default AuthApi;
