const router = require('express').Router();
const Indicadores = require('../controllers/indicadores');

router.get('/last', Indicadores.getLast);
router.get('/values/:value', Indicadores.getValue);
router.get('/date/:value/:date', Indicadores.getValueByDate);

module.exports = router;
