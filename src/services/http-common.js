import axios from "axios";
export default axios.create({
  baseURL: "https://assited.herokuapp.com",
  headers: {
    "Content-type": "application/json",
  },
});
