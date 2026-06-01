import { mockTrips } from "../utils/mockTrips";
import TripCard from "../components/TripCard";

function Trips() {
  return (
    <div>
      <h1>Mis Viajes</h1>

      {mockTrips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}

export default Trips;