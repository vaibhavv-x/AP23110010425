const scheduleService = require('../services/scheduleService');
const Log = require('../logging_middleware/logger');

const getSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.generateSchedule();
    await Log("backend", "info", "schedule", "Generated schedule successfully");
    return res.status(200).json({ data: schedule });
  } catch (error) {
    await Log(error.stack, "error", "schedule", error.message);
    return res.status(500).json({ error: "Failed to generate schedule" });
  }
};

module.exports = { getSchedule };
