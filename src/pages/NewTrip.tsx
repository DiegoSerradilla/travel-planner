import { useState } from "react";

function NewTrip() {
  const [destino, setDestino] = useState("");
  const [fecha, setFecha] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [descripcion, setDescripcion] = useState("");

  return (
    <div>
      <h1>Nuevo Viaje</h1>

      <input
        type="text"
        placeholder="Destino"
        value={destino}
        onChange={(e) => setDestino(e.target.value)}
      />

      <br />
      <br />

      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Presupuesto"
        value={presupuesto}
        onChange={(e) => setPresupuesto(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <hr />

      <h2>Vista previa</h2>

      <p>Destino: {destino}</p>
      <p>Fecha: {fecha}</p>
      <p>Presupuesto: {presupuesto} €</p>
      <p>Descripción: {descripcion}</p>
    </div>
  );
}

export default NewTrip;