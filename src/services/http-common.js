import axios from "axios";
export default axios.create({
  baseURL: "https://serverless-890.netlify.app/",
  headers: {
    "Content-type": "application/json",
  },
});
