const {Router} = require('express');
const {getProducts} = require('../controllers/products');
// const { validarCampos } = require('../midlewares/validarCampos');
// const { check } = require('express-validator');


const router = Router();

router.get('/', getProducts);


module.exports = router;