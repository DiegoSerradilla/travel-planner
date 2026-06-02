import { useTrips } from "../hooks/useTrips";

function Stats() {
  const { trips } = useTrips();

  const totalViajes = trips.length;

  const presupuestoTotal = trips.reduce(
    (total, trip) => total + trip.presupuesto,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Estadísticas
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-bold">
            Total de viajes
          </h2>

          <p className="text-4xl mt-4 text-blue-600">
            {totalViajes}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-bold">
            Presupuesto total
          </h2>

          <p className="text-4xl mt-4 text-green-600">
            {presupuestoTotal} €
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;