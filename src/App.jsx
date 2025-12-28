import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Levels from './pages/Levels';
import Contact from './pages/Contact';
import About from './pages/About';

// Componente placeholder para rutas pendientes
const Placeholder = ({ title }) => (
  <div className="h-screen flex items-center justify-center bg-gray-50">
    <h1 className="text-3xl text-gray-400 font-bold">{title} - En construcción</h1>
  </div>
);

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/admisiones" element={<Admissions />} />
          <Route path="/niveles" element={<Levels />} /> {/* <--- Actualizado */}
          <Route path="/contacto" element={<Contact />} /> {/* <--- Actualizado */}
          <Route path="/nosotros" element={<Placeholder title="Nosotros" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;