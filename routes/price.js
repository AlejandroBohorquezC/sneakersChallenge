const {Router} = require('express');
const {getPrices} = require('../controllers/prices');
// const { validarCampos } = require('../midlewares/validarCampos');
// const { check } = require('express-validator');


const router = Router();

router.get('/:userId/:productName', getPrices);


module.exports = router;