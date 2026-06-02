import { useTrips } from "../hooks/useTrips";
import TripCard from "../components/TripCard";

function Trips() {
  const { trips } = useTrips();

  return (
    <div>
      <h1>Mis Viajes</h1>

      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}

export default Trips;