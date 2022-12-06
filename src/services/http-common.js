import axios from "axios";

const storage = localStorage.length
let header = {}

header["Content-type"] = "application/json"
if (storage > 0) {
  const token = localStorage.getItem('AUTH_KEY').token
  header.Authorization = token
}

export default axios.create({
  baseURL: "https://serverless-890.netlify.app",
  headers: header
});
