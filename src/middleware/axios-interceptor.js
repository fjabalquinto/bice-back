const axios = require('axios');

const urlApi = 'https://www.indecon.online/';

axios.defaults.params = {};

axios.interceptors.request.use((config) => {
    const endpoint = `${urlApi}${config.url}`;
    config.url = endpoint;
    return config;
}, (err) => Promise.reject(err));
