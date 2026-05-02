const { vehicles } = require('../models/store');

const addVehicle = (vehicleId, type, owner) => {
  const newVehicle = { vehicleId, type, owner, createdAt: new Date() };
  vehicles.push(newVehicle);
  return newVehicle;
};

const getVehicles = () => {
  return vehicles;
};

module.exports = {
  addVehicle,
  getVehicles
};
