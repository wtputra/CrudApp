import axios from "axios";
import { useLoadingStore } from "../global-state/useLoadingStore";

const axios1 = axios.create();

// Add a request interceptor
axios1.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("nge-request nih");
    useLoadingStore.setState({ loading: true });

    return config;
  },
  function (error) {
    // Do something with request error
    console.log("nge-request-nya error");
    useLoadingStore.setState({ loading: false });

    return Promise.reject(error);
  }
);

// Add a response interceptor
axios1.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("nge-respon nih");
    useLoadingStore.setState({ loading: false });

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("nge-respon-nya error");
    useLoadingStore.setState({ loading: false });

    return Promise.reject(error);
  }
);

export default axios1;
