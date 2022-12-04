import axios from "axios";

const token = localStorage.getItem('AUTH_KEY').token

export default axios.create({
  baseURL: "https://serverless-890.netlify.app",
  headers: {
    "Content-type": "application/json",
    "Authorization": token
  },
});
