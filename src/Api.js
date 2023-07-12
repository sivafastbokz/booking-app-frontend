import axios from "axios";

const isDevelopment =process.env.NODE_ENV === "development"

const baseURL = isDevelopment ? 'http://localhost:5000':'https://booking-app-backend-2z33.onrender.com'
console.log(baseURL)
const AxiosClient = axios.create({
  baseURL,
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default AxiosClient;