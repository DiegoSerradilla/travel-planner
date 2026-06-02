const { getAllTrips } = require("../services/trip.service");

function getTrips(req, res) {
  const trips = getAllTrips();

  res.status(200).json(trips);
}

module.exports = {
  getTrips,
};