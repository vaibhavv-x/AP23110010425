const express = require('express');
const { scheduleMaintenance, getMaintenanceHistory } = require('../controllers/maintenanceController');

const router = express.Router();

router.post('/', scheduleMaintenance);
router.get('/:vehicleId', getMaintenanceHistory);

module.exports = router;
