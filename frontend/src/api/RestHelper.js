import axios from "axios";
import { envVariables } from "../config";

const base = envVariables[process.env.NODE_ENV].baseURLAPI;

const axiosInstance = axios.create({
  baseURL: base,
});

// use axios interceptors if needed (EX: auth with jwt) to modify headers

class RestHelper {
  constructor(instance) {
    this.instance = instance;
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, params) {
    return this.instance.post(url, params);
  }

  delete(url, params) {
    return this.instance.delete(url, params);
  }

  put(url, params) {
    return this.instance.put(url, params);
  }

  patch(url, params) {
    return this.instance.patch(url, params);
  }

}
export default new RestHelper(axiosInstance);
