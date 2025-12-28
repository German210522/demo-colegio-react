// src/layouts/MainLayout.jsx
import Navbar from '../components/Navbar';
// Asume que crearás un Footer similar al Navbar
// import Footer from '../components/Footer'; 

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {/* <Footer /> Aquí iría el footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2025 Colegio Demo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default MainLayout;