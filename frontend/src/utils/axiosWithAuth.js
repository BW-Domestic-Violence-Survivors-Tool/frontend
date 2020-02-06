import axios from "axios";

<<<<<<< HEAD
export default() => {
  const token = localStorage.getItem("token")
  return axios.create({
    baseURL: "https://domestic-violence-build-week.herokuapp.com/login",
=======
export default () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://domestic-violence-build-week.herokuapp.com",
>>>>>>> f04a2644ea24f10810ffea6c4e4ca013d28c33e1
    headers: {
      Authorization: `${token}`
    }
  });
};

