const express = require('express');
const ownerRoutes = require('./routes/ownerRoutes');
const houseRoute = require('./routes/houseRoutes');
const app = express();
const cors = require('cors');

app.use(cors());

app.use("/owner", ownerRoutes);
// app.use("/house", houseController);


app.use((req, res) => {
  res.status(404).send('404 not found...');
})

module.exports = app;