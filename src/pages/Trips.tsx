import { useTrips } from "../hooks/useTrips";
import TripCard from "../components/TripCard";

function Trips() {
  const { trips } = useTrips();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Mis Viajes
      </h1>

      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}

export default Trips;