const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');

router.get('/', profesoresControllerController.consultar);

router.post('/', profesoresControllerController.ingresar);

router.route('/:id')
    .get(profesoresControllerController.consultarDetalle)
    .put(profesoresControllerController.actualizar)
    .delete(profesoresControllerController.borrar);

module.exports = router;