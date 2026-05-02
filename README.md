# Vehicle Maintenance Scheduler

## Overview

This is a simple backend microservice to manage vehicles and schedule their maintenance. It provides APIs to add vehicles, view all vehicles, schedule maintenance, and fetch maintenance records for a specific vehicle.

## Setup
npm install
node app.js

Create a .env file:
PORT=3000
ACCESS_TOKEN=your_access_token

## APIs

* POST /vehicles → Add a vehicle
* GET /vehicles → Get all vehicles
* POST /maintenance → Schedule maintenance
* GET /maintenance/:vehicleId → Get maintenance by vehicle

## Screenshots

### POST /vehicles
<img width="808" height="685" alt="Screenshot 2026-05-02 at 12 56 08 PM" src="https://github.com/user-attachments/assets/e10345cd-378e-4857-94d7-84c882e6191e" />

### GET /vehicles
<img width="809" height="784" alt="Screenshot 2026-05-02 at 12 56 30 PM" src="https://github.com/user-attachments/assets/479b60d2-d6c0-4194-b9ea-c509c0084e31" />

### POST /maintenance
<img width="824" height="708" alt="Screenshot 2026-05-02 at 12 55 21 PM" src="https://github.com/user-attachments/assets/da1770ec-3b6c-4922-a2e2-e808d74e0e2f" />

## Notes

* Uses layered architecture (routes → controllers → services)
* Data stored in memory
* Logging integrated using external API
