require("dotenv").config();

const axios = require("axios");

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

async function Log(stack, level, pkg, message) {
  try {
    const response = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Log Sent:", response.data);
  } catch (error) {
    console.error("Log Error:", error.response?.data || error.message);
  }
  console.log("TOKEN FROM ENV:", process.env.ACCESS_TOKEN);
}

module.exports = Log;