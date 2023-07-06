import axios from "axios";
import AuthApi from "./auth.api";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const access_token = localStorage.getItem("accessToken");
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },
  async (err) => {
    console.log(err);
    if (err.response.status === 401) {
      await AuthApi.logout();
      localStorage.removeItem("accessToken");
    }

    const originalRequest = err.config;

    if (err.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      // 토큰 재발급 요청
      const res = await axiosInstance.post("/user/jwt");

      // 성공
      if (res.status === 200) {
        const token = res.data.data;
        localStorage.setItem(token);
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
        return axiosInstance(originalRequest);
      }
    }
  }
);
