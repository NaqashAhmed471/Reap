import axios from "axios";
import swal from "sweetalert";

const instance = axios.create({
  baseURL: "http://51.195.239.118:5566",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const ApiService = {
  async get(url) {
    try {
      const res = await instance.get(url);
      console.log("naqash", res);
      return res;
    } catch (reason) {
      return await swal(`${reason}`, {
        icon: "warning",
      });
    }
  },

  async post(url, data) {
    try {
      const res = await instance.post(url, data);
      return res;
    } catch (reason) {
      console.log("resonnnnnn", reason);
      return await swal(`${reason}`, {
        icon: "warning",
      });
    }
  },

  async put(url, data) {
    try {
      const res = await instance.put(url, data);
      return res;
    } catch (reason) {
      return await swal(`${reason}`, {
        icon: "warning",
      });
    }
  },

  async delete(url, data) {
    try {
      const res = await instance.delete(url, { data: { id: data } });
      return res;
    } catch (reason) {
      return await swal(`${reason}`, {
        icon: "warning",
      });
    }
  },

  awaitAll() {
    return axios
      .all(Array.from(arguments))
      .then(axios.spread((...responses) => responses))
      .catch((reasons) => Promise.reject(reasons));
  },
};

export default ApiService;
