function Home() {
  return (
    <div className="max-w-5xl mx-auto p-10 text-center">
      <h1 className="text-6xl font-bold text-blue-600">
        Travel Planner
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Organiza, planifica y gestiona todos tus viajes desde una única plataforma.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-bold">📍 Destinos</h2>
          <p className="mt-2 text-gray-600">
            Guarda todos los lugares que quieres visitar.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-bold">💰 Presupuestos</h2>
          <p className="mt-2 text-gray-600">
            Controla cuánto planeas gastar en cada viaje.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-bold">📅 Planificación</h2>
          <p className="mt-2 text-gray-600">
            Organiza fechas y actividades fácilmente.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;