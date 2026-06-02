const express = require("express");
const cors = require("cors");
require("dotenv").config();

const tripRoutes = require("./routes/trip.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensaje: "Servidor Travel Planner funcionando",
  });
});

app.use("/api/trips", tripRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});