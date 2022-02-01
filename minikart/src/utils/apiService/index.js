import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/v1/api/admin/",
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = JSON.parse(sessionStorage.getItem("token"));
    if (token) config.headers.authorization = token;
    return config;
  },
  function (error) {
    console.error(error.message);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (result) {
    return result;
  },
  function (error) {
    console.error(error.message);
    return Promise.reject(error);
  }
);

export const GET = async (url, params) => {
  let result = await axiosInstance.get(url, {
    params,
  });
  return result;
};

export const POST = async (url, body, options) => {
  let result = await axiosInstance.post(url, body, options);
  return result;
};

export const DELETE = async (url, params) => {
  let result = await axiosInstance.delete(url, { params });
  return result;
};

export const PUT = async (url, body, options) => {
  let result = await axiosInstance.put(url, body, options);
  return result;
};
