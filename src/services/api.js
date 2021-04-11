import axios from 'axios';

const api = axios.create({
    baseURL:'https://localhost:44323/api/patentes'
});

export default api;