const Indicadores = require('../models/indicadores');

const errorResponse = {
    status: 'error',
    message: 'Error de servicio, intentelo mas tarde',
    code: '99',
};

/**
 * obtiene ultimos valores de todos los elementos
 */
const getLast = async (req, res) => {
    res.set('Content-Type', 'application/json');
    const response = await Indicadores.getLast();
    if (response) {
        const result = [];
        Object.keys(response).forEach((value) => {
            result.push(response[value]);
        });
        return res.status(200).send(result);
    }
    return res.status(500).send(errorResponse);
};

/**
 *  valores de un elemento particular
 */
const getValue = async (req, res) => {
    res.set('Content-Type', 'application/json');
    const response = await Indicadores.getValue(req.params);
    if (response) {
        const {
            key,
            name,
            unit,
            values,
        } = response;
        const result = {
            key,
            name,
            unit,
            unitValues: [],
        };
        Object.keys(values).forEach((value) => {
            result.unitValues.push(
                {
                    date: value,
                    value: values[value],
                },
            );
        });

        return res.status(200).send(result);
    }
    return res.status(500).send(errorResponse);
};

/**
 *  obtiene valor de un elemento particular en una fecha en particular
 */
const getValueByDate = async (req, res) => {
    res.set('Content-Type', 'application/json');
    const response = await Indicadores.getValueByDate(req.params);
    if (response) {
        return res.status(200).send(response);
    }
    return res.status(500).send(errorResponse);
};

module.exports = {
    getLast,
    getValue,
    getValueByDate,
};
