const maintenanceService = require('../services/maintenanceService');
const Log = require('../logging_middleware/logger');

const scheduleMaintenance = async (req, res) => {
  try {
    const { vehicleId, date, type } = req.body;
    if (!vehicleId || !date || !type) {
      const errorMsg = "Missing required fields: vehicleId, date, or type";
      await Log("backend", "error", "maintenance", errorMsg);
      return res.status(400).json({ error: errorMsg });
    }
    const record = maintenanceService.scheduleMaintenance(vehicleId, date, type);
    await Log("backend", "info", "maintenance", "Maintenance scheduled successfully");
    return res.status(201).json({ message: "Maintenance scheduled successfully", data: record });
  } catch (error) {
    await Log(error.stack, "error", "maintenance", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getMaintenanceHistory = async (req, res) => {
  try {
    const { vehicleId } = req.params;
    const history = maintenanceService.getMaintenanceHistory(vehicleId);
    await Log("backend", "info", "maintenance", `Fetched maintenance history for vehicle ${vehicleId}`);
    return res.status(200).json({ data: history });
  } catch (error) {
    await Log(error.stack, "error", "maintenance", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { scheduleMaintenance, getMaintenanceHistory };
