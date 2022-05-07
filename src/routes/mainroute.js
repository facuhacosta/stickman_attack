const express = require('express');
const router = express.Router();
const weaponsController = require('../controllers/weaponsController');

router.get('/weapons', weaponsController.list);

router.post('/weapons', weaponsController.save);

router.get('/weapons/delete/:id', weaponsController.delete);

router.get('/weapons/:id', weaponsController.listOne);

router.post('/weapons/update/:id', weaponsController.update);

module.exports = router