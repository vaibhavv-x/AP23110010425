const vehicleService = require('../services/vehicleService');
const Log = require('../logging_middleware/logger');

const addVehicle = async (req, res) => {
  try {
    const { vehicleId, type, owner } = req.body;
    if (!vehicleId || !type || !owner) {
      const errorMsg = "Missing required fields: vehicleId, type, or owner";
      await Log("backend", "error", "vehicle", errorMsg);
      return res.status(400).json({ error: errorMsg });
    }
    const newVehicle = vehicleService.addVehicle(vehicleId, type, owner);
    await Log("backend", "info", "vehicle", "Vehicle added successfully");
    return res.status(201).json({ message: "Vehicle added successfully", data: newVehicle });
  } catch (error) {
    await Log(error.stack, "error", "vehicle", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getVehicles = async (req, res) => {
  try {
    const vehicles = vehicleService.getVehicles();
    await Log("backend", "info", "vehicle", "Fetched all vehicles successfully");
    return res.status(200).json({ data: vehicles });
  } catch (error) {
    await Log(error.stack, "error", "vehicle", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addVehicle, getVehicles };
