import { useState } from "react";

function NewTrip() {
  const [destino, setDestino] = useState("");
  const [fecha, setFecha] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [descripcion, setDescripcion] = useState("");

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Nuevo Viaje
      </h1>

      <div className="bg-white shadow-md rounded-xl p-6">
        <input
          type="text"
          placeholder="Destino"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="number"
          placeholder="Presupuesto"
          value={presupuesto}
          onChange={(e) => setPresupuesto(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
          rows={4}
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Guardar viaje
        </button>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Vista previa
        </h2>

        <p>
          <strong>Destino:</strong> {destino}
        </p>

        <p>
          <strong>Fecha:</strong> {fecha}
        </p>

        <p>
          <strong>Presupuesto:</strong> {presupuesto} €
        </p>

        <p>
          <strong>Descripción:</strong> {descripcion}
        </p>
      </div>
    </div>
  );
}

export default NewTrip;