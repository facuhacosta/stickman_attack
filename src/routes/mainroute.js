const express = require('express');
const router = express.Router();
const weaponsController = require('../controllers/weaponsController');

router.get('/', weaponsController.list);

router.post('/', weaponsController.save);

router.get('/delete/:id', weaponsController.delete);

router.get('/update/:id', weaponsController.listOne);

router.post('/update/:id', weaponsController.update);

module.exports = router