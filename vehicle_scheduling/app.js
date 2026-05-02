require('dotenv').config();
const express = require('express');
const vehicleRoutes = require('./src/routes/vehicleRoutes');
const maintenanceRoutes = require('./src/routes/maintenanceRoutes');
const scheduleRoutes = require('./src/routes/scheduleRoutes');
const Log = require('./src/logging_middleware/logger');

const app = express();

app.use(express.json());

// Routes
app.use('/vehicles', vehicleRoutes);
app.use('/maintenance', maintenanceRoutes);
app.use('/schedule', scheduleRoutes);

// Global Error Handler
app.use(async (err, req, res, next) => {
  console.error(err);
  await Log(err.stack, "error", "app", err.message);
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
