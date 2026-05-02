const { maintenanceRecords } = require('../models/store');

const scheduleMaintenance = (vehicleId, date, type) => {
  const record = { vehicleId, date, type, scheduledAt: new Date() };
  maintenanceRecords.push(record);
  return record;
};

const getMaintenanceHistory = (vehicleId) => {
  return maintenanceRecords.filter(record => record.vehicleId === vehicleId);
};

module.exports = {
  scheduleMaintenance,
  getMaintenanceHistory
};
