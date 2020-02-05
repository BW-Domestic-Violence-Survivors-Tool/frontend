import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    // configuration object
    baseURL: "https://domestic-violence-build-week.herokuapp.com",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
