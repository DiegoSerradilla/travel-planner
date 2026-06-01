import type { Trip } from "../types/Trip";

interface TripCardProps {
  trip: Trip;
}

function TripCard({ trip }: TripCardProps) {
  return (
    <div>
      <h3>{trip.destino}</h3>
      <p>Fecha: {trip.fecha}</p>
      <p>Presupuesto: {trip.presupuesto} €</p>
      <p>{trip.descripcion}</p>
      <hr />
    </div>
  );
}

export default TripCard;