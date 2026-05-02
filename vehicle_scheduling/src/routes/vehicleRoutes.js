const express = require('express');
const { addVehicle, getVehicles } = require('../controllers/vehicleController');

const router = express.Router();

router.post('/', addVehicle);
router.get('/', getVehicles);

module.exports = router;
