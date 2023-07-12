import axios from "axios";

const AxiosClient = axios.create({
  baseURL:'http://localhost:5000',
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default AxiosClient;