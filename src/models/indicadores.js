const axios = require('axios');

const getLast = async () => (
    axios
        .get('last')
        .then((response) => {
            const { data } = response;
            return data;
        })
        .catch((error) => error)
);

const getValue = async ({ value }) => (
    axios
        .get(`values/${value}`)
        .then((response) => {
            const { data } = response;
            return data;
        })
        .catch((error) => error)
);

const getValueByDate = async ({ value, date }) => (
    axios
        .get(`date/${value}/${date}`)
        .then((response) => {
            const { data } = response;
            return data;
        })
        .catch((error) => error)
);

module.exports = {
    getLast,
    getValue,
    getValueByDate,
};
