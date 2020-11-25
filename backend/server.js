const path = require("path");
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));

// GET route for sensors data
app.get("/sensors-api", (req, res) => {
  res.sendFile(path.join(__dirname, "apiData", "sensors.json"));
});

// GET route for readings data
app.get("/readings-api", (req, res) => {
  res.sendFile(path.join(__dirname, "apiData", "readings.json"));
});