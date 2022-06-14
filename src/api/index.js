import axios from "axios";

const api = axios.create({ baseURL: "https://el-geladon-api-blue.herokuapp.com/" });

export default api;