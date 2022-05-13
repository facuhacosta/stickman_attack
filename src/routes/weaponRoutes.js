const express = require('express');
const router = express.Router();
const weaponsController = require('../controllers/weaponsController');

router.get('/list', weaponsController.list);

router.post('/add', weaponsController.save);

router.delete('/delete/:id', weaponsController.delete);

router.get('/:id', weaponsController.listOne);

router.post('/update/:id', weaponsController.update);

module.exports = router