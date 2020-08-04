import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 2000,
});
instance.interceptors.request.use(
  (config) => config,
  (error) => {
    return new Promise(() => {});
  }
);
instance.interceptors.response.use((config) => config.data);

export default instance;
