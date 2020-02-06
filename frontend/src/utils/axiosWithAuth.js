import axios from "axios";

export default() => {
  const token = localStorage.getItem("token")
  return axios.create({
    baseURL: "https://domestic-violence-build-week.herokuapp.com/login",
    headers: {
      Authorization: `${token}`
    }
  });
};

