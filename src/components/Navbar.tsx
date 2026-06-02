import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex gap-6">
        <Link to="/">Inicio</Link>
        <Link to="/trips">Viajes</Link>
        <Link to="/new-trip">Nuevo Viaje</Link>
        <Link to="/stats">Estadísticas</Link>
      </div>
    </nav>
  );
}

export default Navbar;