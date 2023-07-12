import axios from "axios";

const AxiosClient = axios.create({
  baseURL:'https://booking-app-backend-2z33.onrender.com/',
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default AxiosClient;