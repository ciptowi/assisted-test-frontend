import axios from "axios";
//const token = JSON.parse(localStorage.getItem("AUTH_KEY")).token
//console.log('token is', token)

export default axios.create({
  baseURL: "https://serverless-890.netlify.app",
  "Content-type": "application/json",
  //"Authorization": token
});
