import axios from "axios";

export default axios.create({
  baseURL: "https://serverless-890.netlify.app",
  "Content-type": "application/json"
});
