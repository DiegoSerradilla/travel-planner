import type { Trip } from "../types/Trip";

interface TripCardProps {
  trip: Trip;
}

function TripCard({ trip }: TripCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-4">
      <h3 className="text-2xl font-bold text-blue-600">
        {trip.destino}
      </h3>

      <p className="mt-2">
        <strong>Fecha:</strong> {trip.fecha}
      </p>

      <p>
        <strong>Presupuesto:</strong> {trip.presupuesto} €
      </p>

      <p className="mt-2 text-gray-600">
        {trip.descripcion}
      </p>
    </div>
  );
}

export default TripCard;