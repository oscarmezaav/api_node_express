const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: 'Consulta profesores' });
});

router.post('/', (req, res) => {
    res.json({ msg: 'Ingreso de profesores' });
});

router.put('/', (req, res) => {
    res.json({ msg: 'Actualización de profesores' });
});

router.delete('/', (req, res) => {
    res.json({ msg: 'Borrado de profesores' });
});

router.route('/:id')
    .get((req, res) => {
        res.json({ msg: 'Consulta de un profesor' });
    })
    .put((req, res) => {
        res.json({ msg: 'Actualización de un profesor' });
    })
    .delete((req, res) => {
        res.json({ msg: 'Borrado de un profesor' });
    });


module.exports = router;