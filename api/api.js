import axios from 'axios';

var ip = require("ip");
const api = axios.create({
    baseURL: ip.address()
});
export default api;
