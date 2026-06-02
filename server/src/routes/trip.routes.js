const express = require("express");
const { getTrips } = require("../controllers/trip.controller");

const router = express.Router();

router.get("/", getTrips);

module.exports = router;