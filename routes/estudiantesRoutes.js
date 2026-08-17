const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'Consulta estudiantes' });
});

router.post('/', (req, res) => {
    res.json({ msg: 'Ingreso de estudiantes' });
});

router.put('/', (req, res) => {
    res.json({ msg: 'Actualización de estudiantes' });
});

router.delete('/', (req, res) => {
    res.json({ msg: 'Borrado de estudiantes' });
});

router.route('/:id')
    .get((req, res) => {
        res.json({ msg: 'Consulta de un estudiante' });
    })
    .put((req, res) => {
        res.json({ msg: 'Actualización de un estudiante' });
    })
    .delete((req, res) => {
        res.json({ msg: 'Borrado de un estudiante' });
    });


module.exports = router;