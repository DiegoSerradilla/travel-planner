import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/trips">Viajes</Link> |{" "}
      <Link to="/new-trip">Nuevo Viaje</Link> |{" "}
      <Link to="/stats">Estadísticas</Link>
    </nav>
  );
}

export default Navbar;