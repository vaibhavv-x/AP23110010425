const axios = require('axios');
const { solveKnapsack } = require('../utils/knapsack');

const DEPOTS_API = 'http://20.207.122.201/evaluation-service/depots';
const VEHICLES_API = 'http://20.207.122.201/evaluation-service/vehicles';

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  }
});

const generateSchedule = async () => {
  // Fetch data
  const [depotsRes, vehiclesRes] = await Promise.all([
    axios.get(DEPOTS_API, getHeaders()),
    axios.get(VEHICLES_API, getHeaders())
  ]);

  const depots = depotsRes.data.depots || [];
  const tasks = vehiclesRes.data.vehicles || [];

  const scheduleResult = [];

  // Solve Knapsack for each depot
  for (const depot of depots) {
    const { ID, MechanicHours } = depot;
    const result = solveKnapsack(tasks, MechanicHours);
    
    // Calculate total duration utilized
    const totalDuration = result.selectedTasks.reduce((acc, curr) => acc + curr.Duration, 0);

    scheduleResult.push({
      depotId: ID,
      mechanicHours: MechanicHours,
      utilizedHours: totalDuration,
      maxImpact: result.maxImpact,
      selectedTasks: result.selectedTasks
    });
  }

  return scheduleResult;
};

module.exports = { generateSchedule };
