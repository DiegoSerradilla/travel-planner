import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Trips from "./pages/Trips";
import NewTrip from "./pages/NewTrip";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/new-trip" element={<NewTrip />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;