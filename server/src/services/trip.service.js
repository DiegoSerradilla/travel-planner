const trips = [
  {
    id: 1,
    destino: "Budapest",
    fecha: "2025-12-09",
    presupuesto: 600,
    descripcion: "Viaje de Navidad",
  },
  {
    id: 2,
    destino: "Filipinas",
    fecha: "2026-08-15",
    presupuesto: 2500,
    descripcion: "Vacaciones de verano",
  },
];

function getAllTrips() {
  return trips;
}

module.exports = {
  getAllTrips,
};